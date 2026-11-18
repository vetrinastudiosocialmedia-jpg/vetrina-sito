import { ev } from "@/lib/track";

// Esempi: cosa riceve il cliente, mostrato prima dei pacchetti
const serif = "var(--font-fraunces), Georgia, serif";

const POST = [
  { src: "/img/cremi-portalo.jpg", brand: "Gelateria Cremì", tipo: "Post", alt: "Post per Gelateria Cremì, progetto dimostrativo" },
  { src: "/img/lumiere-prenota.jpg", brand: "Lumière estetica", tipo: "Post", alt: "Post per Lumière estetica, progetto dimostrativo" },
  { src: "/img/cremi-x.jpg", brand: "Gelateria Cremì", tipo: "Post", alt: "Post per Gelateria Cremì, progetto dimostrativo" },
  { src: "/img/lumiere-consigli.jpg", brand: "Lumière estetica", tipo: "Carosello", alt: "Carosello per Lumière estetica, progetto dimostrativo" },
];

const ALTRI = [
  { src: "/img/idee-bar.jpg", alt: "Carosello di idee per bar e caffetterie, progetto dimostrativo" },
  { src: "/img/lumiere-capa.jpg", alt: "Presentazione dell'identità visiva di Lumière estetica, progetto dimostrativo" },
  { src: "/img/lumiere-s3.jpg", alt: "Post per Lumière estetica, progetto dimostrativo" },
];

const INCLUSO = [
  "Grafica con i colori e il logo della tua attività",
  "Le tue foto vere, curate e migliorate",
  "Testo e hashtag già scritti",
  "Giorno e ora consigliati per pubblicare",
];

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "none", marginTop: "2px" }}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function Esempi() {
  return (
    <section id="esempi" style={{ padding: "120px 32px", background: "#F3ECDD", color: "#1C2316" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ maxWidth: "760px" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Esempi</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: serif, fontWeight: "400", fontSize: "clamp(36px, 4.6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.02em", textWrap: "balance" }}>
            Ecco cosa ricevi,{" "}
            <em style={{ fontStyle: "italic", color: "#8A4B32" }}>ogni mese</em>.
          </h2>
          <p style={{ margin: "20px 0 0", fontSize: "18px", lineHeight: "1.65", color: "#4A4E3C", textWrap: "pretty" }}>
            Post e caroselli con lo stile della tua attività, pronti da pubblicare. Guardali prima di scegliere il pacchetto.
          </p>
          <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#6A6D5A" }}>
            Progetti dimostrativi realizzati con brand di fantasia. Immagini generate con IA.
          </p>
        </div>

        <div className="vs-mt56" style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "22px 16px" }}>
          {POST.map((p) => (
            <figure key={p.src} style={{ margin: "0" }}>
              <img src={p.src} alt={p.alt} loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "22px", boxShadow: "0 30px 50px -30px rgba(28,35,22,0.6)" }} />
              <figcaption style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontSize: "14.5px", color: "#4A4E3C" }}>
                <span style={{ fontWeight: "700", color: "#1C2316" }}>{p.brand}</span>
                <span style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #D5CAB2", fontSize: "12.5px", fontWeight: "600" }}>{p.tipo}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ marginTop: "22px", display: "flex", flexWrap: "wrap", gap: "22px" }}>
          <figure style={{ flex: "1 1 560px", minWidth: "0", margin: "0", padding: "22px", borderRadius: "26px", background: "#2B3522", color: "#F3ECDD", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "10px" }}>
              {ALTRI.map((p) => (
                <img key={p.src} src={p.src} alt={p.alt} loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "14px", boxShadow: "0 24px 40px -26px rgba(0,0,0,0.8)" }} />
              ))}
            </div>
            <figcaption style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "6px 16px", fontSize: "14.5px", color: "#CFC8B4" }}>
              <span style={{ fontWeight: "700", color: "#F3ECDD" }}>Caroselli e progetti completi</span>
              <span>Bar, estetica, negozi e altro</span>
            </figcaption>
          </figure>

          <div style={{ flex: "1 1 360px", minWidth: "0", padding: "36px", borderRadius: "26px", background: "#1C2316", color: "#F3ECDD", display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: serif, fontSize: "28px", lineHeight: "1.2" }}>In ogni contenuto</div>
            <ul style={{ listStyle: "none", margin: "22px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              {INCLUSO.map((t) => (
                <li key={t} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", lineHeight: "1.5", color: "#E6DECB" }}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: "30px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 24px" }}>
              <a className="vs-btn" href="#pacchetti" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "54px", padding: "0 28px", borderRadius: "999px", background: "#E0793A", color: "#1C2316", textDecoration: "none", fontSize: "16px", fontWeight: "700" }}>
                Scopri i pacchetti
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="https://www.instagram.com/vetrina.studio.socialmedia/" {...ev("Instagram", { origine: "esempi" })} style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#D4AE6A", fontSize: "15px", fontWeight: "600", textUnderlineOffset: "6px" }}>
                Altri esempi su Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
