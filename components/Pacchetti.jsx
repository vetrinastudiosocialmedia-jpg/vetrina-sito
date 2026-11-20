import { waLink } from "@/lib/site";
import PlanButton from "@/components/PlanButton";
import { ev } from "@/lib/track";

// Piani Essenziale, Crescita e Pro con i prezzi
export default function Pacchetti() {
  return (
    <section id="pacchetti" style={{ position: "relative", padding: "120px 32px 130px", background: "#1C2316" }}>
      <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
        <path d="M-40 160 C 360 40, 760 260, 1080 120 S 1400 60, 1500 100" stroke="#D4AE6A" strokeOpacity="0.18" strokeWidth="1" fill="none" />
      </svg>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 16px", borderRadius: "999px", background: "rgba(224,121,58,0.14)", border: "1px solid rgba(224,121,58,0.5)", fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#F0B98A" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E0793A" }} />
            Prezzo di lancio · primi 5 clienti
          </div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em", textWrap: "balance" }}>Scegli il piano per la tua attività.</h2>
          <p style={{ margin: "18px auto 0", maxWidth: "600px", fontSize: "17px", lineHeight: "1.6", color: "#CFC8B4" }}>Il prezzo di lancio resta bloccato finché resti abbonato. Tutti i piani sono senza vincoli: disdici quando vuoi.</p>
        </div>
        <div className="vs-mt64" style={{ marginTop: "64px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", gap: "24px", alignItems: "stretch" }}>
          <article style={{ position: "relative", padding: "38px 34px", borderRadius: "28px", background: "#26301E", border: "1px solid rgba(243,236,221,0.12)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <h3 style={{ margin: "0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "28px", color: "#F3ECDD" }}>Essenziale</h3>
              <span style={{ padding: "5px 11px", borderRadius: "999px", border: "1px solid rgba(243,236,221,0.22)", fontSize: "12px", fontWeight: "600", color: "#D9D2BE", whiteSpace: "nowrap" }}>Senza vincoli</span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#CFC8B4" }}>Per essere presenti con costanza, senza pensieri.</p>
            <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
              <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "52px", lineHeight: "1", color: "#F3ECDD" }}>€49</span>
              <span style={{ fontSize: "15px", color: "#CFC8B4" }}>/ mese</span>
            </div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "#A39C88" }}>
              Prezzo normale{" "}
              <s>€99/mese</s>
            </div>
            <ul style={{ listStyle: "none", margin: "26px 0 36px", padding: "24px 0 0", borderTop: "1px solid rgba(243,236,221,0.12)", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15.5px", lineHeight: "1.45", color: "#E6DECB" }}>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                6 post al mese con grafica, testo e hashtag
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Calendario con giorno e ora di pubblicazione
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Foto migliorate
              </li>
            </ul>
            <PlanButton plan="essenziale" className="vs-btn" style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", minHeight: "52px", borderRadius: "999px", border: "1px solid rgba(243,236,221,0.35)", color: "#F3ECDD", fontWeight: "700", textDecoration: "none", fontSize: "15.5px" }}>Scegli Essenziale</PlanButton>
          </article>
          <article style={{ position: "relative", padding: "38px 34px", borderRadius: "28px", background: "#26301E", border: "1px solid rgba(243,236,221,0.12)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <h3 style={{ margin: "0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "28px", color: "#F3ECDD" }}>Crescita</h3>
              <span style={{ padding: "5px 11px", borderRadius: "999px", border: "1px solid rgba(243,236,221,0.22)", fontSize: "12px", fontWeight: "600", color: "#D9D2BE", whiteSpace: "nowrap" }}>Senza vincoli</span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#CFC8B4" }}>Post e video per farti scoprire da nuovi clienti.</p>
            <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
              <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "52px", lineHeight: "1", color: "#F3ECDD" }}>€89</span>
              <span style={{ fontSize: "15px", color: "#CFC8B4" }}>/ mese</span>
            </div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "#A39C88" }}>
              Prezzo normale{" "}
              <s>€179/mese</s>
            </div>
            <ul style={{ listStyle: "none", margin: "26px 0 36px", padding: "24px 0 0", borderTop: "1px solid rgba(243,236,221,0.12)", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15.5px", lineHeight: "1.45", color: "#E6DECB" }}>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                8 post al mese con grafica, testo e hashtag
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                1 Reel montato
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Calendario con giorno e ora di pubblicazione
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Foto migliorate
              </li>
            </ul>
            <PlanButton plan="crescita" className="vs-btn" style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", minHeight: "52px", borderRadius: "999px", border: "1px solid rgba(243,236,221,0.35)", color: "#F3ECDD", fontWeight: "700", textDecoration: "none", fontSize: "15.5px" }}>Scegli Crescita</PlanButton>
          </article>
          <article style={{ position: "relative", padding: "38px 34px", borderRadius: "28px", background: "linear-gradient(165deg, #3A4A2B 0%, #2B3522 70%)", border: "1.5px solid #D4AE6A", display: "flex", flexDirection: "column", boxShadow: "0 50px 80px -40px rgba(212,174,106,0.35)" }}>
            <div style={{ position: "absolute", top: "-15px", left: "34px", padding: "6px 14px", borderRadius: "999px", background: "#E0793A", color: "#1C2316", fontSize: "12px", fontWeight: "800", letterSpacing: "0.12em", textTransform: "uppercase" }}>Il più conveniente</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <h3 style={{ margin: "0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "28px", color: "#F3ECDD" }}>Pro</h3>
              <span style={{ padding: "5px 11px", borderRadius: "999px", border: "1px solid rgba(243,236,221,0.22)", fontSize: "12px", fontWeight: "600", color: "#D9D2BE", whiteSpace: "nowrap" }}>Senza vincoli</span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#CFC8B4" }}>La presenza completa, con il promemoria per pubblicare.</p>
            <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "4px 10px" }}>
              <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "52px", lineHeight: "1", color: "#D4AE6A" }}>€99</span>
              <span style={{ fontSize: "15px", color: "#CFC8B4" }}>/ mese</span>
            </div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "#A39C88" }}>
              Prezzo normale{" "}
              <s>€199/mese</s>
            </div>
            <ul style={{ listStyle: "none", margin: "26px 0 36px", padding: "24px 0 0", borderTop: "1px solid rgba(212,174,106,0.35)", display: "flex", flexDirection: "column", gap: "14px", fontSize: "15.5px", lineHeight: "1.45", color: "#F3ECDD" }}>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                12 post al mese con grafica, testo e hashtag
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                2 Reel montati
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                8 Stories
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Calendario con giorno e ora di pubblicazione
              </li>
              <li style={{ display: "flex", gap: "12px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                Promemoria su WhatsApp il giorno in cui pubblicare
              </li>
            </ul>
            <PlanButton plan="pro" className="vs-btn" style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", minHeight: "52px", borderRadius: "999px", background: "#E0793A", color: "#1C2316", fontWeight: "800", textDecoration: "none", fontSize: "15.5px" }}>Scegli Pro</PlanButton>
          </article>
        </div>
        <div style={{ margin: "32px auto 0", maxWidth: "760px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "10px 14px", textAlign: "center", fontSize: "15px", color: "#CFC8B4" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <path d="M10 8.5v7l6-3.5z" />
          </svg>
          <span>
            Ti serve un video in più?{" "}
            <strong style={{ color: "#F3ECDD" }}>Reel extra a €20.</strong>
          </span>
        </div>
        <div style={{ margin: "14px auto 0", maxWidth: "760px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "8px 18px", textAlign: "center", fontSize: "14px", color: "#A39C88" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
              <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
            </svg>
            Pagamento sicuro con carta, PayPal o Satispay
          </span>
          <span>
            Hai domande prima di attivare?{" "}
            <a href={waLink("Ciao! Ho una domanda su Vetrina Studio.")} {...ev("WhatsApp", { origine: "pacchetti" })} style={{ color: "#D4AE6A", fontWeight: "600" }}>Scrivici su WhatsApp</a>
          </span>
        </div>
      </div>
    </section>
  );
}
