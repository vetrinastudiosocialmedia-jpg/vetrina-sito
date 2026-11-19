import LegalLayout from "@/components/LegalLayout";
import { SITE, datiFiscali } from "@/lib/site";
import { UMAMI_ID } from "@/lib/track";

export const metadata = { title: "Privacy policy – Vetrina Studio", description: "Come Vetrina Studio tratta i dati personali di chi visita il sito vetrinastudiosocial.it o ci scrive via email e WhatsApp, secondo il GDPR.", alternates: { canonical: "https://vetrinastudiosocial.it/privacy/" } };

export default function Page() {
  return (
    <LegalLayout title="Privacy policy" updated="19 novembre 2026">
      <div className="box">
        <p>
          Questa informativa spiega come trattiamo i dati personali di chi visita il sito{" "}
          <strong>vetrinastudiosocial.it</strong>
          , ci scrive via email o su WhatsApp, ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (“GDPR”).
        </p>
      </div>
      <h2>1. Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento è {SITE.titolare}{datiFiscali(SITE)}, che opera con il nome commerciale “Vetrina Studio”. Per qualsiasi domanda sui tuoi dati puoi scrivere a{" "}
        <a href="mailto:vetrina.studio.socialmedia@gmail.com">vetrina.studio.socialmedia@gmail.com</a>
        .
      </p>
      <h2>2. Quali dati raccogliamo</h2>
      <ul>
        <li>
          <strong>Email e WhatsApp:</strong>
          {" "}il tuo indirizzo email o numero di telefono e il contenuto dei messaggi che ci invii.
        </li>
        <li>
          <strong>Clienti:</strong>
          {" "}i dati necessari a fornire il servizio e a gestire pagamenti e fatturazione, oltre ai materiali che ci invii (logo, foto, testi).
        </li>
        <li>
          <strong>Dati di navigazione:</strong>
          {" "}dati tecnici (ad esempio indirizzo IP, tipo di browser, data e ora della visita) raccolti automaticamente dal fornitore dell’hosting per il funzionamento e la sicurezza del sito.
        </li>
      </ul>
      <h2>3. Perché li trattiamo e su quale base</h2>
      <ul>
        <li>
          <strong>Rispondere alle tue richieste</strong>
          {" "}e inviarti informazioni o preventivi che ci chiedi: misure precontrattuali su tua richiesta (art. 6.1.b GDPR).
        </li>
        <li>
          <strong>Fornire i servizi acquistati</strong>
          {" "}e gestire il rapporto con i clienti: esecuzione del contratto (art. 6.1.b GDPR).
        </li>
        <li>
          <strong>Adempiere a obblighi di legge</strong>
          , ad esempio fiscali e contabili (art. 6.1.c GDPR).
        </li>
        <li>
          <strong>Garantire il funzionamento e la sicurezza del sito</strong>
          : legittimo interesse (art. 6.1.f GDPR).
        </li>
      </ul>
      <p>Non usiamo i tuoi dati per inviarti pubblicità senza il tuo consenso e non li vendiamo a nessuno. Non effettuiamo profilazione né decisioni automatizzate.</p>
      <h2>4. Conferimento dei dati</h2>
      <p>Fornire i dati è facoltativo, ma senza un recapito (email o numero WhatsApp) non possiamo rispondere alla tua richiesta.</p>
      <h2>5. Per quanto tempo li conserviamo</h2>
      <ul>
        <li>Richieste di informazioni che non diventano un rapporto di lavoro: fino a 12 mesi dall’ultimo contatto.</li>
        <li>Dati dei clienti: per tutta la durata del rapporto e, per i documenti fiscali e contabili, per il periodo previsto dalla legge (di norma 10 anni).</li>
      </ul>
      <h2>6. A chi comunichiamo i dati</h2>
      <p>I dati sono trattati dal titolare e da fornitori che ci aiutano a far funzionare il sito e il servizio, nominati, ove necessario, responsabili del trattamento:</p>
      <ul>
        <li>
          <strong>GitHub, Inc.</strong>
          {" "}– hosting del sito (GitHub Pages);
        </li>
        <li>
          <strong>Google</strong>
          {" "}– posta elettronica (Gmail);
        </li>
        <li>
          <strong>WhatsApp (Meta)</strong>
          {" "}– se scegli di scriverci su WhatsApp;
        </li>
        {UMAMI_ID ? <li><strong>Umami Software, Inc.</strong> – statistiche anonime delle visite, senza cookie e senza dati che ti identificano;</li> : null}
        <li><strong>Stripe Payments Europe, Ltd.</strong> – pagina di pagamento, gestione dei pagamenti e degli abbonamenti, solo per i clienti;</li>
        <li><strong>PayPal (Europe) S.à r.l. et Cie, S.C.A.</strong> e <strong>Satispay Europe S.A.</strong> – solo se scegli di pagare con questi metodi;</li>
        <li>eventuali consulenti fiscali, solo per i clienti e solo per quanto necessario.</li>
      </ul>
      <p>Alcuni di questi fornitori possono trattare dati fuori dall’Unione Europea, in particolare negli Stati Uniti. In questi casi il trasferimento avviene sulla base di garanzie previste dal GDPR, come la decisione di adeguatezza UE-USA (Data Privacy Framework) o le clausole contrattuali standard della Commissione Europea.</p>
      <h2>7. I tuoi diritti</h2>
      <p>
        In qualsiasi momento puoi chiedere di accedere ai tuoi dati, correggerli, cancellarli, limitarne il trattamento, opporti al trattamento o riceverli in un formato leggibile (portabilità). Basta scrivere a{" "}
        <a href="mailto:vetrina.studio.socialmedia@gmail.com">vetrina.studio.socialmedia@gmail.com</a>
        : rispondiamo entro 30 giorni.
      </p>
      <p>
        Se ritieni che i tuoi dati siano trattati in modo non corretto, puoi presentare un reclamo al Garante per la protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" rel="noopener">www.garanteprivacy.it</a>
        ).
      </p>
      <h2>8. Cookie</h2>
      <p>
        Per le informazioni sui cookie consulta la{" "}
        <a href="/cookie/">Cookie policy</a>
        .
      </p>
      <h2>9. Modifiche</h2>
      <p>Potremmo aggiornare questa informativa. La versione in vigore è sempre quella pubblicata su questa pagina, con la data dell’ultimo aggiornamento.</p>
    </LegalLayout>
  );
}
