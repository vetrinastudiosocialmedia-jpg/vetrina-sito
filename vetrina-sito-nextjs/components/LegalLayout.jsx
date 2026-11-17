// Struttura comune delle pagine legali (privacy, cookie, termini)
export default function LegalLayout({ title, updated, children }) {
  return (
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
      <footer>
        <div className="in">
          <span>Vetrina Studio – Agenzia Social Media</span>
          <nav>
            <a href="/privacy/">Privacy policy</a>
            <a href="/cookie/">Cookie policy</a>
            <a href="/termini/">Termini di servizio</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
