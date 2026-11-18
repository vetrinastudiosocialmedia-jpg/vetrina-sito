// Statistiche anonime con Umami (senza cookie).
// Si accende solo se è impostato NEXT_PUBLIC_UMAMI_WEBSITE_ID.
export const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "";

// Attributi per misurare il clic su un link: <a {...ev("WhatsApp", { origine: "float" })}>
export function ev(name, data = {}) {
  if (!UMAMI_ID) return {};
  const props = { "data-umami-event": name };
  for (const [k, v] of Object.entries(data)) props[`data-umami-event-${k}`] = String(v);
  return props;
}

// Registra un evento dal codice (aspetta che lo script di Umami sia caricato).
export function track(name, data, tries = 0) {
  if (!UMAMI_ID || typeof window === "undefined") return;
  if (window.umami && typeof window.umami.track === "function") {
    window.umami.track(name, data);
  } else if (tries < 20) {
    setTimeout(() => track(name, data, tries + 1), 250);
  }
}
