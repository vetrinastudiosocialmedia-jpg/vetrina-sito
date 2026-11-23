// Come funziona (4 passi) e Come lavoriamo
export default function ComeFunziona() {
  return (
    <section id="come-funziona" style={{ padding: "120px 32px", background: "#EAE1CE", color: "#1C2316" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Come funziona</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em", textWrap: "balance" }}>Quattro passi. Zero complicazioni.</h2>
        </div>
        <ol className="vs-mt72" style={{ listStyle: "none", margin: "72px 0 0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "22px" }}>
          <li style={{ padding: "32px 28px 34px", borderRadius: "26px", background: "#F6F1E6", boxShadow: "0 30px 50px -40px rgba(28,35,22,0.6)" }}>
            <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "56px", lineHeight: "1", color: "#B5603E" }}>1</div>
            <h3 style={{ margin: "26px 0 0", fontSize: "20px", fontWeight: "700" }}>Scegli il pacchetto</h3>
            <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>Attivi l'abbonamento online in due minuti.</p>
          </li>
          <li style={{ padding: "32px 28px 34px", borderRadius: "26px", background: "#F6F1E6", boxShadow: "0 30px 50px -40px rgba(28,35,22,0.6)" }}>
            <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "56px", lineHeight: "1", color: "#B5603E" }}>2</div>
            <h3 style={{ margin: "26px 0 0", fontSize: "20px", fontWeight: "700" }}>Ci racconti la tua attività</h3>
            <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>Un modulo con logo, foto, orari e cosa vuoi comunicare.</p>
          </li>
          <li style={{ padding: "32px 28px 34px", borderRadius: "26px", background: "#F6F1E6", boxShadow: "0 30px 50px -40px rgba(28,35,22,0.6)" }}>
            <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "56px", lineHeight: "1", color: "#B5603E" }}>3</div>
            <h3 style={{ margin: "26px 0 0", fontSize: "20px", fontWeight: "700" }}>Approvi con un clic</h3>
            <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>Entro il 25 del mese ricevi il calendario del mese dopo. Approvi o chiedi una modifica.</p>
          </li>
          <li style={{ padding: "32px 28px 34px", borderRadius: "26px", background: "#2B3522", color: "#F3ECDD", boxShadow: "0 30px 50px -30px rgba(28,35,22,0.8)" }}>
            <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "56px", lineHeight: "1", color: "#D4AE6A" }}>4</div>
            <h3 style={{ margin: "26px 0 0", fontSize: "20px", fontWeight: "700" }}>Pubblichi in un minuto</h3>
            <p style={{ margin: "10px 0 0", fontSize: "15.5px", lineHeight: "1.65", color: "#D9D2BE" }}>Immagini, testi e orari sono pronti. Nel piano Pro ti ricordiamo noi su WhatsApp quando pubblicare.</p>
          </li>
        </ol>
        <div id="come-lavoriamo" style={{ marginTop: "96px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px" }}>
            <div>
              <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Come lavoriamo</div>
              <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1.1" }}>Chiari, veloci, senza sorprese.</h2>
            </div>
          </div>
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "32px 28px" }}>
            <div style={{ paddingTop: "24px", borderTop: "1px solid #CDBF9F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2B3522", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="6" width="18" height="14" rx="2.5" />
                  <circle cx="12" cy="13" r="3.5" />
                  <path d="M8.5 6l1.5-2.5h4L15.5 6" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Foto vere, curate</h3>
              <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>I tuoi piatti e prodotti sono sempre i tuoi: partiamo dalle foto reali della tua attività. Se un mese ne hai poche, completiamo con grafiche e immagini di repertorio, mai al posto di ciò che vendi.</p>
            </div>
            <div style={{ paddingTop: "24px", borderTop: "1px solid #CDBF9F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2B3522", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l1.8 4.6L18.5 9.4l-4.7 1.8L12 16l-1.8-4.8L5.5 9.4l4.7-1.8z" />
                  <path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Creati con l'IA, rivisti da persone</h3>
              <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>L'IA ci fa lavorare più veloce, ed è per questo che i prezzi sono bassi. Ogni testo e ogni immagine sono controllati da una persona prima di arrivare a te.</p>
            </div>
            <div style={{ paddingTop: "24px", borderTop: "1px solid #CDBF9F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2B3522", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z" />
                  <path d="M8.5 10.5h7M8.5 13.5h4.5" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Tutto per iscritto</h3>
              <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>Niente riunioni: ci sentiamo su WhatsApp o via email.</p>
            </div>
            <div style={{ paddingTop: "24px", borderTop: "1px solid #CDBF9F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#2B3522", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
                  <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
                  <circle cx="12" cy="15.5" r="1.3" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Il tuo account resta tuo</h3>
              <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.65", color: "#4A4E3C" }}>Non ci serve nessun accesso: ricevi i contenuti pronti e li pubblichi tu. Non ti chiederemo mai la password.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
