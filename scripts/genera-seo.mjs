// Gira da solo PRIMA della build ("prebuild"), secondo docs/seo-content-spec.md.
//
// 1. Verifiche prima di pubblicare (sezione 12): se un articolo non rispetta la spec,
//    la build si ferma con un messaggio chiaro e il sito online resta com'era.
// 2. Aggiorna public/sitemap.xml con indice e articoli delle guide
//    (le altre pagine della sitemap restano come sono).
// 3. Aggiorna in public/llms.txt la parte tra i segni "inizio guide" e "fine guide".
// 4. Rigenera public/llms-full.txt: introduzione + tutti gli articoli in Markdown.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SITO,
  GRUPPI,
  ARTICOLI,
  articoliDelGruppo,
  urlArticolo,
  urlGruppo,
  contaParole,
  senzaLink,
} from "../lib/articoli.mjs";

const RADICE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(RADICE, "public");
const errori = [];

// ---------- 1. verifiche ----------
const dataOk = (d) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !Number.isNaN(Date.parse(d));
const slugOk = (s) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s);
const visti = new Set();
const parole = (t) => senzaLink(t).split(/\s+/).filter(Boolean).length;

for (const g of GRUPPI) {
  if (!slugOk(g.slug)) errori.push(`gruppo "${g.slug}": slug non valido`);
  if (articoliDelGruppo(g.slug).length === 0) errori.push(`gruppo "${g.slug}": nessun articolo`);
}
for (const a of ARTICOLI) {
  const n = `${a.gruppo}/${a.slug}`;
  if (!GRUPPI.some((g) => g.slug === a.gruppo)) errori.push(`${n}: gruppo inesistente`);
  if (!slugOk(a.slug)) errori.push(`${n}: slug con caratteri non ammessi`);
  if (visti.has(n)) errori.push(`${n}: indirizzo ripetuto`);
  visti.add(n);
  const scheda = `${a.titoloScheda} | Vetrina Studio`;
  if ([...scheda].length < 30 || [...scheda].length > 65) errori.push(`${n}: titolo della scheda di ${[...scheda].length} caratteri (30–65)`);
  if ([...a.descrizione].length < 110 || [...a.descrizione].length > 165) errori.push(`${n}: descrizione di ${[...a.descrizione].length} caratteri (110–165)`);
  const pr = parole(a.rispostaRapida);
  if (pr < 30 || pr > 80) errori.push(`${n}: risposta rapida di ${pr} parole (30–80)`);
  if (!a.faq?.length) errori.push(`${n}: serve almeno 1 domanda frequente`);
  if (contaParole(a) < 200) errori.push(`${n}: meno di 200 parole`);
  if (!dataOk(a.pubblicato) || !dataOk(a.aggiornato)) errori.push(`${n}: date non nel formato AAAA-MM-GG`);
  else if (a.aggiornato < a.pubblicato) errori.push(`${n}: aggiornato prima della pubblicazione`);
  const correlati = new Set(a.correlati || []);
  if (correlati.size < 3) errori.push(`${n}: servono almeno 3 articoli correlati`);
  for (const c of correlati) {
    if (c === a.slug) errori.push(`${n}: è correlato a sé stesso`);
    else if (!ARTICOLI.some((x) => x.gruppo === a.gruppo && x.slug === c)) errori.push(`${n}: correlato "${c}" inesistente`);
  }
  const ancore = [...(a.passi?.length ? ["passo-a-passo"] : []), ...a.sezioni.map((s) => s.id), "domande-frequenti", "leggi-anche"];
  if (new Set(ancore).size !== ancore.length) errori.push(`${n}: due sezioni con la stessa ancora`);
  for (const id of ancore) if (!slugOk(id)) errori.push(`${n}: ancora "${id}" non valida`);
  const links = [];
  const raccogli = (t) => { for (const m of String(t).matchAll(/\]\(([^)]+)\)/g)) links.push(m[1]); };
  raccogli(a.rispostaRapida);
  for (const s of a.sezioni) {
    (s.paragrafi || []).forEach(raccogli);
    (s.lista || []).forEach(raccogli);
    for (const f of s.fonti || []) if (!f.url.startsWith("https://")) errori.push(`${n}: fonte non https (${f.url})`);
    if (s.prossimo) links.push(s.prossimo.url);
  }
  for (const f of a.faq) raccogli(f.a);
  for (const l of links) {
    if (l.startsWith("http://")) errori.push(`${n}: link non https (${l})`);
    const m = l.match(/^\/([a-z0-9-]+)\/([a-z0-9-]+)\/$/);
    if (m && GRUPPI.some((g) => g.slug === m[1]) && !ARTICOLI.some((x) => x.gruppo === m[1] && x.slug === m[2])) {
      errori.push(`${n}: link interno a un articolo che non esiste (${l})`);
    }
  }
}

