import LegalLayout from "@/components/LegalLayout";
import { SITE, CITTA, waLink } from "@/lib/site";
import { ORG_ID } from "@/lib/schema";

export const metadata = {
  title: "Chi siamo e come lavoriamo | Vetrina Studio",
  description:
    "Chi c'è dietro Vetrina Studio, come nascono i contenuti per i social e il sito, come usiamo l'IA e come chiedere una correzione.",
  alternates: { canonical: "https://vetrinastudiosocial.it/chi-siamo/" },
};

const AGGIORNATO = "2026-11-18";

const datiStrutturati = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: `${SITE.url}/` },
    {
      "@type": "AboutPage",
      "@id": `${SITE.url}/chi-siamo/`,
      url: `${SITE.url}/chi-siamo/`,
      name: "Chi siamo e come lavoriamo",
      inLanguage: "it-IT",
      dateModified: AGGIORNATO,
      about: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Chi siamo", item: `${SITE.url}/chi-siamo/` },
      ],
    },
  ],
};

// Pagina "Chi siamo e contenuti": chi è il responsabile, come nascono i contenuti, correzioni
export default function Page() {
  return (
    <LegalLayout title="Chi siamo e come lavoriamo" updated="18 novembre 2026">
      <div className="box">
        <p>
          Vetrina Studio è un'agenzia social media e siti web per attività locali, tra Modena e Bologna. Prepariamo ogni mese post, caroselli, Reels e Stories pronti da pubblicare, e realizziamo siti a pagina unica per bar, ristoranti, gelaterie, centri estetici e negozi. Lavoriamo tutto online, per iscritto, senza riunioni.
        </p>
      </div>

      <h2 id="chi-siamo">Chi siamo</h2>
      <p>
        Vetrina Studio è il nome commerciale con cui lavora {SITE.titolare}, titolare dell'attività, dal 2026. Siamo una realtà piccola e lo diciamo con orgoglio: ogni cliente ha un referente unico, raggiungibile su WhatsApp o via email.
      </p>
      <p>
        Lavoriamo soprattutto con attività delle province di Modena e Bologna ({CITTA.slice(0, 8).join(", ")} e dintorni) e seguiamo volentieri anche attività nel resto d'Italia.
      </p>

      <h2 id="contenuti">Come nascono i contenuti</h2>
      <ul>
        <li>Partiamo dalle foto reali della tua attività: i tuoi piatti e i tuoi prodotti sono sempre i tuoi. Grafiche e immagini di repertorio servono solo a completare, mai al posto di ciò che vendi.</li>
        <li>Usiamo l'intelligenza artificiale per scrivere e impaginare più velocemente. Ogni testo e ogni immagine sono controllati da una persona prima della consegna, e le immagini generate con IA vengono sempre segnalate.</li>
        <li>I progetti del portfolio sono dimostrativi, con brand di fantasia e immagini generate con IA: lo indichiamo accanto a ogni progetto.</li>
        <li>Prezzi, servizi e condizioni pubblicati su questo sito sono quelli reali e aggiornati; quando cambiano, aggiorniamo anche la data in cima alla pagina.</li>
        <li>Non promettiamo numeri di follower, posizioni su Google o risultati garantiti: prepariamo contenuti curati e costanti, il resto dipende anche dall'attività e dal mercato.</li>
      </ul>

      <h2 id="correzioni">Correzioni</h2>
      <p>
        Hai trovato un'informazione sbagliata o non aggiornata su questo sito? Scrivici a{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> o su{" "}
        <a href={waLink("Ciao! Ho trovato un errore sul vostro sito:")}>WhatsApp</a>. Controlliamo ogni segnalazione e, se è corretta, aggiorniamo la pagina entro 7 giorni, con la nuova data di aggiornamento.
      </p>

      <h2 id="contatti">Contatti</h2>
      <ul>
        <li>WhatsApp: <a href={waLink("Ciao! Vorrei informazioni sui vostri servizi.")}>{SITE.telefono}</a></li>
        <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
        <li>Instagram: <a href={SITE.instagram}>@vetrina.studio.socialmedia</a></li>
      </ul>
      <p>
        Leggi anche i <a href="/termini/">termini di servizio</a> e la <a href="/privacy/">privacy policy</a>.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datiStrutturati).replace(/</g, "\\u003c") }} />
    </LegalLayout>
  );
}
