"use client";

import { hasPaypal, paypalLink } from "@/lib/site";

// Pulsante di un piano: apre l'abbonamento PayPal in una nuova scheda
// e porta questa pagina al modulo di benvenuto, così il cliente lo trova
// subito dopo aver pagato.
export default function PlanButton({ plan, className, style, children }) {
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
