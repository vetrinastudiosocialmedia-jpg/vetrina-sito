import Hero from "@/components/Hero";
import Servizi from "@/components/Servizi";
import Problema from "@/components/Problema";
import ComeFunziona from "@/components/ComeFunziona";
import Pacchetti from "@/components/Pacchetti";
import SitiWeb from "@/components/SitiWeb";
import Portfolio from "@/components/Portfolio";
import Faq from "@/components/Faq";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// La home page: l'ordine delle sezioni è quello in cui compaiono nel sito
export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        background: "#1C2316",
        color: "#F3ECDD",
        fontFamily: "var(--font-manrope), 'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <Hero />
      <Servizi />
      <Problema />
      <ComeFunziona />
      <Pacchetti />
      <SitiWeb />
      <Portfolio />
      <Faq />
      <Contatti />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
