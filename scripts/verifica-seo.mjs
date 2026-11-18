// Verifiche SEO sul sito generato (cartella "out"), secondo docs/seo-content-spec.md (sezioni 12 e 13).
// Gira da solo dopo "npm run build" e scrive il risultato nel log (scheda Actions su GitHub).
// Non blocca la pubblicazione: per bloccarla in caso di errori, usa VERIFICA_SEO_STRICT=1.
import fs from "node:fs";
import path from "node:path";

const SITO = "https://vetrinastudiosocial.it";
const OUT = path.resolve(process.argv[2] || "out");
const errori = [];
const avvisi = [];

function leggi(rel) {
  const f = path.join(OUT, rel);
  return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : null;
}
function decodifica(t) {
  return t.replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function attr(tag, nome) {
  const m = tag.match(new RegExp(`\\s${nome}="([^"]*)"`));
  return m ? decodifica(m[1]) : null;
}
function metaTags(html) {
  return html.match(/<meta\b[^>]*>/g) || [];
}

// robots.txt e sitemap.xml
const robots = leggi("robots.txt");
const sitemap = leggi("sitemap.xml");
if (!robots) errori.push("robots.txt mancante");
else if (!robots.includes(`Sitemap: ${SITO}/sitemap.xml`)) errori.push("robots.txt non indica la sitemap");
if (!sitemap) errori.push("sitemap.xml mancante");
const urls = sitemap ? [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]) : [];
const lastmods = sitemap ? [...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]) : [];
if (new Set(urls).size !== urls.length) errori.push("sitemap con indirizzi ripetuti");
for (const u of urls) if (/[?#]/.test(u) || !u.startsWith(`${SITO}/`) || !u.endsWith("/")) errori.push(`sitemap: indirizzo non canonico ${u}`);
for (const d of lastmods) if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) errori.push(`sitemap: data non valida ${d}`);
const disallow = robots ? [...robots.matchAll(/^Disallow:\s*(\S+)/gm)].map((m) => m[1]) : [];

// llms.txt e chiave IndexNow
const llms = leggi("llms.txt");
if (!llms || !llms.startsWith("# ")) errori.push("llms.txt mancante o senza titolo");
const chiavi = fs.existsSync(OUT) ? fs.readdirSync(OUT).filter((f) => /^[0-9a-f]{32}\.txt$/.test(f)) : [];
if (chiavi.length !== 1) errori.push("file della chiave IndexNow mancante");
else if (leggi(chiavi[0]).trim() !== chiavi[0].slice(0, 32)) errori.push("il file IndexNow non contiene solo la chiave");

// Ogni pagina della sitemap
const titoli = new Map();
let approvate = 0;
for (const u of urls) {
  const rel = u.slice(SITO.length).replace(/^\//, "");
  const html = leggi(path.join(rel, "index.html"));
  const prob = [];
  if (!html) { errori.push(`${u}: pagina non trovata nel sito generato`); continue; }
  const pathname = "/" + rel;
  if (disallow.some((d) => pathname.startsWith(d))) prob.push("bloccata nel robots.txt");
  const metas = metaTags(html);
  const robotsMeta = metas.find((t) => attr(t, "name") === "robots");
  if (robotsMeta && /noindex/.test(attr(robotsMeta, "content") || "")) prob.push("ha noindex");
  const canon = (html.match(/<link\b[^>]*rel="canonical"[^>]*>/g) || []).map((t) => attr(t, "href"));
  if (canon.length !== 1) prob.push(`canonical: ${canon.length} invece di 1`);
  else if (canon[0] !== u) prob.push(`canonical diverso dall'indirizzo (${canon[0]})`);
  const titolo = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!titolo) prob.push("senza <title>");
  else {
    if (titoli.has(titolo)) prob.push(`titolo uguale a ${titoli.get(titolo)}`);
    titoli.set(titolo, u);
    const n = [...decodifica(titolo)].length;
    if (n < 30 || n > 65) avvisi.push(`${u}: titolo di ${n} caratteri (ideale 30–65)`);
  }
  const desc = metas.find((t) => attr(t, "name") === "description");
  if (!desc) prob.push("senza meta description");
  else {
    const n = [...attr(desc, "content")].length;
    if (n < 110 || n > 165) avvisi.push(`${u}: descrizione di ${n} caratteri (ideale 110–165)`);
  }
  const h1 = (html.match(/<h1\b/g) || []).length;
  if (h1 !== 1) prob.push(`${h1} titoli <h1> invece di 1`);
  const ogUrl = metas.find((t) => attr(t, "property") === "og:url");
  if (ogUrl && attr(ogUrl, "content") !== u) prob.push(`og:url diverso dall'indirizzo (${attr(ogUrl, "content")})`);
  if (!/<html[^>]*lang="it"/.test(html)) prob.push("manca lang=\"it\"");
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { prob.push("dati strutturati (JSON-LD) non validi"); }
  }
  if (prob.length) errori.push(...prob.map((p) => `${u}: ${p}`));
  else approvate++;
}

console.log(`\nVerifica SEO: ${approvate} di ${urls.length} pagine approvate.`);
for (const e of errori) console.log(`  ERRORE  ${e}`);
for (const a of avvisi) console.log(`  AVVISO  ${a}`);
if (errori.length && process.env.VERIFICA_SEO_STRICT === "1") process.exit(1);
