"use client";

import { hasPaypal, hasStripe, paypalLink, stripeLink } from "@/lib/site";

// Pulsante di un piano.
// - Con Stripe: porta al checkout nella stessa scheda; dopo il pagamento
//   Stripe rimanda il cliente al modulo di benvenuto.
// - Solo PayPal: apre l'abbonamento in una nuova scheda e porta questa
//   pagina al modulo di benvenuto.
// - Nessuno dei due: apre WhatsApp.
export default function PlanButton({ plan, className, style, children }) {
  if (hasStripe(plan)) {
    return (
      <a href={stripeLink(plan)} className={className} style={style}>
        {children}
      </a>
    );
  }

  function handleClick() {
    if (!hasPaypal(plan)) return;
    setTimeout(() => {
      window.location.href = `/benvenuto/?piano=${plan}`;
    }, 300);
  }

  return (
    <a
      href={paypalLink(plan)}
      target="_blank"
      rel="noopener"
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
