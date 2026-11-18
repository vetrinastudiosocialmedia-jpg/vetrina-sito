import { FAQ } from "@/lib/faq";

// Domande frequenti: i testi stanno in lib/faq.js
export default function Faq() {
  return (
    <section className="vs-faq" id="faq" style={{ padding: "40px 32px 130px", background: "#F3ECDD", color: "#1C2316" }}>
      <div className="vs-rowgap" style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px 96px" }}>
        <div style={{ flex: "1 1 340px", minWidth: "0" }}>
          <div style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9A4A1C" }}>Domande frequenti</div>
          <h2 style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", fontSize: "clamp(34px, 4vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.015em" }}>Prima di iniziare.</h2>
        </div>
        <div style={{ flex: "2 1 560px", minWidth: "0", display: "flex", flexDirection: "column" }}>
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              style={{
                borderTop: "1px solid #D5CAB2",
                borderBottom: i === FAQ.length - 1 ? "1px solid #D5CAB2" : undefined,
                padding: "26px 0",
              }}
            >
              <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", minHeight: "44px", fontSize: "19px", fontWeight: "700" }}>
                <h3 style={{ margin: "0", font: "inherit" }}>{item.q}</h3>
                <span className="vs-plus" aria-hidden="true" style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #B5A889", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "400", color: "#9A4A1C" }}>+</span>
              </summary>
              <p style={{ margin: "14px 0 0", maxWidth: "640px", fontSize: "16px", lineHeight: "1.7", color: "#4A4E3C" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
