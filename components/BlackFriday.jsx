import { waLink, FINE_BLACK_FRIDAY } from "@/lib/site";
import { ev } from "@/lib/track";

// Black Friday 2026: barra in alto + banner sotto la prima sezione.
// Spariscono da soli dal 1° dicembre 2026 alle 00:00 (ora di Roma):
//  - nel browser: lo script qui sotto aggiunge la classe "vs-bf-off" alla pagina e il CSS li nasconde,
//    e toglie il codice sconto dai link di pagamento;
//  - a ogni nuova pubblicazione dopo quella data non vengono più nemmeno generati.
// La data di scadenza (FINE_BLACK_FRIDAY) è in lib/site.js, insieme al codice sconto dei pulsanti dei pacchetti.

const attiva = () => Date.now() < FINE_BLACK_FRIDAY;

const NERO = "#151512";
const TERRACOTTA = "#C8643B";
const CREMA = "#F4EFE6";

const WA_BF = waLink("Ciao! Vorrei approfittare dell'offerta Black Friday: -20% sul primo mese e analisi della scheda Google in regalo.");

export function BlackFridayBar() {
  if (!attiva()) return null;
  return (
    <>
      {/* Deve restare nell'HTML anche dopo l'ottimizzazione (data-vs-keep) */}
      <script
        data-vs-keep=""
        dangerouslySetInnerHTML={{ __html: `if(Date.now()>=${FINE_BLACK_FRIDAY}){document.documentElement.classList.add("vs-bf-off");document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href*="prefilled_promo_code="]').forEach(function(a){a.href=a.href.replace(/&prefilled_promo_code=[^&]*/,"")})})}` }}
      />
      <div data-bf="" className="vs-bf-bar" role="region" aria-label="Offerta Black Friday" style={{ position: "sticky", top: 0, zIndex: 60, background: NERO, color: CREMA, borderBottom: `1px solid rgba(200,100,59,0.45)`, padding: "9px 20px", textAlign: "center", fontFamily: "var(--font-manrope), 'Segoe UI', system-ui, sans-serif", fontSize: "14px", lineHeight: "1.45", fontWeight: "600" }}>
        <span aria-hidden="true">🖤 </span>
        BLACK FRIDAY: -20% sul primo mese + analisi della scheda Google in regalo · fino al 30/11{" "}
        <a href="#black-friday" {...ev("Black Friday", { origine: "barra" })} style={{ display: "inline-block", padding: "2px 2px", color: CREMA, fontWeight: "800", textDecoration: "underline", textDecorationColor: TERRACOTTA, textUnderlineOffset: "3px", textDecorationThickness: "2px", whiteSpace: "nowrap" }}>
          <span aria-hidden="true">→ </span>Scopri l&apos;offerta
        </a>
      </div>
    </>
  );
}

export function BlackFridayBanner() {
  if (!attiva()) return null;
  return (
    <section id="black-friday" data-bf="" className="vs-bf-sec" aria-labelledby="bf-titolo" style={{ padding: "8px 32px 56px", scrollMarginTop: "72px" }}>
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(30px, 5vw, 64px)", borderRadius: "30px", background: NERO, color: CREMA, border: "1px solid rgba(200,100,59,0.35)", overflow: "hidden", boxShadow: "0 60px 90px -50px rgba(0,0,0,0.85)" }}>
        <div aria-hidden="true" style={{ position: "absolute", right: "-160px", top: "-200px", width: "560px", height: "560px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,100,59,0.22), rgba(200,100,59,0) 65%)", pointerEvents: "none" }} />
        <div className="vs-rowgap" style={{ position: "relative", display: "flex", flexWrap: "wrap", gap: "28px 64px", alignItems: "center" }}>
          <div style={{ flex: "1 1 360px", minWidth: "0" }}>
            <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", border: `1px solid ${TERRACOTTA}`, fontSize: "13px", fontWeight: "800", letterSpacing: "0.18em", color: CREMA }}>BLACK FRIDAY</div>
            <h2 id="bf-titolo" style={{ margin: "18px 0 0", fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: "400", lineHeight: "1" }}>
              <span style={{ display: "block", fontSize: "clamp(96px, 15vw, 176px)", letterSpacing: "-0.04em", color: TERRACOTTA }}>-20%</span>
              <span style={{ display: "block", marginTop: "6px", fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: CREMA }}>sul primo mese</span>
            </h2>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            <p style={{ margin: 0, fontSize: "clamp(18px, 1.7vw, 21px)", lineHeight: "1.55", color: CREMA }}>
              E in regalo l&apos;analisi completa della tua scheda Google: orari, foto, recensioni e tutto quello che fa scegliere te invece della concorrenza.
            </p>
            <p style={{ margin: "18px 0 0", fontSize: "16px", lineHeight: "1.65", color: "#D6CFC2" }}>
              Dicembre è il mese in cui si vende di più. Arriva pronto: post, testi e Stories ogni mese, tu approvi e pubblichi.
            </p>
            <a className="vs-btn vs-bf-btn" href={WA_BF} {...ev("WhatsApp", { origine: "black-friday" })} style={{ marginTop: "30px", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "58px", padding: "0 34px", borderRadius: "999px", background: TERRACOTTA, color: CREMA, textDecoration: "none", fontSize: "19px", fontWeight: "800" }}>
              Approfitta dell&apos;offerta
            </a>
            <p style={{ margin: "16px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#B5AE9F" }}>
              Offerta valida per i nuovi clienti che attivano il servizio entro il 30 novembre 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
