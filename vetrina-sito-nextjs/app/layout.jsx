import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

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
  title: "Vetrina Studio – Agenzia Social Media e Siti Web",
  description:
    "Post, caroselli, Reels e siti web per la tua attività. Vetrina Studio, agenzia social media in Italia.",
  openGraph: {
    title: "Vetrina Studio – Agenzia Social Media",
    description:
      "Il tuo negozio merita una vetrina anche online. Contenuti social pronti da pubblicare e siti web su misura.",
    type: "website",
    locale: "it_IT",
    images: ["/img/site-desktop.jpg"],
  },
  icons: { icon: "/img/favicon.png", apple: "/img/favicon.png" },
};

export const viewport = { themeColor: "#1C2316" };

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
