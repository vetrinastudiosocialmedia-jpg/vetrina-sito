// Prima schermata: menu, titolo, pulsanti e telefono con il feed di esempio
export default function Hero() {
  return (
    <section className="vs-hero-sec" id="top" style={{ position: "relative", padding: "0 32px 120px" }}>
      <div aria-hidden="true" style={{ position: "absolute", right: "-180px", top: "-160px", width: "760px", height: "760px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,174,106,0.16), rgba(212,174,106,0) 65%)", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", left: "-240px", bottom: "-200px", width: "640px", height: "640px", borderRadius: "50%", background: "radial-gradient(circle, rgba(181,96,62,0.16), rgba(181,96,62,0) 65%)", pointerEvents: "none" }} />
      <svg aria-hidden="true" width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
        <path d="M-40 760 C 280 620, 520 860, 820 640 S 1300 300, 1500 380" stroke="#D4AE6A" strokeOpacity="0.35" strokeWidth="1.2" fill="none" />
        <path d="M-40 800 C 300 680, 540 900, 840 690 S 1300 350, 1500 430" stroke="#D4AE6A" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      </svg>
      <svg aria-hidden="true" width="100%" height="100%" style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0.07" }}>
        <filter id="vsGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vsGrain)" />
      </svg>
      <header className="vs-header" style={{ position: "relative", zIndex: "5", maxWidth: "1240px", margin: "0 auto", padding: "28px 0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px 32px" }}>
        <a href="#top" aria-label="Vetrina Studio, torna su" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#F3ECDD" }}>
          <img fetchPriority="high" className="vs-logo" src="/img/logo-vetrina.webp" srcSet="/img/logo-vetrina-240.webp 240w, /img/logo-vetrina.webp 400w" sizes="(max-width: 760px) 172px, 232px" width="400" height="107" alt="Vetrina Studio" style={{ display: "block", height: "62px", width: "auto" }} />
        </a>
        <nav className="vs-nav vs-hide-sm" aria-label="Menu principale" style={{ display: "flex", flexWrap: "wrap", gap: "32px", fontSize: "15px", fontWeight: "500" }}>
          <a href="#servizi">Servizi</a>
          <a href="#siti-web">Siti web</a>
          <a href="#esempi">Esempi</a>
          <a href="#pacchetti">Pacchetti</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="vs-btn vs-head-cta" href="#pacchetti" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "46px", padding: "0 22px", borderRadius: "999px", border: "1px solid rgba(212,174,106,0.55)", color: "#F3ECDD", textDecoration: "none", fontSize: "14.5px", fontWeight: "600" }}>Scegli il tuo pacchetto</a>
      </header>
      <div className="vs-hero" style={{ position: "relative", zIndex: "2", maxWidth: "1240px", margin: "0 auto", paddingTop: "56px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "64px" }}>
        <div className="vs-rise" style={{ flex: "1 1 520px", minWidth: "0" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "8px 16px", borderRadius: "999px", background: "rgba(243,236,221,0.06)", border: "1px solid rgba(243,236,221,0.14)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", color: "#E6DECB" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E0793A" }} />
            Social media · Siti web · Tutta Italia
          </div>
          <h1 className="vs-h1" style={{ margin: "28px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(46px, 6vw, 82px)", lineHeight: "1.02", letterSpacing: "-0.02em", textWrap: "balance" }}>
            Il tuo negozio merita una{" "}
            <em style={{ fontStyle: "italic", color: "#D4AE6A" }}>vetrina</em>
            {" "}anche online.
          </h1>
          <p className="vs-sub" style={{ margin: "28px 0 0", maxWidth: "520px", fontSize: "19px", lineHeight: "1.6", color: "#CFC8B4", textWrap: "pretty" }}>Post, caroselli e Reels pronti da pubblicare ogni mese, e un sito che porta clienti. Con una strategia dietro, non a caso.</p>
          <div className="vs-cta" style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 28px" }}>
            <a className="vs-btn" href="#pacchetti" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "56px", padding: "0 30px", borderRadius: "999px", background: "#E0793A", color: "#1C2316", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
              Scopri i pacchetti
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#esempi" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#F3ECDD", fontSize: "16px", fontWeight: "600", textUnderlineOffset: "6px" }}>Guarda gli esempi</a>
          </div>
          <p className="vs-note" style={{ margin: "16px 0 0", fontSize: "14.5px", fontWeight: "500", letterSpacing: "0.02em", color: "#A39C88" }}>Senza vincoli · Nessuna riunione · Disdici quando vuoi</p>
          <div className="vs-trust" style={{ marginTop: "52px", paddingTop: "28px", borderTop: "1px solid rgba(243,236,221,0.12)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(160px, 100%), 1fr))", gap: "20px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14.5px", lineHeight: "1.45", color: "#E6DECB" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Tutto online, senza riunioni
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14.5px", lineHeight: "1.45", color: "#E6DECB" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Contenuti pronti da pubblicare
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14.5px", lineHeight: "1.45", color: "#E6DECB" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Reels e siti web professionali
            </div>
          </div>
        </div>
        <div className="vs-rise2" style={{ flex: "1 1 440px", minWidth: "0", position: "relative", minHeight: "640px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div aria-hidden="true" style={{ position: "absolute", width: "400px", maxWidth: "92%", height: "560px", bottom: "10px", borderRadius: "200px 200px 28px 28px", background: "#26301E", border: "1px solid rgba(212,174,106,0.4)" }} />
          <div aria-hidden="true" style={{ position: "absolute", width: "440px", maxWidth: "98%", height: "600px", bottom: "-10px", borderRadius: "220px 220px 32px 32px", border: "1px solid rgba(212,174,106,0.16)" }} />
          <div role="img" aria-label="Esempio di profilo Instagram curato da Vetrina Studio" style={{ position: "relative", width: "290px", height: "590px", borderRadius: "46px", background: "#0F130C", padding: "11px", boxShadow: "0 60px 90px -40px rgba(0,0,0,0.8), 0 0 0 1px rgba(243,236,221,0.08)" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "36px", background: "#F6F1E6", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "34px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "86px", height: "22px", borderRadius: "999px", background: "#0F130C" }} />
              </div>
              <div style={{ padding: "12px 16px 14px", display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid #E3DACA" }}>
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", padding: "2px", background: "conic-gradient(#E0793A, #D4AE6A, #B5603E, #E0793A)" }}>
                  <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#2B3522", border: "2px solid #F6F1E6" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#1C2316" }}>@latuaattività</div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "64px", height: "6px", borderRadius: "4px", background: "#DCD2BF" }} />
                    <div style={{ width: "36px", height: "6px", borderRadius: "4px", background: "#DCD2BF" }} />
                  </div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "2px", paddingTop: "2px" }}>
                <img decoding="async" src="/img/cremi-portalo-320.webp" srcSet="/img/cremi-portalo-320.webp 320w, /img/cremi-portalo.webp 640w" sizes="130px" alt="Post per una gelateria" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
                <img decoding="async" src="/img/lumiere-prenota-320.webp" srcSet="/img/lumiere-prenota-320.webp 320w, /img/lumiere-prenota.webp 640w" sizes="130px" alt="Post per un centro estetico" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
                <img decoding="async" src="/img/cremi-x-320.webp" srcSet="/img/cremi-x-320.webp 320w, /img/cremi-x.webp 640w" sizes="130px" alt="Post per una gelateria" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
                <img decoding="async" src="/img/lumiere-consigli-320.webp" srcSet="/img/lumiere-consigli-320.webp 320w, /img/lumiere-consigli.webp 640w" sizes="130px" alt="Carosello di consigli" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
                <div style={{ aspectRatio: "4 / 5", background: "#1C2316", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M10 8.5v7l6-3.5z" />
                  </svg>
                </div>
                <img decoding="async" src="/img/lumiere-s3-320.webp" srcSet="/img/lumiere-s3-320.webp 320w, /img/lumiere-s3.webp 640w" sizes="130px" alt="Post per un centro estetico" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
                <img decoding="async" src="/img/idee-bar-320.webp" srcSet="/img/idee-bar-320.webp 320w, /img/idee-bar.webp 640w" sizes="130px" alt="Carosello per bar" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
                <div style={{ aspectRatio: "4 / 5", background: "#E0793A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic", fontSize: "14px", color: "#1C2316" }}>Offerta</div>
                </div>
                <img decoding="async" src="/img/lumiere-capa-320.webp" srcSet="/img/lumiere-capa-320.webp 320w, /img/lumiere-capa.webp 640w" sizes="130px" alt="Presentazione di un progetto" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover" }} />
              </div>
            </div>
          </div>
          <div className="vs-float" style={{ position: "absolute", left: "0", top: "70px", width: "210px", padding: "16px 18px", borderRadius: "20px", background: "rgba(28,35,22,0.92)", border: "1px solid rgba(212,174,106,0.45)", boxShadow: "0 30px 50px -24px rgba(0,0,0,0.75)" }}>
            <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4AE6A" }}>Calendario del mese</div>
            <div aria-hidden="true" style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "5px" }}>
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "#E0793A" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "#D4AE6A" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "#E0793A" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "#D4AE6A" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "#E0793A" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "#D4AE6A" }} />
              <div style={{ aspectRatio: "1", borderRadius: "4px", background: "rgba(243,236,221,0.1)" }} />
            </div>
            <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600", color: "#F3ECDD" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E0793A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Contenuti pronti
            </div>
          </div>
          <div className="vs-float2" style={{ position: "absolute", right: "0", bottom: "96px", width: "196px", padding: "16px 18px", borderRadius: "20px", background: "#8A4B32", boxShadow: "0 30px 50px -24px rgba(0,0,0,0.75)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#F3ECDD" }}>Reel</div>
              <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F3ECDD", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#8A4B32" aria-hidden="true">
                  <path d="M7 4.5v15l13-7.5z" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" style={{ marginTop: "14px", height: "30px", display: "flex", alignItems: "center", gap: "3px" }}>
              <div style={{ width: "3px", height: "30%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "70%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "45%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "100%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "60%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "80%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "35%", borderRadius: "2px", background: "#F3ECDD" }} />
              <div style={{ width: "3px", height: "65%", borderRadius: "2px", background: "#E6C79A" }} />
              <div style={{ width: "3px", height: "90%", borderRadius: "2px", background: "#E6C79A" }} />
              <div style={{ width: "3px", height: "50%", borderRadius: "2px", background: "#E6C79A" }} />
              <div style={{ width: "3px", height: "25%", borderRadius: "2px", background: "#E6C79A" }} />
              <div style={{ width: "3px", height: "55%", borderRadius: "2px", background: "#E6C79A" }} />
              <div style={{ width: "3px", height: "75%", borderRadius: "2px", background: "#E6C79A" }} />
              <div style={{ width: "3px", height: "40%", borderRadius: "2px", background: "#E6C79A" }} />
            </div>
            <div style={{ marginTop: "10px", fontSize: "13px", fontWeight: "600", color: "#F3ECDD" }}>Montaggio e testi inclusi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
