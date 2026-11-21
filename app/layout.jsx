import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { UMAMI_ID } from "@/lib/track";
import Consenso from "@/components/Consenso";

// I caratteri vengono scaricati durante la build e serviti dal sito stesso
// (nessuna richiesta ai server di Google da parte dei visitatori).
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vetrinastudiosocial.it"),
  title: "Agenzia Social Media online in tutta Italia | Vetrina Studio",
  description:
    "Post, Reels e calendario pronti ogni mese per bar, ristoranti e negozi in tutta Italia. Piani da €49 al mese, senza vincoli, tutto online.",
  openGraph: {
    title: "Vetrina Studio – Agenzia Social Media online in tutta Italia",
    description:
      "Contenuti social pronti da pubblicare da €49 al mese, senza vincoli, e siti web su misura per attività locali.",
    siteName: "Vetrina Studio",
    type: "website",
    locale: "it_IT",
    images: ["/img/site-desktop.jpg"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/img/favicon.png", apple: "/img/favicon.png" },
  // Verifica del dominio su Meta (Gestione aziendale → Sicurezza del brand → Domini). Non è una password.
  other: { "facebook-domain-verification": "vf8js6sgj0hd4af44vxwrxyezjoato" },
};

export const viewport = { themeColor: "#1C2316" };

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        {UMAMI_ID ? (
          <script defer src="https://cloud.umami.is/script.js" data-website-id={UMAMI_ID} data-domains="vetrinastudiosocial.it" />
        ) : null}
      </head>
      <body>
        {children}
        {/* Banner cookie + Meta Pixel (parte solo dopo "Accetta") */}
        <Consenso />
      </body>
    </html>
  );
}
