import Footer from "@/components/Footer";

// Struttura comune delle pagine secondarie (chi siamo, privacy, cookie, termini)
export default function LegalLayout({ title, updated, children }) {
  return (
    <>
      <div className="legal">
        <header>
          <div className="in">
            <a href="/" aria-label="Vetrina Studio, torna al sito">
              <img src="/img/logo-vetrina.png" alt="Vetrina Studio" />
            </a>
            <a className="back" href="/">← Torna al sito</a>
          </div>
        </header>
        <main>
          <h1>{title}</h1>
          <div className="upd">Ultimo aggiornamento: {updated}</div>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
