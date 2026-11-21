// Dati di contatto usati in tutto il sito: cambiali qui e si aggiornano ovunque.
export const SITE = {
  name: "Vetrina Studio",
  domain: "vetrinastudiosocial.it",
  url: "https://vetrinastudiosocial.it",
  email: "vetrina.studio.socialmedia@gmail.com",
  instagram: "https://www.instagram.com/vetrina.studio.socialmedia/",
  whatsapp: "393513472552", // numero con prefisso internazionale, senza + e senza spazi
  telefono: "+39 351 347 2552",
  titolare: "Marcus Tulio Moreira Teodoro",
  // Dati fiscali del titolare: compaiono nel piè di pagina e nelle pagine legali.
  // Se c'è la Partita IVA si mostra quella (obbligatoria per legge); altrimenti il codice fiscale.
  piva: "",
  codiceFiscale: "MRRMCS90L01Z602S",
};

// Comuni serviti: compaiono nella sezione "Dove lavoriamo", nel piè di pagina
// e nei dati per Google e per gli assistenti IA.
export const CITTA = [
  "Modena",
  "Bologna",
  "Carpi",
  "Sassuolo",
  "Formigine",
  "Castelfranco Emilia",
  "Nonantola",
  "Mirandola",
  "Finale Emilia",
  "San Giovanni in Persiceto",
  "Crevalcore",
  "Sant'Agata Bolognese",
  "Cento",
  "Casalecchio di Reno",
];

// Crea un link WhatsApp con un messaggio già scritto
export function waLink(text) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Piani di abbonamento PayPal: i codici NON stanno nel codice.
// Vengono letti dalle variabili d'ambiente (file .env.local sul computer,
// "Secrets" del repository su GitHub). Vedi .env.example.
export const PAYPAL_PLANS = {
  essenziale: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ESSENZIALE || "", // €49/mese
  crescita: process.env.NEXT_PUBLIC_PAYPAL_PLAN_CRESCITA || "", // €89/mese
  pro: process.env.NEXT_PUBLIC_PAYPAL_PLAN_PRO || "", // €99/mese
};

// Link di pagamento Stripe (checkout con carta, PayPal, Satispay...).
// Hanno la precedenza su PayPal quando sono impostati.
export const STRIPE_LINKS = {
  essenziale: process.env.NEXT_PUBLIC_STRIPE_LINK_ESSENZIALE || "",
  crescita: process.env.NEXT_PUBLIC_STRIPE_LINK_CRESCITA || "",
  pro: process.env.NEXT_PUBLIC_STRIPE_LINK_PRO || "",
};
export function hasStripe(plan){ return Boolean(STRIPE_LINKS[plan]); }
// Meta Pixel (pubblicità su Facebook e Instagram). Non è una password: è visibile nel codice di ogni sito che lo usa.
// Il pixel parte SOLO dopo che il visitatore clicca "Accetta" nel banner dei cookie (components/Consenso.jsx).
// Lascia vuoto ("") per spegnere pixel e banner.
export const META_PIXEL_ID = "1757431035348741";

// Black Friday 2026: fino al 30/11 alle 23:59 (ora di Roma) i pulsanti dei pacchetti
// applicano da soli il codice BLACKFRIDAY (-20% sul primo mese, creato su Stripe).
// Dopo la scadenza il codice non viene più aggiunto (e la pagina lo toglie anche dai link già pubblicati).
export const FINE_BLACK_FRIDAY = Date.UTC(2026, 10, 30, 23, 0, 0); // 01/12/2026 00:00 ora di Roma (UTC+1)
export const CODICE_BLACK_FRIDAY = "BLACKFRIDAY";

export function stripeLink(plan){
  const url = STRIPE_LINKS[plan];
  let link = url + (url.includes("?") ? "&" : "?") + "locale=it";
  if (Date.now() < FINE_BLACK_FRIDAY) link += "&prefilled_promo_code=" + CODICE_BLACK_FRIDAY;
  return link;
}

const PLAN_NAMES = { essenziale: "Essenziale", crescita: "Crescita", pro: "Pro" };

// Link alla pagina di abbonamento PayPal di un piano.
// Se il codice del piano manca, il pulsante porta a WhatsApp.
export function paypalLink(plan) {
  const id = PAYPAL_PLANS[plan];
  if (!id) return waLink(`Ciao! Vorrei attivare il piano ${PLAN_NAMES[plan] || ""}.`);
  return `https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=${id}`;
}

export function hasPaypal(plan) {
  return Boolean(PAYPAL_PLANS[plan]);
}

// " (P.IVA ...)" o " (C.F. ...)" accanto al nome del titolare nelle pagine legali
export function datiFiscali(site) {
  if (site.piva) return ` (P.IVA ${site.piva})`;
  if (site.codiceFiscale) return ` (C.F. ${site.codiceFiscale})`;
  return "";
}
