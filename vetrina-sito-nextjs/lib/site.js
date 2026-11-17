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
