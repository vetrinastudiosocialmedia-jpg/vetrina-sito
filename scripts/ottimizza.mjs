// Ottimizza il sito generato (cartella "out") per la velocità su smartphone.
// Gira da solo dopo "npm run build", prima delle verifiche SEO.
//
// 1. Mette il CSS dentro la pagina (niente file CSS da aspettare prima di mostrare il testo).
// 2. Nelle pagine che non hanno parti interattive toglie il JavaScript di Next.js:
//    il contenuto è già tutto nell'HTML, quindi la pagina si vede e funziona uguale,
//    ma il telefono non deve scaricare ed eseguire ~100 KB di codice.
//    La pagina /benvenuto/ (il modulo) tiene il suo JavaScript.
// 3. Al posto del codice tolto aggiunge 10 righe che misurano su Umami quando
//    qualcuno arriva alle sezioni Esempi e Pacchetti.
//
// Se qualcosa non torna (per esempio una pagina senza <h1> dopo la pulizia), la pagina
// resta com'era e nel log compare un avviso: la pubblicazione non si blocca.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve(process.argv[2] || "out");
const CON_JS = new Set(["benvenuto/index.html"]);

const TRACKING = `<script>(function(){if(!("IntersectionObserver" in window))return;var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var n=e.target.getAttribute("data-vs-view"),k=0;(function t(){if(window.umami&&window.umami.track){window.umami.track(n)}else if(k++<20){setTimeout(t,250)}})()})},{threshold:0.3});[["esempi","Vista Esempi"],["pacchetti","Vista Pacchetti"]].forEach(function(x){var el=document.getElementById(x[0]);if(el){el.setAttribute("data-vs-view",x[1]);io.observe(el)}})})();</script>`;

function tutteLeHtml(dir, base = "") {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.posix.join(base, e.name);
    if (e.isDirectory()) {
      if (e.name === "_next") continue;
      out = out.concat(tutteLeHtml(path.join(dir, e.name), rel));
    } else if (e.name.endsWith(".html")) out.push(rel);
  }
  return out;
}

const cssCache = new Map();
function leggiCss(href) {
  if (!cssCache.has(href)) {
    const f = path.join(OUT, href.split("?")[0]);
    cssCache.set(href, fs.existsSync(f) ? fs.readFileSync(f, "utf8") : null);
  }
  return cssCache.get(href);
}

function inlineCss(html) {
  return html.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/g, (tag) => {
    const href = (tag.match(/href="([^"]+)"/) || [])[1];
    if (!href || !href.startsWith("/_next/")) return tag;
    const css = leggiCss(href);
    if (css == null) return tag;
    return `<style>${css.replace(/<\/style/gi, "<\\/style")}</style>`;
  });
}

function togliJs(html) {
  // Script di Next.js con src, e script in linea che non sono dati strutturati (JSON-LD)
  html = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/g, (tutto, attrs, corpo) => {
    const src = (attrs.match(/\bsrc="([^"]+)"/) || [])[1];
    if (src) return src.startsWith("/_next/") ? "" : tutto;
    if (/type="application\/(ld\+)?json"/.test(attrs)) return tutto;
    return "";
  });
  // Preload e modulepreload di file JavaScript
  html = html.replace(/<link\b[^>]*(rel="modulepreload"|as="script")[^>]*>/g, "");
  return html;
}

const rapporto = [];
for (const rel of tutteLeHtml(OUT)) {
  const file = path.join(OUT, rel);
  const prima = fs.readFileSync(file, "utf8");
  let html = inlineCss(prima);
  if (!CON_JS.has(rel)) {
    html = togliJs(html);
    if (html.includes("cloud.umami.is/script.js") && /id="(esempi|pacchetti)"/.test(html)) {
      html = html.replace("</body>", `${TRACKING}</body>`);
    }
  }
  const h1Prima = (prima.match(/<h1\b/g) || []).length;
  const h1Dopo = (html.match(/<h1\b/g) || []).length;
  if (h1Dopo !== h1Prima || !html.includes("</body>")) {
    rapporto.push(`AVVISO ${rel}: lasciata com'era (controllo non superato)`);
    continue;
  }
  fs.writeFileSync(file, html);
  rapporto.push(`${rel}: ${Math.round(prima.length / 1024)} KB → ${Math.round(html.length / 1024)} KB${CON_JS.has(rel) ? " (JavaScript tenuto)" : ""}`);
}
console.log("Ottimizzazione:\n  " + rapporto.join("\n  "));
