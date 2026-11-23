import KitNatale from "@/components/KitNatale";

export const metadata = {
  title: "Kit Natale per bar e ristoranti | Vetrina Studio",
  description: "20 post e 10 Stories di Natale per bar e ristoranti, pronti in Canva con didascalie e calendario dal 1° dicembre al 6 gennaio. €14,90, consegna immediata.",
  alternates: { canonical: "https://vetrinastudiosocial.it/kit-natale/" },
  openGraph: {
    title: "Kit Natale per bar e ristoranti – Vetrina Studio",
    description: "20 post e 10 Stories di Natale pronti in Canva, con didascalie e calendario. €14,90, consegna immediata.",
    url: "https://vetrinastudiosocial.it/kit-natale/",
    siteName: "Vetrina Studio",
    type: "website",
    locale: "it_IT",
    images: ["/img/site-desktop.jpg"],
  },
};

export default function Page() {
  return <KitNatale />;
}