if (errori.length) {
  console.error("\nVerifiche degli articoli NON superate (la pubblicazione si ferma, il sito resta com'era):");
  for (const e of errori) console.error(`  ERRORE  ${e}`);
  process.exit(1);
}
console.log(`Verifiche degli articoli: ${ARTICOLI.length} articoli in regola.`);

// ---------- 2. sitemap ----------
const fileSitemap = path.join(PUBLIC, "sitemap.xml");
let sitemap = fs.readFileSync(fileSitemap, "utf8");
const prefissi = GRUPPI.map((g) => `${SITO}${urlGruppo(g.slug)}`);
sitemap = sitemap.replace(/\s*<url>[\s\S]*?<\/url>/g, (blocco) => {
  const loc = (blocco.match(/<loc>([^<]+)<\/loc>/) || [])[1] || "";
  return prefissi.some((p) => loc.startsWith(p)) ? "" : blocco;
});
const nuovi = [];
for (const g of GRUPPI) {
  const art = articoliDelGruppo(g.slug);
  const ultimo = art.map((a) => a.aggiornato).sort().at(-1);
  nuovi.push(`  <url>\n    <loc>${SITO}${urlGruppo(g.slug)}</loc>\n    <lastmod>${ultimo}</lastmod>\n  </url>`);
  for (const a of art) nuovi.push(`  <url>\n    <loc>${SITO}${urlArticolo(a)}</loc>\n    <lastmod>${a.aggiornato}</lastmod>\n  </url>`);
}
sitemap = sitemap.replace(/\s*<\/urlset>\s*$/, `\n${nuovi.join("\n")}\n</urlset>\n`);
fs.writeFileSync(fileSitemap, sitemap);

// ---------- 3. llms.txt ----------
const INIZIO = "<!-- inizio guide: generato da scripts/genera-seo.mjs, non modificare a mano -->";
const FINE = "<!-- fine guide -->";
const fileLlms = path.join(PUBLIC, "llms.txt");
let llms = fs.readFileSync(fileLlms, "utf8");
const blocco = [INIZIO];
for (const g of GRUPPI) {
  blocco.push(`## ${g.nome}`, "", `- [${g.titolo}](${SITO}${urlGruppo(g.slug)}): indice delle guide.`);
  for (const a of articoliDelGruppo(g.slug)) blocco.push(`- [${a.titolo}](${SITO}${urlArticolo(a)}): ${a.descrizione}`);
  blocco.push("");
}
blocco.push("## Optional", "", `- [Tutti gli articoli in testo](${SITO}/llms-full.txt)`, "", FINE);
const testoBlocco = blocco.join("\n");
if (llms.includes(INIZIO) && llms.includes(FINE)) {
  llms = llms.slice(0, llms.indexOf(INIZIO)) + testoBlocco + llms.slice(llms.indexOf(FINE) + FINE.length);
} else {
  const dove = llms.indexOf("\n## Chi siamo");
  llms = dove >= 0 ? `${llms.slice(0, dove + 1)}${testoBlocco}\n\n${llms.slice(dove + 1)}` : `${llms.trimEnd()}\n\n${testoBlocco}\n`;
}
fs.writeFileSync(fileLlms, llms);

// ---------- 4. llms-full.txt ----------
const intro = llms.slice(0, llms.search(/\n## /)).trim();
const md = [intro, ""];
for (const a of ARTICOLI) {
  md.push(`## ${a.titolo}`, "", `Indirizzo: ${SITO}${urlArticolo(a)}`, `Pubblicato: ${a.pubblicato} · Aggiornato: ${a.aggiornato}`, "");
  md.push(`**Risposta rapida.** ${senzaLink(a.rispostaRapida)}`, "");
  if (a.passi?.length) {
    md.push("### Passo a passo", "");
    a.passi.forEach((p, i) => md.push(`${i + 1}. **${p.nome}.** ${senzaLink(p.testo)}`));
    md.push("");
  }
  for (const s of a.sezioni) {
    md.push(`### ${s.titolo}`, "");
    for (const p of s.paragrafi || []) md.push(senzaLink(p), "");
    if (s.lista) { for (const v of s.lista) md.push(`- ${senzaLink(v)}`); md.push(""); }
    if (s.tabella) {
      const t = s.tabella;
      md.push(`| ${t.colonne.join(" | ")} |`, `| ${t.colonne.map(() => "---").join(" | ")} |`);
      for (const r of t.righe) md.push(`| ${r.join(" | ")} |`);
      md.push("", `_${t.didascalia}_`, "");
    }
    for (const f of s.fonti || []) md.push(`Fonte: [${f.titolo}](${f.url})`, "");
  }
  md.push("### Domande frequenti", "");
  for (const f of a.faq) md.push(`**${f.q}** ${senzaLink(f.a)}`, "");
}
fs.writeFileSync(path.join(PUBLIC, "llms-full.txt"), md.join("\n").replace(/\n{3,}/g, "\n\n"));
console.log("Sitemap, llms.txt e llms-full.txt aggiornati con le guide.");
