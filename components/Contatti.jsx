import { waLink } from "@/lib/site";
import { ev } from "@/lib/track";

// Contatti: un solo pulsante WhatsApp per chi ha domande prima di attivare, più email e Instagram
export default function Contatti() {
  return (
    <section id="contatti" style={{ position: "relative", padding: "120px 32px", background: "#1C2316" }}>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "-120px", width: "900px", height: "600px", transform: "translateX(-50%)", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(212,174,106,0.12), rgba(212,174,106,0) 65%)", pointerEvents: "none" }} />
      <div className="vs-rowgap" style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "56px 80px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 440px", minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AE6A" }}>Contatti</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(38px, 4.6vw, 62px)", lineHeight: "1.04", letterSpacing: "-0.02em", textWrap: "balance" }}>
            Hai una domanda prima di{" "}
            <em style={{ fontStyle: "italic", color: "#D4AE6A" }}>iniziare</em>
            ?
          </h2>
          <p style={{ margin: "22px 0 0", maxWidth: "460px", fontSize: "17px", lineHeight: "1.65", color: "#CFC8B4" }}>Scrivici su WhatsApp: ti rispondiamo per iscritto, senza chiamate e senza impegno. Quando sei pronto, scegli il pacchetto e attivi tutto online.</p>
          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <a href="mailto:vetrina.studio.socialmedia@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "44px", color: "#E6DECB", fontSize: "15.5px", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              vetrina.studio.socialmedia@gmail.com
            </a>
            <a href="https://www.instagram.com/vetrina.studio.socialmedia/" {...ev("Instagram", { origine: "contatti" })} style={{ display: "inline-flex", alignItems: "center", gap: "12px", minHeight: "44px", color: "#E6DECB", fontSize: "15.5px", textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AE6A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="#D4AE6A" />
              </svg>
              @vetrina.studio.socialmedia
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 460px", minWidth: "0", padding: "38px", borderRadius: "30px", background: "#F3ECDD", color: "#1C2316", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 60px 90px -50px rgba(0,0,0,0.8)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ flex: "none", width: "52px", height: "52px", borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "24px", lineHeight: "1.2" }}>Scrivici su WhatsApp</div>
              <div style={{ marginTop: "2px", fontSize: "14.5px", color: "#4A4E3C" }}>Dubbi sui pacchetti, sui tempi o su cosa serve? Chiedi pure.</div>
            </div>
          </div>
          <a className="vs-btn" href={waLink("Ciao! Ho una domanda su Vetrina Studio.")} {...ev("WhatsApp", { origine: "contatti" })} style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", minHeight: "56px", borderRadius: "999px", background: "#E0793A", color: "#1C2316", textDecoration: "none", fontSize: "16px", fontWeight: "800" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1C2316" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Scrivici su WhatsApp
          </a>
          <div style={{ fontSize: "13.5px", lineHeight: "1.5", color: "#5A5E4C", textAlign: "center" }}>Ti rispondiamo per iscritto, nei giorni lavorativi.</div>
        </div>
      </div>
    </section>
  );
}
