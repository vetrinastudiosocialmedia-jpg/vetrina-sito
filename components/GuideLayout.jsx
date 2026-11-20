import Footer from "@/components/Footer";

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

// Box finale con la chiamata al servizio
export function Chiamata() {
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
