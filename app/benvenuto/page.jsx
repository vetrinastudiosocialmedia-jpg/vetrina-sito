import Benvenuto from "@/components/Benvenuto";

export const metadata = {
  title: "Benvenuto – Vetrina Studio",
  robots: { index: false, follow: false },
};

// Pagina di benvenuto dopo l'attivazione di un piano (non compare nel menu)
export default function Page() {
  return <Benvenuto />;
}
