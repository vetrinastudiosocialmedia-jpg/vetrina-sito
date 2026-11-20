// Cosa facciamo: le 5 card dei servizi con gli esempi
export default function Servizi() {
  return (
    <section id="servizi" style={{ position: "relative", padding: "110px 32px 120px", background: "#222B1B" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
          <div style={{ flex: "1 1 520px", minWidth: "0" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AE6A" }}>Cosa facciamo</div>
            <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em", textWrap: "balance" }}>Tutto quello che serve alla tua vetrina digitale.</h2>
          </div>
          <p style={{ flex: "1 1 340px", minWidth: "0", maxWidth: "420px", margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#CFC8B4" }}>Ogni contenuto nasce da un piano: sappiamo cosa pubblicare, quando e perché. Tu ricevi il risultato finito.</p>
        </div>
        <div className="vs-mt64" style={{ marginTop: "64px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <article className="vs-card" style={{ flex: "1 1 300px", minWidth: "0", padding: "22px", borderRadius: "28px", background: "#4F6639", display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 60px -40px rgba(0,0,0,0.7)" }}>
            <div style={{ height: "190px", borderRadius: "18px", background: "#F3ECDD", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", boxShadow: "0 16px 30px -18px rgba(0,0,0,0.6)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "16px", color: "#1C2316" }}>Novembre</span>
                <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8A4B32" }}>Piano del mese</span>
              </div>
              <div style={{ flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gridTemplateRows: "repeat(3, minmax(0, 1fr))", gap: "5px" }}>
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <img loading="lazy" decoding="async" src="/img/cremi-portalo-320.webp" srcSet="/img/cremi-portalo-320.webp 320w, /img/cremi-portalo.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <img loading="lazy" decoding="async" src="/img/lumiere-prenota-320.webp" srcSet="/img/lumiere-prenota-320.webp 320w, /img/lumiere-prenota.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <div style={{ borderRadius: "4px", background: "#E0793A" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <img loading="lazy" decoding="async" src="/img/cremi-x-320.webp" srcSet="/img/cremi-x-320.webp 320w, /img/cremi-x.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <img loading="lazy" decoding="async" src="/img/lumiere-consigli-320.webp" srcSet="/img/lumiere-consigli-320.webp 320w, /img/lumiere-consigli.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <div style={{ borderRadius: "4px", background: "#E0793A" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <img loading="lazy" decoding="async" src="/img/idee-bar-320.webp" srcSet="/img/idee-bar-320.webp 320w, /img/idee-bar.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
                <img loading="lazy" decoding="async" src="/img/lumiere-s3-320.webp" srcSet="/img/lumiere-s3-320.webp 320w, /img/lumiere-s3.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }} />
                <div style={{ borderRadius: "4px", background: "#E6DCC8" }} />
              </div>
            </div>
            <h3 style={{ margin: "auto 0 0", paddingTop: "24px", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "25px", lineHeight: "1.15", color: "#F3ECDD" }}>Strategia e calendario</h3>
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", lineHeight: "1.6", color: "#E9E2D0" }}>Un piano editoriale mensile pensato per la tua attività e per i tuoi clienti.</p>
          </article>
          <article className="vs-card" style={{ flex: "1 1 300px", minWidth: "0", padding: "22px", borderRadius: "28px", background: "#6B4630", display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 40px 60px -40px rgba(0,0,0,0.7)" }}>
            <div style={{ position: "relative", height: "190px" }}>
              <img loading="lazy" decoding="async" src="/img/cremi-portalo-320.webp" srcSet="/img/cremi-portalo-320.webp 320w, /img/cremi-portalo.webp 640w" sizes="140px" alt="" style={{ position: "absolute", left: "calc(50% - 150px)", top: "24px", height: "156px", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "10px", transform: "rotate(-8deg)", boxShadow: "0 16px 28px -14px rgba(0,0,0,0.7)" }} />
              <img loading="lazy" decoding="async" src="/img/lumiere-consigli-320.webp" srcSet="/img/lumiere-consigli-320.webp 320w, /img/lumiere-consigli.webp 640w" sizes="140px" alt="" style={{ position: "absolute", left: "calc(50% + 22px)", top: "24px", height: "156px", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "10px", transform: "rotate(8deg)", boxShadow: "0 16px 28px -14px rgba(0,0,0,0.7)" }} />
              <img loading="lazy" decoding="async" src="/img/lumiere-prenota-320.webp" srcSet="/img/lumiere-prenota-320.webp 320w, /img/lumiere-prenota.webp 640w" sizes="140px" alt="" style={{ position: "absolute", left: "calc(50% - 68px)", top: "4px", height: "170px", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "10px", boxShadow: "0 20px 34px -14px rgba(0,0,0,0.8)" }} />
            </div>
            <h3 style={{ margin: "auto 0 0", paddingTop: "24px", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "25px", lineHeight: "1.15", color: "#F3ECDD" }}>Post e caroselli</h3>
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", lineHeight: "1.6", color: "#EFE3D3" }}>Grafiche curate e coerenti con il tuo stile, pronte per il feed.</p>
          </article>
          <article className="vs-card" style={{ flex: "1 1 300px", minWidth: "0", padding: "22px", borderRadius: "28px", background: "#C9A27A", display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 40px 60px -40px rgba(0,0,0,0.7)" }}>
            <div style={{ height: "190px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "relative", height: "190px", aspectRatio: "9 / 16", borderRadius: "20px", background: "#12160E", padding: "5px", boxShadow: "0 20px 34px -14px rgba(0,0,0,0.75)" }}>
                <img loading="lazy" decoding="async" src="/img/idee-bar-320.webp" srcSet="/img/idee-bar-320.webp 320w, /img/idee-bar.webp 640w" sizes="140px" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: "16px" }} />
                <div style={{ position: "absolute", inset: "5px", borderRadius: "16px", background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(243,236,221,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1C2316" aria-hidden="true">
                      <path d="M7 4.5v15l13-7.5z" />
                    </svg>
                  </div>
                </div>
                <div style={{ position: "absolute", left: "14px", right: "14px", bottom: "14px", height: "3px", borderRadius: "2px", background: "rgba(243,236,221,0.35)" }}>
                  <div style={{ width: "40%", height: "100%", borderRadius: "2px", background: "#F3ECDD" }} />
                </div>
              </div>
            </div>
            <h3 style={{ margin: "auto 0 0", paddingTop: "24px", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "25px", lineHeight: "1.15", color: "#1C2316" }}>Reels</h3>
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", lineHeight: "1.6", color: "#2A2A1C" }}>Video brevi con ritmo e testi, per farti scoprire da nuovi clienti.</p>
          </article>
          <article className="vs-card" style={{ flex: "1 1 300px", minWidth: "0", padding: "22px", borderRadius: "28px", background: "#2E3925", border: "1px solid rgba(212,174,106,0.3)", display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 60px -40px rgba(0,0,0,0.7)" }}>
            <div style={{ height: "190px", borderRadius: "18px", background: "#F3ECDD", padding: "14px", display: "flex", flexDirection: "column", gap: "10px", color: "#1C2316", boxShadow: "0 16px 30px -18px rgba(0,0,0,0.6)" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <img loading="lazy" decoding="async" src="/img/cremi-x-320.webp" srcSet="/img/cremi-x-320.webp 320w, /img/cremi-x.webp 640w" sizes="140px" alt="" style={{ flex: "none", width: "52px", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "6px" }} />
                <div style={{ minWidth: "0", fontSize: "12.5px", lineHeight: "1.45" }}>
                  <strong style={{ fontWeight: "700" }}>gelateria.cremi</strong>
                  {" "}Gelato come una volta: latte fresco, frutta di stagione e niente scorciatoie. Ti aspettiamo!
                </div>
              </div>
              <div style={{ fontSize: "12.5px", lineHeight: "1.5", fontWeight: "600", color: "#8A4B32" }}>#gelatoartigianale #gelateria #fattoamano #gelatoitaliano</div>
              <div style={{ marginTop: "auto", display: "flex", gap: "14px", color: "#4A4E3C" }} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z" />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                  <path d="M21 3L3 10.5l7 2.5 2.5 7z" />
                </svg>
              </div>
            </div>
            <h3 style={{ margin: "auto 0 0", paddingTop: "24px", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "25px", lineHeight: "1.15", color: "#F3ECDD" }}>Testi e hashtag</h3>
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", lineHeight: "1.6", color: "#CFC8B4" }}>Didascalie già scritte in italiano, con le parole giuste per farti trovare.</p>
          </article>
          <article className="vs-card" style={{ flex: "1 1 300px", minWidth: "0", padding: "22px", borderRadius: "28px", background: "#E0793A", display: "flex", flexDirection: "column", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 40px 60px -40px rgba(0,0,0,0.7)" }}>
            <div style={{ height: "190px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ height: "190px", maxWidth: "100%", borderRadius: "14px", background: "#12160E", padding: "6px", display: "flex", flexDirection: "column", gap: "6px", boxShadow: "0 20px 34px -14px rgba(0,0,0,0.6)" }}>
                <div style={{ display: "flex", gap: "5px", padding: "2px 4px" }} aria-hidden="true">
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E0793A" }} />
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#D4AE6A" }} />
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4F6639" }} />
                </div>
                <img loading="lazy" decoding="async" src="/img/site-desktop-640.webp" srcSet="/img/site-desktop-640.webp 640w, /img/site-desktop.webp 1200w" sizes="(max-width: 700px) 90vw, 560px" width="1200" height="750" alt="" style={{ display: "block", height: "159px", maxWidth: "100%", aspectRatio: "16 / 10", objectFit: "cover", objectPosition: "center top", borderRadius: "8px" }} />
              </div>
            </div>
            <h3 style={{ margin: "auto 0 0", paddingTop: "24px", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "500", fontSize: "25px", lineHeight: "1.15", color: "#1C2316" }}>Siti e landing page</h3>
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", lineHeight: "1.6", color: "#2A2116" }}>Un sito curato che presenta la tua attività e trasforma i visitatori in clienti.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
