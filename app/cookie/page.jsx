import LegalLayout from "@/components/LegalLayout";
import { SITE, datiFiscali, META_PIXEL_ID } from "@/lib/site";
import { UMAMI_ID } from "@/lib/track";

export const metadata = {
  title: "Cookie policy – Vetrina Studio",
  description: META_PIXEL_ID
    ? "Quali cookie usa il sito vetrinastudiosocial.it di Vetrina Studio: cookie tecnici e, solo con il tuo consenso, il pixel di Meta."
    : "Quali cookie usa il sito vetrinastudiosocial.it di Vetrina Studio: nessun cookie di profilazione o di statistica, solo eventuali cookie tecnici.",
  alternates: { canonical: "https://vetrinastudiosocial.it/cookie/" },
};

export default function Page() {
  return (
    <LegalLayout title="Cookie policy" updated={META_PIXEL_ID ? "21 novembre 2026" : "19 novembre 2026"}>
      <div className="box">
        {META_PIXEL_ID ? (
          <p>
            In breve:{" "}
            <strong>usiamo un solo strumento di terze parti che può installare cookie, il pixel di Meta, e lo attiviamo solo se lo accetti</strong>
            {" "}dal banner che compare alla prima visita. {UMAMI_ID ? "Le statistiche delle visite sono anonime e senza cookie." : ""}
          </p>
        ) : (
          <p>
            In breve:{" "}
            <strong>{UMAMI_ID ? "questo sito non usa cookie di profilazione e misura le visite senza cookie" : "questo sito non usa cookie di profilazione né strumenti di statistica"}</strong>
            . Per questo non ti mostriamo un banner per i cookie.
          </p>
        )}
      </div>
      <h2>1. Cosa sono i cookie</h2>
      <p>I cookie sono piccoli file di testo che un sito può salvare sul tuo dispositivo per farlo funzionare o per raccogliere informazioni sulla navigazione. Strumenti simili (come il “local storage” del browser) funzionano allo stesso modo e seguono le stesse regole.</p>
      <h2>2. Cookie tecnici</h2>
      <p>
        Il sito{" "}
        <strong>vetrinastudiosocial.it</strong>
        {" "}usa solo eventuali cookie tecnici strettamente necessari al funzionamento del sito e della piattaforma di hosting (GitHub Pages), che non richiedono il tuo consenso.
        {META_PIXEL_ID ? " Inoltre salviamo nel tuo browser la scelta che fai nel banner (voce “vs-consenso”, per 6 mesi), così non te la chiediamo a ogni pagina." : ""}
      </p>
      {META_PIXEL_ID ? (
        <>
          <h2>3. Pixel di Meta (solo con il tuo consenso)</h2>
          <p>
            Se clicchi <strong>“Accetta”</strong> nel banner, attiviamo il pixel di <strong>Meta Platforms Ireland Ltd.</strong> (Facebook e Instagram). Serve a misurare i risultati delle nostre pubblicità (per esempio quante persone arrivano da un’inserzione e scelgono un pacchetto) e a mostrare le nostre inserzioni a chi ha già visitato il sito.
          </p>
          <ul>
            <li><strong>Cosa raccoglie:</strong> le pagine visitate, i clic su WhatsApp e sui pacchetti, l’eventuale attivazione di un piano, insieme a dati tecnici del dispositivo e del browser e a identificativi online.</li>
            <li><strong>Cookie installati:</strong> “_fbp” (fino a 90 giorni) e, se arrivi da un’inserzione, “_fbc” (fino a 90 giorni).</li>
            <li><strong>Base giuridica:</strong> il tuo consenso (art. 6.1.a GDPR), che puoi revocare in qualsiasi momento.</li>
            <li><strong>Ruoli:</strong> per la raccolta e la trasmissione dei dati tramite il pixel, Vetrina Studio e Meta Platforms Ireland Ltd. sono contitolari del trattamento; per gli usi successivi Meta è titolare autonomo. Meta può trasferire dati negli Stati Uniti sulla base del Data Privacy Framework UE-USA.</li>
            <li>
              <strong>Informativa di Meta:</strong>{" "}
              <a href="https://www.facebook.com/privacy/policy/" rel="noopener">facebook.com/privacy/policy</a>
            </li>
          </ul>
          <p>Se clicchi <strong>“Rifiuta”</strong>, o se non scegli, il pixel non viene caricato e il sito funziona esattamente allo stesso modo.</p>
        </>
      ) : null}
      <h2>{META_PIXEL_ID ? "4" : "3"}. Servizi di terze parti</h2>
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
      <h2 id="preferenze">{META_PIXEL_ID ? "5" : "4"}. Come gestire i cookie</h2>
      {META_PIXEL_ID ? (
        <p>
          Puoi cambiare idea quando vuoi:{" "}
          <a href="/cookie/#preferenze" data-vs-cookie="">apri le preferenze cookie</a>
          {" "}e scegli di nuovo. Se revochi il consenso, il pixel smette di funzionare e cancelliamo i suoi cookie dal tuo browser.
        </p>
      ) : null}
      <p>Puoi anche bloccare o cancellare i cookie dalle impostazioni del tuo browser. Bloccare i cookie tecnici potrebbe impedire il corretto funzionamento di alcune parti del sito.</p>
      <h2>{META_PIXEL_ID ? "6" : "5"}. Titolare e contatti</h2>
      <p>
        Il titolare del trattamento è {SITE.titolare}{datiFiscali(SITE)}, che opera con il nome commerciale “Vetrina Studio”. Per domande scrivi a{" "}
        <a href="mailto:vetrina.studio.socialmedia@gmail.com">vetrina.studio.socialmedia@gmail.com</a>
        . Maggiori informazioni nella{" "}
        <a href="/privacy/">Privacy policy</a>
        .
      </p>
    </LegalLayout>
  );
}
