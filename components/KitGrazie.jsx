import Footer from "@/components/Footer";
import { waLink, STRIPE_LINKS } from "@/lib/site";
import { ev } from "@/lib/track";
import { KIT_NATALE as K, CODICE_KIT } from "@/lib/kit";

// Pagina di ringraziamento dopo l'acquisto del Kit Natale (con o senza Kit Recensioni).
// Indirizzo difficile da indovinare + noindex: qui ci sono i link ai modelli Canva.

function linkPiano(plan) {
  const url = STRIPE_LINKS[plan];
  if (!url) return "/#pacchetti";
  return `${url}${url.includes("?") ? "&" : "?"}locale=it&prefilled_promo_code=${CODICE_KIT}`;
}

const PIANI = [
  ["essenziale", "Essenziale", "€49", "€34,10"],
  ["crescita", "Crescita", "€89", "€74,10"],
  ["pro", "Pro", "€99", "€84,10"],
];

function Kit({ titolo, link, nome }) {
  if (link) {
    return (
      <a className="vs-btn kit-btn kit-btn-dl" href={link} target="_blank" rel="noopener" {...ev("Apri kit", { kit: nome })}>
        {titolo}
      </a>
    );
  }
  return (
    <p className="kit-attesa">
      <strong>{titolo}:</strong> ti mandiamo il link entro poche ore all'email che hai usato per pagare. Se hai fretta, scrivici su{" "}
      <a href={waLink(`Ciao! Ho appena comprato il ${nome} e vorrei il link.`)}>WhatsApp</a>.
    </p>
  );
}

export default function KitGrazie({ bump = false }) {
  return (
    <>
      <div className="kit">
        <header className="kit-head">
          <a href="/" aria-label="Vetrina Studio, vai al sito">
            <img src="/img/logo-vetrina.webp" srcSet="/img/logo-vetrina-240.webp 240w, /img/logo-vetrina.webp 400w" sizes="172px" width="400" height="107" alt="Vetrina Studio" />
          </a>
        </header>
        <main>
          <section className="kit-hero">
            <div className="kit-eyebrow">Pagamento ricevuto</div>
            <h1>Grazie! {bump ? <>I tuoi kit sono <em>pronti</em>.</> : <>Il tuo Kit Natale è <em>pronto</em>.</>}</h1>
            <p className="kit-sub">Salva questa pagina tra i preferiti: qui trovi sempre i link. Ti è arrivata anche la ricevuta via email.</p>
            <div className="kit-dl">
              <Kit titolo="Apri il Kit Natale in Canva" link={K.canvaNatale} nome="Kit Natale" />
              {bump ? <Kit titolo="Apri il Kit Recensioni in Canva" link={K.canvaRecensioni} nome="Kit Recensioni" /> : null}
            </div>
          </section>

          <section className="kit-sec" aria-labelledby="kit-passi">
            <h2 id="kit-passi">Pronto in 4 passi</h2>
            <ol className="kit-passi">
              <li><strong>Apri il modello</strong><span>Clicca sul link e poi su "Usa il modello": Canva crea una copia tutta tua.</span></li>
              <li><strong>Metti il tuo stile</strong><span>Carica il logo nel cerchio e, se vuoi, cambia i colori da "Modifica colori".</span></li>
              <li><strong>Cambia foto e testi</strong><span>Trascina le tue foto nelle cornici e sostituisci i campi tra [parentesi].</span></li>
              <li><strong>Programma</strong><span>Scarica in PNG, copia la didascalia dal calendario e programma tutto in una volta con Meta Business Suite.</span></li>
            </ol>
          </section>

          <section className="kit-sec kit-noi" aria-labelledby="kit-noi">
            <h2 id="kit-noi">Non hai tempo di prepararlo? Lo facciamo noi.</h2>
            <p>Con i piani mensili di Vetrina Studio ricevi ogni mese post, Stories e didascalie pronte con le foto del tuo locale: tu devi solo pubblicare. <strong>Il prezzo del kit ({K.prezzo}) diventa uno sconto sul primo mese</strong>, già applicato con il codice <strong>{CODICE_KIT}</strong>. Valido fino al 31 gennaio 2027, senza vincoli: disdici quando vuoi.</p>
            <ul className="kit-piani">
              {PIANI.map(([id, nome, prezzo, scontato]) => (
                <li key={id}>
                  <a className="kit-piano" href={linkPiano(id)} {...ev("Scelta piano", { piano: id, origine: "kit-natale" })}>
                    <strong>{nome}</strong>
                    <span><s>{prezzo}</s> {scontato} il primo mese</span>
                  </a>
                </li>
              ))}
            </ul>
            <p><a href="/#pacchetti">Cosa c'è in ogni piano</a> · <a href={waLink("Ciao! Ho comprato il Kit Natale e vorrei sapere di più sui piani.")} {...ev("WhatsApp", { origine: "kit-grazie" })}>Domande? Scrivici su WhatsApp</a></p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
