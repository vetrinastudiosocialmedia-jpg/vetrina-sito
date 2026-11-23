import KitGrazie from "@/components/KitGrazie";

// Pagina di ringraziamento dopo il pagamento su Stripe: non deve comparire su Google.
export const metadata = {
  title: "Grazie per l'acquisto – Vetrina Studio",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <KitGrazie bump={true} />;
}
