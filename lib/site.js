// Dati di contatto usati in tutto il sito: cambiali qui e si aggiornano ovunque.
export const SITE = {
  name: "Vetrina Studio",
  domain: "vetrinastudiosocial.it",
  url: "https://vetrinastudiosocial.it",
  email: "vetrina.studio.socialmedia@gmail.com",
  instagram: "https://www.instagram.com/vetrina.studio.socialmedia/",
  whatsapp: "393513472552", // numero con prefisso internazionale, senza + e senza spazi
};

// Crea un link WhatsApp con un messaggio già scritto
export function waLink(text) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Piani di abbonamento PayPal (conto Vetrina Studio Social Media)
export const PAYPAL_PLANS = {
  essenziale: "P-6YE892749P452543HNL6HDZY", // €49/mese
  crescita: "P-2DA74021MH0748828NL6HEUQ", // €89/mese
  pro: "P-7AT64696JL0717258NL6HFIQ", // €99/mese
};

// Link alla pagina di abbonamento PayPal di un piano
export function paypalLink(plan) {
  return `https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=${PAYPAL_PLANS[plan]}`;
}
