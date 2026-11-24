import GuideLayout, { Briciole, Chiamata } from "@/components/GuideLayout";
import { ORG_ID } from "@/lib/schema";
import { SITO, TEMI, trovaGruppo, articoliDelGruppo, articoliDelTema, urlArticolo, urlGruppo, dataItaliana } from "@/lib/articoli.mjs";

const GRUPPO = trovaGruppo("guide");
const ARTICOLI = articoliDelGruppo("guide");
const INDIRIZZO = `${SITO}${urlGruppo("guide")}`;

export const metadata = {
  title: `${GRUPPO.titolo} | Vetrina Studio`,
  description: GRUPPO.descrizione,
  alternates: { canonical: INDIRIZZO },
  openGraph: {
    title: GRUPPO.titolo,
    description: GRUPPO.descrizione,
    url: INDIRIZZO,
    siteName: "Vetrina Studio",
    type: "website",
    locale: "it_IT",
    images: ["/img/site-desktop.jpg"],
  },
};

const datiStrutturati = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": ORG_ID, name: "Vetrina Studio", url: `${SITO}/` },
    {
      "@type": "CollectionPage",
      "@id": INDIRIZZO,
      url: INDIRIZZO,
      name: GRUPPO.titolo,
      description: GRUPPO.descrizione,
      inLanguage: "it-IT",
      publisher: { "@id": ORG_ID },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: ARTICOLI.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITO}${urlArticolo(a)}`,
          name: a.titolo,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITO}/` },
        { "@type": "ListItem", position: 2, name: GRUPPO.nome, item: INDIRIZZO },
      ],
    },
  ],
};

// Indice del gruppo "Guide": tutti gli articoli
export default function Page() {
  return (
    <GuideLayout>
      <Briciole voci={[{ nome: "Home", url: "/" }, { nome: GRUPPO.nome, url: urlGruppo("guide") }]} />
      <h1>{GRUPPO.titolo}</h1>
      <p className="intro">{GRUPPO.descrizione}</p>
      {/* Sommario dei temi */}
      <nav className="indice" aria-label="Temi delle guide">
        <p className="indice-titolo">Temi</p>
        <ol>
          {TEMI.map((t) => (
            <li key={t.id}><a href={`#${t.id}`}>{t.nome}</a></li>
          ))}
        </ol>
      </nav>
      {/* Gli articoli divisi per tema (l'ordine dentro ogni tema segue lib/articoli.mjs) */}
      {TEMI.map((t) => (
        <section key={t.id}>
          <h2 id={t.id}>{t.nome}</h2>
          <ul className="elenco-guide">
            {articoliDelTema("guide", t.id).map((a) => (
              <li key={a.slug}>
                <a href={urlArticolo(a)}>{a.titolo}</a>
                <p>{a.descrizione}</p>
                <p className="meta">Aggiornato il {dataItaliana(a.aggiornato)}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <Chiamata />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datiStrutturati).replace(/</g, "\\u003c") }} />
    </GuideLayout>
  );
}
