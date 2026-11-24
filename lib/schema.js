import { SITE, CITTA } from "@/lib/site";
import { FAQ } from "@/lib/faq";

// Dati strutturati (schema.org, formato JSON-LD) letti da Google, Bing e dagli assistenti IA.
// Prezzi, comuni e FAQ arrivano dagli stessi file usati dal sito, così restano sempre allineati.

export const ORG_ID = `${SITE.url}/#organizzazione`;

// Prezzo mensile di un piano
function mensile(nome, descrizione, prezzo, servizio = `Piano social ${nome}`) {
  return {
    "@type": "Offer",
    name: nome,
    description: descrizione,
    price: prezzo,
    priceCurrency: "EUR",
    priceSpecification: { "@type": "UnitPriceSpecification", price: prezzo, priceCurrency: "EUR", unitCode: "MON", unitText: "mese" },
    url: `${SITE.url}/#pacchetti`,
    itemOffered: { "@type": "Service", name: servizio, provider: { "@id": ORG_ID } },
  };
}

// Prezzo una tantum
function unaTantum(nome, descrizione, prezzo, ancora) {
  return {
    "@type": "Offer",
    name: nome,
    description: descrizione,
    price: prezzo,
    priceCurrency: "EUR",
    url: `${SITE.url}/#${ancora}`,
    itemOffered: { "@type": "Service", name: nome, provider: { "@id": ORG_ID } },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      alternateName: "Vetrina Studio – Agenzia Social Media",
      url: `${SITE.url}/`,
      logo: `${SITE.url}/img/logo-completo.png`,
      image: `${SITE.url}/img/site-desktop.jpg`,
      description:
        "Agenzia social media e siti web per attività locali (bar, ristoranti, gelaterie, centri estetici, negozi) in tutta Italia, con base tra Modena e Bologna. Post, Reels e calendario pronti da pubblicare ogni mese per farsi trovare e scegliere su Instagram, Google e WhatsApp, tutto online, da €49 al mese senza vincoli.",
      email: SITE.email,
      telephone: SITE.telefono,
      sameAs: [SITE.instagram],
      publishingPrinciples: `${SITE.url}/chi-siamo/#contenuti`,
      ...(SITE.piva ? { vatID: `IT${SITE.piva}` } : {}),
      areaServed: [
        { "@type": "Country", name: "Italia" },
        ...CITTA.map((c) => ({ "@type": "City", name: c })),
      ],
      knowsAbout: ["Social media marketing", "Instagram", "Facebook", "Reels", "Recensioni Google", "Google Business Profile", "WhatsApp Business", "Siti web per attività locali"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.telefono,
        email: SITE.email,
        availableLanguage: ["Italian"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Piani social e siti web",
        itemListElement: [
          mensile("Essenziale", "6 post al mese con grafica, testo e hashtag, calendario con giorno e ora, foto migliorate. Prezzo di lancio, normale €99/mese.", 49),
          mensile("Crescita", "8 post e 1 Reel montato al mese, calendario, foto migliorate. Prezzo di lancio, normale €179/mese.", 89),
          mensile("Pro", "12 post, 2 Reel montati e 8 Stories al mese, calendario, promemoria WhatsApp il giorno in cui pubblicare. Prezzo di lancio, normale €199/mese.", 99),
          unaTantum("Sito Vetrina", "Sito a pagina unica ottimizzato per smartphone: menu o servizi, orari, mappa, foto, pulsante WhatsApp. Pronto in 7 giorni. Prezzo di lancio a partire da €290, normale €490; siti con più pagine su preventivo.", 290, "siti-web"),
          mensile("Manutenzione e hosting del sito", "Hosting e 2 aggiornamenti al mese. Prezzo di lancio, normale €15/mese.", 9, "Manutenzione e hosting del sito"),
          unaTantum("Restyling del profilo", "Nuova bio, copertine in evidenza e immagine profilo.", 29, "pacchetti"),
          unaTantum("Reel extra", "Un Reel montato in più.", 20, "pacchetti"),
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#sito`,
      url: `${SITE.url}/`,
      name: SITE.name,
      inLanguage: "it-IT",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      inLanguage: "it-IT",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};
