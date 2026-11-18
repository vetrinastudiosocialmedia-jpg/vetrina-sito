"use client";

import { useEffect } from "react";
import { track, UMAMI_ID } from "@/lib/track";

// Registra una volta per visita quando le sezioni Esempi e Pacchetti diventano visibili.
const SEZIONI = [
  ["esempi", "Vista Esempi"],
  ["pacchetti", "Vista Pacchetti"],
];

export default function Tracking() {
  useEffect(() => {
    if (!UMAMI_ID || typeof IntersectionObserver === "undefined") return;
    const visti = new Set();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const nome = e.target.dataset.trackView;
          if (visti.has(nome)) continue;
          visti.add(nome);
          track(nome);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.3 }
    );
    for (const [id, nome] of SEZIONI) {
      const el = document.getElementById(id);
      if (el) {
        el.dataset.trackView = nome;
        obs.observe(el);
      }
    }
    return () => obs.disconnect();
  }, []);
  return null;
}
