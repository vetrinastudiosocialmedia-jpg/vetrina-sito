// Portfolio con i progetti dimostrativi
export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "120px 32px", background: "#F3ECDD", color: "#1C2316" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
          <div style={{ flex: "1 1 480px", minWidth: "0" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Portfolio</div>
            <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em" }}>Ogni profilo ha il suo stile.</h2>
            <p style={{ margin: "16px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#5A5E4C" }}>Progetti dimostrativi realizzati con brand di fantasia. Immagini generate con IA.</p>
          </div>
          <a href="https://www.instagram.com/vetrina.studio.socialmedia/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", color: "#2B3522", fontWeight: "700", fontSize: "15.5px", textUnderlineOffset: "6px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
            Guarda di più su Instagram
          </a>
        </div>
        <div className="vs-mt56" style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))", gap: "20px" }}>
          <figure style={{ margin: "0" }}>
            <img src="/img/cremi-portalo.jpg" alt="Post per Gelateria Cremì, progetto dimostrativo" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 30px 50px -30px rgba(28,35,22,0.6)" }} />
            <figcaption style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "14.5px", color: "#4A4E3C" }}>
              <span style={{ fontWeight: "700", color: "#1C2316" }}>Gelateria Cremì</span>
              <span>Post</span>
            </figcaption>
          </figure>
          <figure style={{ margin: "0" }}>
            <img src="/img/lumiere-prenota.jpg" alt="Post per Lumière estetica, progetto dimostrativo" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 30px 50px -30px rgba(28,35,22,0.6)" }} />
            <figcaption style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "14.5px", color: "#4A4E3C" }}>
              <span style={{ fontWeight: "700", color: "#1C2316" }}>Lumière estetica</span>
              <span>Post</span>
            </figcaption>
          </figure>
          <figure style={{ margin: "0" }}>
            <img src="/img/cremi-x.jpg" alt="Post per Gelateria Cremì, progetto dimostrativo" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 30px 50px -30px rgba(28,35,22,0.6)" }} />
            <figcaption style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "14.5px", color: "#4A4E3C" }}>
              <span style={{ fontWeight: "700", color: "#1C2316" }}>Gelateria Cremì</span>
              <span>Post</span>
            </figcaption>
          </figure>
          <figure style={{ margin: "0" }}>
            <img src="/img/lumiere-consigli.jpg" alt="Carosello per Lumière estetica, progetto dimostrativo" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 30px 50px -30px rgba(28,35,22,0.6)" }} />
            <figcaption style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "14.5px", color: "#4A4E3C" }}>
              <span style={{ fontWeight: "700", color: "#1C2316" }}>Lumière estetica</span>
              <span>Carosello</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
