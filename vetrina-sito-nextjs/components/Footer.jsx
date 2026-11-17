// Piè di pagina con i link legali
export default function Footer() {
  return (
    <footer style={{ padding: "44px 32px", background: "#151B10", borderTop: "1px solid rgba(243,236,221,0.08)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px 40px", fontSize: "14px", color: "#BDB6A2" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/img/logo-icona.png" alt="" style={{ display: "block", height: "28px", width: "auto" }} />
          <span style={{ color: "#E6DECB" }}>Vetrina Studio – Agenzia Social Media</span>
        </div>
        <nav aria-label="Note legali" style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <a href="/privacy/" style={{ color: "#BDB6A2" }}>Privacy policy</a>
          <a href="/cookie/" style={{ color: "#BDB6A2" }}>Cookie policy</a>
          <a href="/termini/" style={{ color: "#BDB6A2" }}>Termini di servizio</a>
          <span>© 2026</span>
        </nav>
      </div>
    </footer>
  );
}
