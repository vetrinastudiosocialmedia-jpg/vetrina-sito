import { CITTA } from "@/lib/site";

// Dove lavoriamo: le zone servite (le città stanno in lib/site.js)
export default function Zone() {
  return (
    <section id="dove-lavoriamo" style={{ padding: "120px 32px", background: "#222B1B", color: "#F3ECDD" }}>
      <div className="vs-rowgap" style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px 96px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 340px", minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AE6A" }}>Dove lavoriamo</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em", textWrap: "balance" }}>
            Online, in{" "}
            <em style={{ fontStyle: "italic", color: "#D4AE6A" }}>tutta Italia</em>.
          </h2>
        </div>
        <div style={{ flex: "2 1 560px", minWidth: "0" }}>
          <p style={{ margin: "0", maxWidth: "640px", fontSize: "17px", lineHeight: "1.7", color: "#CFC8B4" }}>
            Curiamo i social di bar, ristoranti, gelaterie, centri estetici e negozi in tutta Italia: lavoriamo tutto online, per iscritto, senza riunioni. La nostra base è tra Modena e Bologna, dove seguiamo volentieri le attività della zona. I piani partono da €49 al mese, senza vincoli.
          </p>
          <ul aria-label="La nostra zona: comuni tra Modena e Bologna" style={{ margin: "32px 0 0", padding: "0", listStyle: "none", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {CITTA.map((c) => (
              <li key={c} style={{ padding: "8px 16px", borderRadius: "999px", border: "1px solid rgba(212,174,106,0.4)", fontSize: "14.5px", fontWeight: "600", color: "#E6DECB" }}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
