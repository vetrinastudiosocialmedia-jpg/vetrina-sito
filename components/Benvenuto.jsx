"use client";

import { useEffect, useState } from "react";
import { SITE, waLink } from "@/lib/site";

// Modulo di benvenuto: il cliente racconta la sua attività dopo aver attivato il piano.
// Le risposte vengono inviate su WhatsApp (o via email) come messaggio già scritto.

const PIANI = { essenziale: "Essenziale", crescita: "Crescita", pro: "Pro" };
const STILI = ["Elegante", "Moderno", "Colorato", "Minimal", "Rustico / tradizionale", "Giovane e divertente"];

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
    email: "",
    offerta: "",
    clienti: "",
    stili: [],
    colori: "",
    comunicare: "",
    orari: "",
    evitare: "",
  });
  const [inviato, setInviato] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("piano");
    if (p && PIANI[p]) setF((v) => ({ ...v, piano: PIANI[p] }));
  }, []);

  useEffect(() => {
    if (inviato) document.getElementById("grazie")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [inviato]);

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const toggleStile = (s) =>
    setF({ ...f, stili: f.stili.includes(s) ? f.stili.filter((x) => x !== s) : [...f.stili, s] });

  const righe = [
    "Ciao Vetrina Studio! Ecco il modulo di benvenuto.",
    "",
    `Piano: ${f.piano || "-"}`,
    `Nome: ${f.nome}`,
    `Attività: ${f.attivita}`,
    `Settore: ${f.settore || "-"}`,
    `Città: ${f.citta || "-"}`,
    `Instagram: ${f.instagram || "-"}`,
    `Email usata per PayPal: ${f.email || "-"}`,
    "",
    `Cosa offriamo: ${f.offerta || "-"}`,
    `Clienti ideali: ${f.clienti || "-"}`,
    `Stile preferito: ${f.stili.length ? f.stili.join(", ") : "-"}`,
    `Colori del brand: ${f.colori || "-"}`,
    `Cosa vogliamo comunicare: ${f.comunicare || "-"}`,
    `Giorni e orari: ${f.orari || "-"}`,
    `Da evitare: ${f.evitare || "-"}`,
    "",
    "Vi mando qui sotto il logo e le foto.",
  ];
  const testo = righe.join("\n");
  const pronto = f.nome.trim() && f.attivita.trim();

  function invia(e) {
    e.preventDefault();
    if (!pronto) return;
    setInviato(true);
    window.open(waLink(testo), "_blank", "noopener");
  }

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    `Modulo di benvenuto – ${f.attivita || "nuovo cliente"}`
  )}&body=${encodeURIComponent(testo.replace("Vi mando qui sotto il logo e le foto.", "Allego il logo e le foto."))}`;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.ink, fontFamily: sans }}>
      <header style={{ background: C.dark, padding: "18px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href="/" aria-label="Vetrina Studio, torna al sito">
            <img src="/img/logo-vetrina.png" alt="Vetrina Studio" style={{ display: "block", height: "52px", width: "auto" }} />
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
          Se hai appena scelto un piano, completa il pagamento nella finestra di PayPal che si è aperta. Poi compila questo modulo: ci serve per preparare i tuoi contenuti.
        </p>

        <ol style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "12px" }}>
          {[
            ["1", "Pagamento su PayPal", "Nella finestra che si è aperta."],
            ["2", "Questo modulo", "Circa 5 minuti."],
            ["3", "Logo e foto", "Su WhatsApp, dopo l'invio."],
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
              Grazie! Ultimo passo.
            </h2>
            <p style={{ margin: "14px 0 0", fontSize: "16.5px", lineHeight: 1.65, color: "#D9D2BE" }}>
              Si è aperto WhatsApp con il modulo già scritto: invialo e, nella stessa chat, mandaci il <strong style={{ color: "#F3ECDD" }}>logo</strong> e almeno <strong style={{ color: "#F3ECDD" }}>10 foto</strong> della tua attività (vanno bene anche fatte col telefono).
            </p>
            <p style={{ margin: "14px 0 0", fontSize: "16.5px", lineHeight: 1.65, color: "#D9D2BE" }}>
              Entro il 25 del mese riceverai il calendario dei contenuti da approvare.
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
          <div style={{ gridColumn: "1 / -1" }}>
            <Field id="b-email" title="Email usata per pagare su PayPal" help="(così colleghiamo il pagamento a te)">
              <input id="b-email" type="email" value={f.email} onChange={set("email")} style={input} />
            </Field>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <Field id="b-offerta" title="Cosa vendi o offri?" help="(prodotti, servizi, piatti forti…)">
              <textarea id="b-offerta" rows={3} value={f.offerta} onChange={set("offerta")} style={{ ...input, resize: "vertical" }} />
            </Field>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <Field id="b-clienti" title="Chi sono i tuoi clienti ideali?">
              <textarea id="b-clienti" rows={2} value={f.clienti} onChange={set("clienti")} style={{ ...input, resize: "vertical" }} />
            </Field>
          </div>
          <fieldset style={{ gridColumn: "1 / -1", border: 0, padding: 0, margin: 0 }}>
            <legend style={{ ...label, marginBottom: "10px" }}>Che stile ti piace?</legend>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {STILI.map((s) => {
                const on = f.stili.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleStile(s)}
                    style={{ minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: `1px solid ${on ? C.ink : C.line}`, background: on ? C.ink : "#FFFFFF", color: on ? "#F3ECDD" : C.ink, fontSize: "14.5px", fontWeight: 600, cursor: "pointer" }}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </fieldset>
          <Field id="b-colori" title="Colori del brand" help="(se ci sono)">
            <input id="b-colori" value={f.colori} onChange={set("colori")} placeholder="Es. verde e oro" style={input} />
          </Field>
          <Field id="b-orari" title="Giorni e orari di apertura">
            <input id="b-orari" value={f.orari} onChange={set("orari")} style={input} />
          </Field>
          <div style={{ gridColumn: "1 / -1" }}>
            <Field id="b-comunicare" title="Cosa vuoi comunicare questo mese?" help="(offerte, novità, eventi…)">
              <textarea id="b-comunicare" rows={3} value={f.comunicare} onChange={set("comunicare")} style={{ ...input, resize: "vertical" }} />
            </Field>
          </div>
          <div style={{ gridColumn: "1 / -1" }}>
            <Field id="b-evitare" title="C'è qualcosa da evitare?" help="(facoltativo)">
              <input id="b-evitare" value={f.evitare} onChange={set("evitare")} style={input} />
            </Field>
          </div>

          <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "12px" }}>
            <button type="submit" disabled={!pronto} style={{ minHeight: "56px", border: 0, borderRadius: "999px", background: pronto ? C.accent : "#D8C9AE", color: C.ink, fontSize: "16px", fontWeight: 800, cursor: pronto ? "pointer" : "not-allowed" }}>
              Invia su WhatsApp
            </button>
            <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.55, color: "#5A5E4C", textAlign: "center" }}>
              Si apre WhatsApp con il modulo già scritto. Preferisci l&apos;email?{" "}
              <a href={mailto} style={{ color: "#8A4B32", fontWeight: 700 }}>Invia via email</a>. Leggi l&apos;
              <a href="/privacy/" style={{ color: "#8A4B32", fontWeight: 700 }}>informativa sulla privacy</a>.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
