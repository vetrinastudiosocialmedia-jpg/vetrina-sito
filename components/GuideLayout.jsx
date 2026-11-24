import Footer from "@/components/Footer";
import { waLink } from "@/lib/site";
import { ev } from "@/lib/track";

// Struttura delle pagine delle guide (indice e articoli): stessa testata delle pagine
// secondarie, contenuto libero, stesso piè di pagina del sito.
export default function GuideLayout({ children }) {
  return (
    <>
      <div className="legal guida">
        <header>
          <div className="in">
            <a href="/" aria-label="Vetrina Studio, torna al sito">
              <img decoding="async" src="/img/logo-vetrina.webp" width="400" height="107" alt="Vetrina Studio" />
            </a>
            <a className="back" href="/">← Torna al sito</a>
          </div>
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

// Briciole di pane: Home › Guide (› articolo)
export function Briciole({ voci }) {
  return (
    <nav className="briciole" aria-label="Percorso">
      <ol>
        {voci.map((v, i) => (
          <li key={v.url || v.nome}>
            {v.url && i < voci.length - 1 ? <a href={v.url}>{v.nome}</a> : <span aria-current="page">{v.nome}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Box finale con la chiamata al servizio.
// tema "recensioni" e "google": invito a scriverci su WhatsApp (risposte alle recensioni, scheda Google);
// per tutti gli altri articoli: i piani mensili.
const CHIAMATE = {
  recensioni: {
    titolo: "Non hai tempo di rispondere alle recensioni?",
    testo: "Ti aiutiamo noi: prepariamo le risposte alle tue recensioni e i post per chiederne di nuove, tu le copi e pubblichi. Senza darci accesso al tuo account.",
    link: "Scrivici su WhatsApp →",
    messaggio: "Ciao! Ho letto la vostra guida sulle recensioni e vorrei un aiuto.",
  },
  google: {
    titolo: "Vuoi una scheda Google sistemata?",
    testo: "Controlliamo e sistemiamo la tua scheda Google: categoria, orari, descrizione, foto e servizi, così chi ti cerca su Maps trova tutto quello che serve.",
    link: "Scrivici su WhatsApp →",
    messaggio: "Ciao! Ho letto la vostra guida su Google Maps e vorrei sistemare la mia scheda.",
  },
};

export function Chiamata({ tema } = {}) {
  const c = CHIAMATE[tema];
  if (c) {
    return (
      <div className="box chiamata">
        <p className="chiamata-titolo">{c.titolo}</p>
        <p>{c.testo}</p>
        <p>
          <a href={waLink(c.messaggio)} {...ev("WhatsApp", { origine: `guida-${tema}` })}>{c.link}</a>
        </p>
      </div>
    );
  }
  return (
    <div className="box chiamata">
      <p className="chiamata-titolo">Vuoi i contenuti pronti ogni mese?</p>
      <p>
        Vetrina Studio prepara post, Reel e calendario per bar, ristoranti e negozi in tutta Italia: tu approvi con un clic e pubblichi in un minuto. Da 49 € al mese, senza vincoli.
      </p>
      <p>
        <a href="/#pacchetti">Guarda i piani e i prezzi →</a>
      </p>
    </div>
  );
}
