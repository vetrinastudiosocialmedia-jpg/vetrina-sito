// Ti suona familiare? Il problema del cliente
export default function Problema() {
  return (
    <section style={{ padding: "120px 32px", background: "#F3ECDD", color: "#1C2316" }}>
      <div className="vs-rowgap" style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px 96px" }}>
        <div style={{ flex: "1 1 440px", minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Ti suona familiare?</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em", textWrap: "balance" }}>
            Sai che dovresti pubblicare. Il problema è trovare il tempo{" "}
            <em style={{ fontStyle: "italic", color: "#8A4B32" }}>(e le idee)</em>
            .
          </h2>
          <div role="img" aria-label="Un profilo Instagram fermo da mesi, senza idee su cosa pubblicare" style={{ position: "relative", marginTop: "48px", maxWidth: "420px", padding: "18px 0 34px 18px" }}>
            <div style={{ borderRadius: "24px", background: "#FBF8F1", padding: "20px", boxShadow: "0 40px 60px -36px rgba(28,35,22,0.45), 0 0 0 1px rgba(28,35,22,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#E6DCC8" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "700" }}>@latuaattività</div>
                  <div style={{ fontSize: "12.5px", fontWeight: "600", color: "#9A4A1C" }}>Ultimo post: 3 mesi fa</div>
                </div>
              </div>
              <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "8px" }}>
                <div style={{ aspectRatio: "1", borderRadius: "10px", border: "1.5px dashed #D5CAB2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B5A889" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </div>
                <div style={{ aspectRatio: "1", borderRadius: "10px", border: "1.5px dashed #D5CAB2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B5A889" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </div>
                <div style={{ aspectRatio: "1", borderRadius: "10px", border: "1.5px dashed #D5CAB2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B5A889" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                    <path d="M12 6v12M6 12h12" />
                  </svg>
                </div>
                <div style={{ aspectRatio: "1", borderRadius: "10px", background: "#E6DCC8", opacity: "0.7" }} />
                <div style={{ aspectRatio: "1", borderRadius: "10px", background: "#E6DCC8", opacity: "0.7" }} />
                <div style={{ aspectRatio: "1", borderRadius: "10px", background: "#E6DCC8", opacity: "0.7" }} />
              </div>
            </div>
            <div style={{ position: "absolute", top: "0", right: "-6px", display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 14px", borderRadius: "999px", background: "#E0793A", color: "#1C2316", fontSize: "13px", fontWeight: "700", boxShadow: "0 14px 24px -12px rgba(0,0,0,0.4)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              Non ho tempo
            </div>
            <div style={{ position: "absolute", left: "0", bottom: "0", display: "inline-flex", alignItems: "center", gap: "12px", padding: "14px 18px", borderRadius: "20px 20px 20px 6px", background: "#2B3522", color: "#F3ECDD", fontSize: "15px", fontWeight: "600", boxShadow: "0 20px 30px -14px rgba(0,0,0,0.5)" }}>
              Cosa pubblico oggi?
              <span style={{ display: "inline-flex", gap: "4px" }} aria-hidden="true">
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AE6A" }} />
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AE6A", opacity: "0.7" }} />
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AE6A", opacity: "0.4" }} />
              </span>
            </div>
          </div>
        </div>
        <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "30px 0", borderTop: "1px solid #D5CAB2", display: "flex", gap: "24px" }}>
            <div style={{ flex: "none", fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "22px", color: "#9A4A1C" }}>01</div>
            <div>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Non sai mai cosa pubblicare</h3>
              <p style={{ margin: "10px 0 0", fontSize: "16px", lineHeight: "1.65", color: "#4A4E3C" }}>Ti ritrovi davanti al telefono senza idee. Noi arriviamo con il mese già pianificato.</p>
            </div>
          </div>
          <div style={{ padding: "30px 0", borderTop: "1px solid #D5CAB2", display: "flex", gap: "24px" }}>
            <div style={{ flex: "none", fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "22px", color: "#9A4A1C" }}>02</div>
            <div>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Le grafiche fatte di fretta non rendono</h3>
              <p style={{ margin: "10px 0 0", fontSize: "16px", lineHeight: "1.65", color: "#4A4E3C" }}>Un'immagine curata comunica qualità prima ancora che il cliente entri dalla porta.</p>
            </div>
          </div>
          <div style={{ padding: "30px 0", borderTop: "1px solid #D5CAB2", borderBottom: "1px solid #D5CAB2", display: "flex", gap: "24px" }}>
            <div style={{ flex: "none", fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "22px", color: "#9A4A1C" }}>03</div>
            <div>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Pubblichi a periodi, poi sparisci</h3>
              <p style={{ margin: "10px 0 0", fontSize: "16px", lineHeight: "1.65", color: "#4A4E3C" }}>La costanza è ciò che fa crescere un profilo. Con i contenuti già pronti, non salti più un mese.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
