// Domande frequenti
export default function Faq() {
  return (
    <section className="vs-faq" id="faq" style={{ padding: "40px 32px 130px", background: "#F3ECDD", color: "#1C2316" }}>
      <div className="vs-rowgap" style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px 96px" }}>
        <div style={{ flex: "1 1 340px", minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Domande frequenti</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em" }}>Prima di iniziare.</h2>
        </div>
        <div style={{ flex: "2 1 560px", minWidth: "0", display: "flex", flexDirection: "column" }}>
          <details open style={{ borderTop: "1px solid #D5CAB2", padding: "26px 0" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
              Devo fare delle riunioni?
              <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
            </summary>
            <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>No. Tutto avviene online: un modulo all'inizio e un messaggio per approvare i contenuti ogni mese. Per qualsiasi domanda, ci scrivi su WhatsApp.</p>
          </details>
          <details style={{ borderTop: "1px solid #D5CAB2", padding: "26px 0" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
              Chi pubblica i post?
              <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
            </summary>
            <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>Tu, in un minuto. Ricevi immagini e testi pronti, con giorno e ora consigliati; nel piano Pro ti mandiamo anche un promemoria su WhatsApp. Così il tuo account resta solo tuo.</p>
          </details>
          <details style={{ borderTop: "1px solid #D5CAB2", padding: "26px 0" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
              Usate l'intelligenza artificiale?
              <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
            </summary>
            <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>Sì, per scrivere e impaginare più velocemente. Usiamo le tue foto reali, ogni contenuto è controllato da una persona e le immagini generate vengono sempre segnalate.</p>
          </details>
          <details style={{ borderTop: "1px solid #D5CAB2", padding: "26px 0" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
              Cosa devo darvi?
              <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
            </summary>
            <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>Il logo, le foto della tua attività (vanno bene anche fatte col telefono, idealmente una decina al mese) e le novità che vuoi comunicare. Se un mese ne mandi poche, completiamo con grafiche e immagini di repertorio.</p>
          </details>
          <details style={{ borderTop: "1px solid #D5CAB2", padding: "26px 0" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
              Rispondete ai commenti e ai messaggi?
              <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
            </summary>
            <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>No, quelli restano a te: noi pensiamo ai contenuti.</p>
          </details>
          <details style={{ borderTop: "1px solid #D5CAB2", borderBottom: "1px solid #D5CAB2", padding: "26px 0" }}>
            <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
              Posso disdire?
              <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
            </summary>
            <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>Sì. Tutti i piani sono senza vincoli: disdici quando vuoi. Il prezzo di lancio resta bloccato finché resti abbonato.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
