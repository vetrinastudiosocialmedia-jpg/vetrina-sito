import GuideLayout, { Briciole, Chiamata } from "@/components/GuideLayout";
import Testo from "@/components/Testo";
import { ORG_ID } from "@/lib/schema";
import {
  SITO,
  articoliDelGruppo,
  trovaArticolo,
  trovaGruppo,
  urlArticolo,
  urlGruppo,
  contaParole,
  minutiLettura,
  dataItaliana,
} from "@/lib/articoli.mjs";

const GRUPPO = "guide";

// Una pagina per ogni articolo del gruppo, generata al momento della build
export function generateStaticParams() {
  return articoliDelGruppo(GRUPPO).map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = trovaArticolo(GRUPPO, slug);
  const url = `${SITO}${urlArticolo(a)}`;
  return {
    title: `${a.titoloScheda} | Vetrina Studio`,
    description: a.descrizione,
    alternates: { canonical: url },
    openGraph: {
      title: a.titolo,
      description: a.descrizione,
      url,
      siteName: "Vetrina Studio",
      type: "article",
      locale: "it_IT",
      publishedTime: a.pubblicato,
      modifiedTime: a.aggiornato,
      images: ["/img/site-desktop.jpg"],
    },
  };
}

function datiStrutturati(a, gruppo) {
  const url = `${SITO}${urlArticolo(a)}`;
  const grafo = [
    { "@type": "Organization", "@id": ORG_ID, name: "Vetrina Studio", url: `${SITO}/`, logo: `${SITO}/img/logo-completo.png` },
    {
      "@type": "Article",
      headline: a.titolo,
      description: a.descrizione,
      url,
      mainEntityOfPage: url,
      inLanguage: "it-IT",
      datePublished: a.pubblicato,
      dateModified: a.aggiornato,
      wordCount: contaParole(a),
      image: [`${SITO}/img/site-desktop.jpg`],
      author: { "@type": "Organization", "@id": ORG_ID, name: "Vetrina Studio", url: `${SITO}/chi-siamo/#contenuti` },
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITO}/` },
        { "@type": "ListItem", position: 2, name: gruppo.nome, item: `${SITO}${urlGruppo(gruppo.slug)}` },
        { "@type": "ListItem", position: 3, name: a.titolo, item: url },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  if (a.passi?.length) {
    grafo.push({
      "@type": "HowTo",
      name: a.titolo,
      inLanguage: "it-IT",
      step: a.passi.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p.nome, text: p.testo })),
    });
  }
  return { "@context": "https://schema.org", "@graph": grafo };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const a = trovaArticolo(GRUPPO, slug);
  const gruppo = trovaGruppo(GRUPPO);
  const correlati = a.correlati.map((s) => trovaArticolo(GRUPPO, s));
  const indice = [
    ...(a.passi?.length ? [{ id: "passo-a-passo", titolo: "Passo a passo" }] : []),
    ...a.sezioni.map((s) => ({ id: s.id, titolo: s.titolo })),
    { id: "domande-frequenti", titolo: "Domande frequenti" },
  ];

  return (
    <GuideLayout>
      <article>
        <Briciole voci={[{ nome: "Home", url: "/" }, { nome: gruppo.nome, url: urlGruppo(gruppo.slug) }, { nome: a.titolo }]} />
        <h1>{a.titolo}</h1>
        <p className="firma">
          Di <a rel="author" href="/chi-siamo/#contenuti">Vetrina Studio</a> · Aggiornato il{" "}
          <time dateTime={a.aggiornato}>{dataItaliana(a.aggiornato)}</time> · {minutiLettura(a)} min di lettura
        </p>

        <div className="box risposta">
          <p className="risposta-titolo">Risposta rapida</p>
          <p>
            <Testo>{a.rispostaRapida}</Testo>
          </p>
        </div>

        {indice.length >= 3 && (
          <nav className="indice" aria-label="In questa pagina">
            <p className="indice-titolo">In questa pagina</p>
            <ol>
              {indice.map((v) => (
                <li key={v.id}>
                  <a href={`#${v.id}`}>{v.titolo}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {a.passi?.length > 0 && (
          <section>
            <h2 id="passo-a-passo">Passo a passo</h2>
            <ol className="passi">
              {a.passi.map((p) => (
                <li key={p.nome}>
                  <strong>{p.nome}.</strong> <Testo>{p.testo}</Testo>
                </li>
              ))}
            </ol>
          </section>
        )}

        {a.sezioni.map((s) => (
          <section key={s.id}>
            <h2 id={s.id}>{s.titolo}</h2>
            {(s.paragrafi || []).map((p, i) => (
              <p key={i}>
                <Testo>{p}</Testo>
              </p>
            ))}
            {s.lista && (
              <ul>
                {s.lista.map((v, i) => (
                  <li key={i}>
                    <Testo>{v}</Testo>
                  </li>
                ))}
              </ul>
            )}
            {s.tabella && (
              <div className="tabella">
                <table>
                  <caption>{s.tabella.didascalia}</caption>
                  <thead>
                    <tr>
                      {s.tabella.colonne.map((c) => (
                        <th key={c} scope="col">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.tabella.righe.map((r, i) => (
                      <tr key={i}>
                        {r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {s.fonti?.length > 0 && (
              <p className="fonti">
                {s.fonti.length > 1 ? "Fonti: " : "Fonte: "}
                {s.fonti.map((f, i) => (
                  <span key={f.url}>
                    {i > 0 && "; "}
                    <a href={f.url} rel="noopener">
                      {f.titolo}
                    </a>
                  </span>
                ))}
              </p>
            )}
            {s.prossimo && (
              <p className="prossimo">
                → <a href={s.prossimo.url}>{s.prossimo.testo}</a>
              </p>
            )}
          </section>
        ))}

        <section>
          <h2 id="domande-frequenti">Domande frequenti</h2>
          {a.faq.map((f) => (
            <div key={f.q} className="domanda">
              <h3>{f.q}</h3>
              <p>
                <Testo>{f.a}</Testo>
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2 id="leggi-anche">Leggi anche</h2>
          <ul className="elenco-guide">
            {correlati.map((c) => (
              <li key={c.slug}>
                <a href={urlArticolo(c)}>{c.titoloScheda}</a>
                <p>{c.descrizione}</p>
              </li>
            ))}
          </ul>
        </section>

        <Chiamata />
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datiStrutturati(a, gruppo)).replace(/</g, "\\u003c") }} />
    </GuideLayout>
  );
}
