import Hero from "@/components/Hero";
import Servizi from "@/components/Servizi";
import Problema from "@/components/Problema";
import ComeFunziona from "@/components/ComeFunziona";
import Pacchetti from "@/components/Pacchetti";
import SitiWeb from "@/components/SitiWeb";
import Esempi from "@/components/Esempi";
import Faq from "@/components/Faq";
import Zone from "@/components/Zone";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { BlackFridayBar, BlackFridayBanner } from "@/components/BlackFriday";
import { jsonLd } from "@/lib/schema";

// Indirizzo ufficiale della home (evita duplicati per Google)
export const metadata = {
  alternates: { canonical: "https://vetrinastudiosocial.it/" },
  openGraph: {
    title: "Vetrina Studio – Agenzia Social Media online in tutta Italia",
    description: "Contenuti social pronti da pubblicare da €49 al mese, senza vincoli, e siti web su misura per attività locali.",
    url: "https://vetrinastudiosocial.it/",
    siteName: "Vetrina Studio",
    type: "website",
    locale: "it_IT",
    images: ["/img/site-desktop.jpg"],
  },
};

// La home page: l'ordine delle sezioni è quello in cui compaiono nel sito
export default function Home() {
  return (
    <>
    {/* Black Friday: barra fissa in alto (fuori dal contenitore, così resta visibile scorrendo) */}
    <BlackFridayBar />
    <div
      style={{
        width: "100%",
        background: "#1C2316",
        color: "#F3ECDD",
        fontFamily: "var(--font-manrope), 'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <main>
      <Hero />
      <BlackFridayBanner />
      {/* Prima il problema (Google, Instagram fermo, recensioni), poi cosa facciamo */}
      <Problema />
      <Servizi />
      <ComeFunziona />
      <Esempi />
      <Pacchetti />
      <SitiWeb />
      <Faq />
      <Zone />
      <Contatti />
      </main>
      <Footer />
      <WhatsAppFloat />
      {/* Dati strutturati per Google e per gli assistenti IA: chi siamo, servizi, prezzi, zone e FAQ (lib/schema.js) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </div>
    </>
  );
}
