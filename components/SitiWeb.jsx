import { waLink } from "@/lib/site";
import { ev } from "@/lib/track";

// Offerta Sito Vetrina, manutenzione e combo
export default function SitiWeb() {
  return (
    <section id="siti-web" style={{ position: "relative", padding: "120px 32px", background: "#4A3021", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", right: "-200px", top: "-200px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(224,121,58,0.22), rgba(224,121,58,0) 65%)", pointerEvents: "none" }} />
      <div className="vs-rowgap" style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "64px 72px" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0B98A" }}>Sito Vetrina</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em", textWrap: "balance", color: "#F3ECDD" }}>
            Un sito che lavora per te,{" "}
            <em style={{ fontStyle: "italic", color: "#F0B98A" }}>anche quando sei chiuso</em>
            .
          </h2>
          <p style={{ margin: "20px 0 0", maxWidth: "480px", fontSize: "17px", lineHeight: "1.65", color: "#E6D6C4" }}>Il sito della tua attività, chiaro e veloce, pensato per farti contattare.</p>
          <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 12px" }}>
            <span style={{ fontSize: "15px", color: "#E6D6C4" }}>a partire da</span>
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "52px", lineHeight: "1", color: "#F3ECDD" }}>€290</span>
            <span style={{ fontSize: "15px", color: "#E6D6C4" }}>una tantum</span>
            <s style={{ fontSize: "16px", color: "#C4A994" }}>€490</s>
          </div>
          <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#E6D6C4" }}>Il prezzo è per la pagina unica. Per un sito con più pagine o funzioni in più ti facciamo un preventivo su misura.</p>
          <ul style={{ listStyle: "none", margin: "26px 0 0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(210px, 100%), 1fr))", gap: "12px 20px", fontSize: "15.5px", lineHeight: "1.45", color: "#F3ECDD" }}>
            <li style={{ display: "flex", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Pagina unica, ottima da smartphone
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Menu o servizi, orari, mappa e foto
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Pulsante WhatsApp
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Privacy e cookie in regola
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              1 giro di modifiche incluso
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Pronto in 7 giorni
            </li>
          </ul>
          <div style={{ marginTop: "26px", padding: "16px 18px", borderRadius: "16px", border: "1px solid rgba(240,185,138,0.35)", fontSize: "14.5px", lineHeight: "1.55", color: "#E6D6C4" }}>
            <strong style={{ color: "#F3ECDD" }}>Manutenzione e hosting: €9/mese</strong>
            {" "}
            <s style={{ color: "#C4A994" }}>€15</s>
            {" "}· 2 aggiornamenti al mese. Il dominio è intestato a te, con costo a parte.
          </div>
          <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px 28px" }}>
            <a className="vs-btn" href={waLink("Ciao! Vorrei il Sito Vetrina.")} {...ev("WhatsApp", { origine: "sito-vetrina" })} style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "0 28px", borderRadius: "999px", background: "#F3ECDD", color: "#1C2316", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
              Richiedi il tuo sito
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
        <figure style={{ flex: "1 1 520px", minWidth: "0", margin: "0", position: "relative", paddingBottom: "40px" }}>
          <div style={{ borderRadius: "18px", background: "#12160E", padding: "10px", boxShadow: "0 60px 90px -40px rgba(0,0,0,0.85), 0 0 0 1px rgba(243,236,221,0.1)" }}>
            <div style={{ display: "flex", gap: "6px", padding: "4px 6px 10px" }} aria-hidden="true">
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0793A" }} />
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#D4AE6A" }} />
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#4F6639" }} />
            </div>
            <img src="/img/site-desktop.jpg" alt="La home page del sito di Vetrina Studio su computer" style={{ display: "block", width: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "top", borderRadius: "8px" }} />
          </div>
          <div style={{ position: "absolute", right: "-8px", bottom: "0", width: "26%", minWidth: "110px", borderRadius: "26px", background: "#12160E", padding: "7px", boxShadow: "0 40px 60px -24px rgba(0,0,0,0.85)" }}>
            <img src="/img/site-mobile.jpg" alt="Lo stesso sito su smartphone" style={{ display: "block", width: "100%", aspectRatio: "9 / 19", objectFit: "cover", objectPosition: "top", borderRadius: "20px" }} />
          </div>
          <figcaption style={{ marginTop: "22px", fontSize: "14.5px", color: "#E6D6C4" }}>Questo sito? L'abbiamo creato noi.</figcaption>
        </figure>
        <div style={{ flex: "1 1 100%", padding: "22px 26px", borderRadius: "22px", background: "#E0793A", color: "#1C2316", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "14px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1C2316" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="8" width="18" height="13" rx="2" />
              <path d="M3 12h18M12 8v13M12 8c-1.5-3-5-4-5-1.5S10 8 12 8zM12 8c1.5-3 5-4 5-1.5S14 8 12 8z" />
            </svg>
            <div style={{ fontSize: "17px", lineHeight: "1.4" }}>
              <strong style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "22px", fontWeight: "500" }}>Sito Vetrina gratis</strong>
              <br />
              con 6 mesi di piano Pro.
            </div>
          </div>
          <a className="vs-btn" href={waLink("Ciao! Mi interessa la combo Sito Vetrina + piano Pro.")} {...ev("WhatsApp", { origine: "combo-sito-pro" })} style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 24px", borderRadius: "999px", background: "#1C2316", color: "#F3ECDD", textDecoration: "none", fontSize: "15px", fontWeight: "700" }}>Voglio la combo</a>
        </div>
      </div>
    </section>
  );
}
