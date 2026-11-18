import LegalLayout from "@/components/LegalLayout";
import { UMAMI_ID } from "@/lib/track";

export const metadata = { title: "Cookie policy – Vetrina Studio", description: "Quali cookie usa il sito vetrinastudiosocial.it di Vetrina Studio: nessun cookie di profilazione o di statistica, solo eventuali cookie tecnici.", alternates: { canonical: "https://vetrinastudiosocial.it/cookie/" } };

export default function Page() {
  return (
    <LegalLayout title="Cookie policy" updated="17 novembre 2026">
      <div className="box">
        <p>
          In breve:{" "}
          <strong>{UMAMI_ID ? "questo sito non usa cookie di profilazione e misura le visite senza cookie" : "questo sito non usa cookie di profilazione né strumenti di statistica"}</strong>
          . Per questo non ti mostriamo un banner per i cookie.
        </p>
      </div>
      <h2>1. Cosa sono i cookie</h2>
      <p>I cookie sono piccoli file di testo che un sito può salvare sul tuo dispositivo per farlo funzionare o per raccogliere informazioni sulla navigazione.</p>
      <h2>2. Cookie usati da questo sito</h2>
      <p>
        Il sito{" "}
        <strong>vetrinastudiosocial.it</strong>
        {" "}non installa cookie di profilazione, pubblicitari o di statistica. Possono essere usati solo eventuali cookie tecnici strettamente necessari al funzionamento del sito e della piattaforma di hosting (GitHub Pages), che non richiedono il tuo consenso.
      </p>
      <h2>3. Servizi di terze parti</h2>
      <ul>
        {UMAMI_ID ? (
          <li>
            <strong>Umami (statistiche anonime):</strong>
            {" "}conta le visite e i clic sui pulsanti principali senza usare cookie e senza salvare il tuo indirizzo IP né dati che ti identificano. I dati sono aggregati e servono solo a capire come migliorare il sito.
          </li>
        ) : null}
        <li>
          <strong>Link a WhatsApp e Instagram:</strong>
          {" "}se clicchi su questi link lasci il nostro sito e si applicano le informative di Meta.
        </li>
      </ul>
      <h2>4. Come gestire i cookie</h2>
      <p>Puoi bloccare o cancellare i cookie dalle impostazioni del tuo browser. Bloccare i cookie tecnici potrebbe impedire il corretto funzionamento di alcune parti del sito.</p>
      <h2>5. Titolare e contatti</h2>
      <p>
        Il titolare del trattamento è Leidiane Paula Lopes, che opera con il nome commerciale “Vetrina Studio”. Per domande scrivi a{" "}
        <a href="mailto:vetrina.studio.socialmedia@gmail.com">vetrina.studio.socialmedia@gmail.com</a>
        . Maggiori informazioni nella{" "}
        <a href="/privacy/">Privacy policy</a>
        .
      </p>
    </LegalLayout>
  );
}
