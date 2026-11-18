import { SITE, CITTA, waLink } from "@/lib/site";

const link = { color: "#BDB6A2" };
const titolo = { margin: "0 0 14px", fontFamily: "inherit", lineHeight: "1.4", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4AE6A" };
const lista = { margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" };

// Piè di pagina: chi siamo, servizi, zone, contatti e link legali
export default function Footer() {
  return (
    <footer style={{ padding: "64px 32px 40px", background: "#151B10", borderTop: "1px solid rgba(243,236,221,0.08)", fontSize: "14px", lineHeight: "1.6", color: "#BDB6A2" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "40px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/img/logo-icona.png" alt="" style={{ display: "block", height: "28px", width: "auto" }} />
            <span style={{ color: "#E6DECB", fontWeight: "600" }}>Vetrina Studio</span>
          </div>
          <p style={{ margin: "14px 0 0" }}>Agenzia social media e siti web per attività locali, tra Modena e Bologna. Tutto online.</p>
          <p style={{ margin: "10px 0 0" }}><a href="/chi-siamo/" style={link}>Chi siamo e come lavoriamo</a></p>
        </div>
        <nav aria-label="Servizi">
          <h2 style={titolo}>Servizi</h2>
          <ul style={lista}>
            <li><a href="/#pacchetti" style={link}>Piani social da €49/mese</a></li>
            <li><a href="/#pacchetti" style={link}>Reels e Stories</a></li>
            <li><a href="/#siti-web" style={link}>Sito Vetrina da €290</a></li>
            <li><a href="/#faq" style={link}>Domande frequenti</a></li>
          </ul>
        </nav>
        <div>
          <h2 style={titolo}>Dove lavoriamo</h2>
          <p style={{ margin: "0" }}>{CITTA.join(" · ")} e tutta Italia online.</p>
        </div>
        <div>
          <h2 style={titolo}>Contatti</h2>
          <ul style={lista}>
            <li><a href={waLink("Ciao! Vorrei informazioni sui vostri servizi.")} style={link}>WhatsApp {SITE.telefono}</a></li>
            <li><a href={`mailto:${SITE.email}`} style={link}>{SITE.email}</a></li>
            <li><a href={SITE.instagram} style={link}>Instagram @vetrina.studio.socialmedia</a></li>
          </ul>
        </div>
      </div>
      <div style={{ maxWidth: "1240px", margin: "48px auto 0", paddingTop: "24px", borderTop: "1px solid rgba(243,236,221,0.08)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 40px" }}>
        <span>
          © 2026 Vetrina Studio di {SITE.titolare}
          {SITE.piva ? ` · P.IVA ${SITE.piva}` : ""}
          {" · "}Immagini del portfolio: progetti dimostrativi generati con IA
        </span>
        <nav aria-label="Note legali" style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <a href="/chi-siamo/" style={link}>Chi siamo e contenuti</a>
          <a href="/privacy/" style={link}>Privacy policy</a>
          <a href="/cookie/" style={link}>Cookie policy</a>
          <a href="/termini/" style={link}>Termini di servizio</a>
        </nav>
      </div>
    </footer>
  );
}
