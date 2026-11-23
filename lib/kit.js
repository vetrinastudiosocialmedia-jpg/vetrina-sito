// Kit digitali (prodotti a prezzo basso, consegna immediata).
// I link di pagamento Stripe non sono segreti: compaiono comunque nella pagina di vendita.
// I link "Usa il modello" di Canva invece stanno SOLO nelle pagine di ringraziamento,
// che hanno un indirizzo difficile da indovinare e non sono indicizzate da Google.

// Periodo di vendita del Kit Natale (ora di Roma = UTC+1 in dicembre)
export const INIZIO_KIT_NATALE = Date.UTC(2026, 10, 30, 23, 0, 0); // 01/12/2026 00:00
export const FINE_KIT_NATALE = Date.UTC(2026, 11, 18, 23, 0, 0); // 19/12/2026 00:00 (si vende fino al 18/12 compreso)

export const KIT_NATALE = {
  prezzo: "€14,90",
  prezzoBump: "€9",
  prezzoRecensioni: "€19",
  totaleConBump: "€23,90",
  // Link di pagamento Stripe: solo Kit Natale / Kit Natale + Kit Recensioni (order bump)
  link: "https://buy.stripe.com/dRmcN72ng56C2Mu12j7EQ03?locale=it",
  linkBump: "https://buy.stripe.com/eVqfZj7HAeHcgDkaCT7EQ04?locale=it",
  // Pagine di ringraziamento (devono coincidere con il redirect impostato sui link Stripe)
  grazie: "/kit-natale/grazie-a3cfe341/",
  grazieBump: "/kit-natale/grazie-6796cf04/",
  // Link "Usa il modello" di Canva: da inserire quando i kit sono pronti.
  // Finché sono vuoti, la pagina di ringraziamento dice che il link arriva su WhatsApp/email.
  canvaNatale: "",
  canvaRecensioni: "",
};

// Codice sconto per chi ha comprato il kit: €14,90 di sconto sul primo mese di un piano (fino al 31/01/2027)
export const CODICE_KIT = "KITNATALE";

export function kitInVendita(ora = Date.now()) {
  return ora >= INIZIO_KIT_NATALE && ora < FINE_KIT_NATALE;
}
