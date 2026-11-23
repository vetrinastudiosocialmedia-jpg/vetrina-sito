"use client";

import { useEffect, useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { track } from "@/lib/track";

// Modulo di benvenuto: dopo il pagamento il cliente lascia solo i dati di base e il WhatsApp.
// Il resto (logo, foto, cosa comunicare, consegna) si raccoglie poi su WhatsApp.
// Le risposte vengono inviate su WhatsApp (o via email) come messaggio già scritto.

const PIANI = { essenziale: "Essenziale", crescita: "Crescita", pro: "Pro" };

const C = {
  bg: "#F3ECDD",
  card: "#FBF8F1",
  line: "#D5CAB2",
  ink: "#1C2316",
  soft: "#4A4E3C",
  accent: "#E0793A",
  terra: "#9A4A1C",
  dark: "#1C2316",
  gold: "#D4AE6A",
};

const serif = "var(--font-fraunces), Georgia, serif";
const sans = "var(--font-manrope), 'Segoe UI', system-ui, sans-serif";

const label = { fontSize: "14px", fontWeight: 700, color: C.ink };
const hint = { fontSize: "13px", color: "#5A5E4C", fontWeight: 500 };
const input = {
  width: "100%",
  minHeight: "50px",
  padding: "12px 16px",
  borderRadius: "14px",
  border: `1px solid ${C.line}`,
  background: "#FFFFFF",
  color: C.ink,
  fontSize: "15.5px",
};

function Field({ id, title, help, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor={id} style={label}>
        {title} {help ? <span style={hint}>{help}</span> : null}
      </label>
      {children}
    </div>
  );
}

export default function Benvenuto() {
  const [f, setF] = useState({
    piano: "",
    nome: "",
    attivita: "",
    settore: "",
    citta: "",
    instagram: "",
    whatsapp: "",
    email: "",
  });
  const [inviato, setInviato] = useState(false);
  const [pagato, setPagato] = useState(false);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const p = q.get("piano");
    if (p && PIANI[p]) setF((v) => ({ ...v, piano: PIANI[p] }));
    if (q.get("pagato") === "1") {
      setPagato(true);
      // Una sola volta per sessione, anche se la pagina viene ricaricata
      let giaContato = false;
      try {
        giaContato = sessionStorage.getItem("vs-pagamento") === "1";
        sessionStorage.setItem("vs-pagamento", "1");
      } catch {}
      if (!giaContato) track("Pagamento", { piano: PIANI[p] ? p : "sconosciuto" });
    }
  }, []);

  useEffect(() => {
    if (inviato) document.getElementById("grazie")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [inviato]);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const righe = [
    "Ciao Vetrina Studio! Ecco il modulo di benvenuto.",
    "",
    `Piano: ${f.piano || "-"}`,
    `Nome: ${f.nome}`,
    `Attività: ${f.attivita}`,
    `Settore: ${f.settore || "-"}`,
    `Città: ${f.citta || "-"}`,
    `Instagram: ${f.instagram || "-"}`,
    `WhatsApp: ${f.whatsapp}`,
    `Email usata per il pagamento: ${f.email || "-"}`,
    "",
    "Aspetto il vostro messaggio per i dettagli e la consegna.",
  ];
  const testo = righe.join("\n");
  const pronto = f.nome.trim() && f.attivita.trim() && f.whatsapp.trim();

  function invia(e) {
    e.preventDefault();
    if (!pronto) return;
    setInviato(true);
    track("Modulo benvenuto", { piano: f.piano || "-" });
    window.open(waLink(testo), "_blank", "noopener");
  }

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Modulo di benvenuto – ${f.attivita || "nuovo cliente"}`
  )}&body=${encodeURIComponent(testo)}`;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: sans }}>
      <header style={{ background: C.dark, padding: "18px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href="/" aria-label="Vetrina Studio, torna al sito">
            <img decoding="async" src="/img/logo-vetrina.webp" width="400" height="107" alt="Vetrina Studio" style={{ display: "block", height: "52px", width: "auto" }} />
          </a>
          <a href="/" style={{ color: "#E6DECB", fontSize: "14px", fontWeight: 600, textDecoration: "none", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>
            ← Torna al sito
          </a>
        </div>
      </header>

      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.terra }}>
          Benvenuto in Vetrina Studio
        </div>
        <h1 style={{ margin: "14px 0 0", fontFamily: serif, fontWeight: 400, fontSize: "clamp(34px, 6vw, 52px)", lineHeight: 1.08 }}>
          Raccontaci la tua <em style={{ color: "#8A4B32" }}>attività</em>.
        </h1>
        <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: 1.65, color: C.soft, maxWidth: "640px" }}>
          {pagato
            ? "Pagamento ricevuto, grazie! Lasciaci i tuoi dati: ci vuole un minuto."
            : "Se hai appena scelto un piano, completa prima il pagamento. Poi lasciaci i tuoi dati: ci vuole un minuto."}
        </p>

        <ol style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "12px" }}>
          {[
            ["1", pagato ? "Pagamento fatto ✓" : "Pagamento", pagato ? "Ricevuto, grazie!" : "Con carta, Satispay o Apple Pay."],
            ["2", "Questo modulo", "Un minuto."],
            ["3", "Ti scriviamo su WhatsApp", "Per i dettagli e la consegna."],
          ].map(([n, t, d]) => (
            <li key={n} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px 18px", borderRadius: "18px", background: C.card, border: `1px solid ${C.line}` }}>
              <span style={{ fontFamily: serif, fontSize: "30px", lineHeight: 1, color: "#B5603E" }}>{n}</span>
              <span>
                <strong style={{ display: "block", fontSize: "15.5px" }}>{t}</strong>
                <span style={{ fontSize: "14px", color: C.soft }}>{d}</span>
              </span>
            </li>
          ))}
        </ol>

        {inviato ? (
          <section id="grazie" style={{ scrollMarginTop: "24px", marginTop: "36px", padding: "32px", borderRadius: "26px", background: C.dark, color: "#F3ECDD" }}>
            <h2 style={{ margin: 0, fontFamily: serif, fontWeight: 400, fontSize: "32px" }}>
              Grazie! Ci sentiamo su WhatsApp.
            </h2>
            <p style={{ margin: "14px 0 0", fontSize: "16.5px", lineHeight: 1.65, color: "#D9D2BE" }}>
              Si è aperto WhatsApp con i tuoi dati già scritti: <strong style={{ color: "#F3ECDD" }}>invia il messaggio</strong>, così abbiamo subito il tuo contatto.
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "16.5px", lineHeight: 1.65, color: "#D9D2BE" }}>
              Ti scriviamo entro 24 ore lavorative per raccogliere le altre informazioni (logo, foto, cosa vuoi comunicare) e per concordare la consegna.
            </p>
            <div style={{ marginTop: "22px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href={waLink(testo)} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 22px", borderRadius: "999px", background: C.accent, color: C.ink, fontWeight: 800, textDecoration: "none" }}>
                Riapri WhatsApp
              </a>
              <a href={mailto} style={{ display: "inline-flex", alignItems: "center", minHeight: "50px", padding: "0 22px", borderRadius: "999px", border: "1px solid rgba(243,236,221,0.4)", color: "#F3ECDD", fontWeight: 700, textDecoration: "none" }}>
                Preferisco l&apos;email
              </a>
            </div>
          </section>
        ) : null}

        <form onSubmit={invia} style={{ marginTop: "36px", padding: "32px", borderRadius: "26px", background: C.card, border: `1px solid ${C.line}`, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
          <div role="note" style={{ gridColumn: "1 / -1", display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px 18px", borderRadius: "16px", background: "#EAF3E4", border: "1px solid #B9D3AB" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" style={{ flex: "none", marginTop: "1px" }}>
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.4z"/>
            </svg>
            <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: C.ink }}>
              <strong>Ti contatteremo noi su WhatsApp</strong> entro 24 ore lavorative per raccogliere le altre informazioni (logo, foto, cosa vuoi comunicare) e per concordare la consegna. Qui ci servono solo i dati di base.
            </p>
          </div>
          <Field id="b-piano" title="Piano scelto">
            <select id="b-piano" value={f.piano} onChange={set("piano")} style={input}>
              <option value="">Seleziona</option>
              <option>Essenziale</option>
              <option>Crescita</option>
              <option>Pro</option>
            </select>
          </Field>
          <Field id="b-nome" title="Nome e cognome">
            <input id="b-nome" required value={f.nome} onChange={set("nome")} style={input} />
          </Field>
          <Field id="b-attivita" title="Nome dell'attività">
            <input id="b-attivita" required value={f.attivita} onChange={set("attivita")} placeholder="Es. Bar Centrale" style={input} />
          </Field>
          <Field id="b-settore" title="Settore">
            <select id="b-settore" value={f.settore} onChange={set("settore")} style={input}>
              <option value="">Seleziona</option>
              <option>Bar / caffetteria</option>
              <option>Ristorante / pizzeria</option>
              <option>Gelateria / pasticceria</option>
              <option>Negozio</option>
              <option>Estetica / parrucchiere</option>
              <option>Professionista</option>
              <option>Altro</option>
            </select>
          </Field>
          <Field id="b-citta" title="Città">
            <input id="b-citta" value={f.citta} onChange={set("citta")} style={input} />
          </Field>
          <Field id="b-ig" title="Instagram dell'attività" help="(se c'è)">
            <input id="b-ig" value={f.instagram} onChange={set("instagram")} placeholder="@tuaattivita" style={input} />
          </Field>
          <Field id="b-whatsapp" title="Il tuo WhatsApp">
            <input id="b-whatsapp" type="tel" required autoComplete="tel" inputMode="tel" value={f.whatsapp} onChange={set("whatsapp")} placeholder="+39 333 123 4567" style={input} />
          </Field>
          <Field id="b-email" title="Email usata per il pagamento" help="(facoltativa)">
            <input id="b-email" type="email" autoComplete="email" value={f.email} onChange={set("email")} style={input} />
          </Field>

          <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "12px" }}>
            <button type="submit" disabled={!pronto} style={{ minHeight: "56px", border: 0, borderRadius: "999px", background: pronto ? C.accent : "#D8C9AE", color: C.ink, fontSize: "16px", fontWeight: 800, cursor: pronto ? "pointer" : "not-allowed" }}>
              Invia e apri WhatsApp
            </button>
            <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.55, color: "#5A5E4C", textAlign: "center" }}>
              Si apre WhatsApp con i tuoi dati già scritti. Preferisci l&apos;email?{" "}
              <a href={mailto} style={{ color: "#8A4B32", fontWeight: 700 }}>Invia via email</a>. Leggi l&apos;
              <a href="/privacy/" style={{ color: "#8A4B32", fontWeight: 700 }}>informativa sulla privacy</a>.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
