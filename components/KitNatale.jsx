import Footer from "@/components/Footer";
import { waLink } from "@/lib/site";
import { ev } from "@/lib/track";
import { KIT_NATALE as K, INIZIO_KIT_NATALE, FINE_KIT_NATALE } from "@/lib/kit";

// Pagina di vendita del Kit Natale (/kit-natale/).
// Si apre dal problema (dicembre è il mese in cui ti cercano), poi il kit come soluzione.
// I pulsanti di acquisto compaiono solo dal 01/12 al 18/12 (ora di Roma):
// prima e dopo, uno script piccolo li nasconde e mostra un avviso (classi vs-kit-prima / vs-kit-dopo).
// L'order bump (Kit Recensioni a €9) è una casella: spuntandola cambia il pulsante (solo CSS, niente JavaScript).

const COSA = [
  ["20 post per il feed", "Modelli Canva 4:5, già impaginati. 2 sono caroselli."],
  ["10 Stories", "Con l'indicazione dello sticker giusto: sondaggio, quiz, conto alla rovescia, link WhatsApp."],
  ["20 didascalie pronte", "In italiano, con gli spazi tra [parentesi] per nome, città, orari e prezzi."],
  ["Calendario 1 dicembre – 6 gennaio", "Il giorno giusto per ogni post e ogni Storia, dall'Immacolata alla Befana."],
  ["Guida \"Pronto in 4 passi\"", "Una pagina: apri, metti il logo, cambia foto e testi, programma."],
  ["Versione bar e versione ristorante", "I post che cambiano hanno la riga alternativa per il bar."],
];

const POST = [
  "Menu di Natale",
  "Cene aziendali e di gruppo",
  "Immacolata: si accende l'albero",
  "Buono regalo",
  "Orari delle feste",
  "Ultimi tavoli per la Vigilia",
  "Il Natale da portare a casa",
  "Cosa dicono di noi (recensioni)",
  "Capodanno",
  "Il nostro 2026 in numeri",
  "La Befana passa da noi",
  "…e altri 9",
];

const PASSI = [
  ["Apri il modello", "Clicchi sul link e su \"Usa il modello\": Canva crea una copia tutta tua."],
  ["Metti il tuo stile", "Carichi il logo nel cerchio e, se vuoi, cambi i colori."],
  ["Cambia foto e testi", "Trascini le tue foto nelle cornici e completi i campi tra [parentesi]."],
  ["Programma", "Scarichi in PNG, copi la didascalia e programmi tutto con Meta Business Suite."],
];

const FAQ = [
  ["Serve Canva Pro?", "No. I modelli usano solo elementi gratuiti di Canva: funzionano con l'account gratis, senza filigrane."],
  ["Va bene anche per un bar?", "Sì. Il kit è pensato per bar e ristoranti: i post che cambiano hanno già la versione per il bar."],
  ["E se lo compro a metà dicembre?", "Lo usi lo stesso. Metà dei post non hanno una data fissa (offerte, buono regalo, dietro le quinte, recensioni) e vanno bene in qualsiasi giorno delle feste."],
  ["Quanto tempo ci vuole?", "Circa 2 ore per preparare e programmare tutto dicembre, una volta sola."],
  ["Come lo ricevo?", "Subito dopo il pagamento si apre la pagina con il link al kit. Ti arriva anche la ricevuta via email."],
  ["Chi ha fatto i modelli?", "Noi di Vetrina Studio: contenuti creati con l'IA, rivisti da persone. Le foto le metti tu, del tuo locale: sono quelle che funzionano di più."],
];

const STATO = `(function(){var n=Date.now(),h=document.documentElement;if(n<${INIZIO_KIT_NATALE})h.classList.add("vs-kit-prima");else if(n>=${FINE_KIT_NATALE})h.classList.add("vs-kit-dopo")})()`;

function Acquista({ id }) {
  const finito = Date.now() >= FINE_KIT_NATALE;
  return (
    <div className="kit-box" id={id}>
      <div className="kit-prezzo">
        <span className="kit-prezzo-n">{K.prezzo}</span>
        <span className="kit-prezzo-t">una tantum · consegna immediata</span>
      </div>
      {finito ? null : (
        <div className="vs-kit-buy">
          <input type="checkbox" id={`${id}-bump`} className="kit-bump-cb" />
          <label htmlFor={`${id}-bump`} className="kit-bump">
            <strong>Sì, aggiungo il Kit Recensioni a soli {K.prezzoBump}</strong> <s>{K.prezzoRecensioni}</s>
            <span>Messaggi pronti per chiedere le recensioni su Google ai clienti contenti e risposte pronte anche per quelle negative. Solo qui, insieme al Kit Natale.</span>
          </label>
          <a className="vs-btn kit-btn kit-solo" href={K.link} {...ev("Scelta kit", { piano: "kit-natale" })}>
            Prendi il Kit Natale · {K.prezzo}
          </a>
          <a className="vs-btn kit-btn kit-con" href={K.linkBump} {...ev("Scelta kit", { piano: "kit-natale-recensioni" })}>
            Prendi i due kit · {K.totaleConBump}
          </a>
          <p className="kit-nota">Pagamento sicuro con Stripe: carta, Satispay e altri metodi. Funziona con Canva gratis.</p>
        </div>
      )}
      <p className="kit-msg kit-msg-prima">Il Kit Natale è in vendita dal <strong>1° dicembre</strong>. Torna qui tra pochi giorni!</p>
      <p className={finito ? "kit-msg kit-msg-sempre" : "kit-msg kit-msg-dopo"}>
        Il Kit Natale non è più in vendita: dopo il 18 dicembre non c'è più tempo per usarlo bene.{" "}
        <a href="/#pacchetti">Preferisci che i post li facciamo noi?</a>
      </p>
    </div>
  );
}

export default function KitNatale() {
  return (
    <>
      <script data-vs-keep="" dangerouslySetInnerHTML={{ __html: STATO }} />
      <div className="kit">
        <header className="kit-head">
          <a href="/" aria-label="Vetrina Studio, vai al sito">
            <img fetchPriority="high" src="/img/logo-vetrina.webp" srcSet="/img/logo-vetrina-240.webp 240w, /img/logo-vetrina.webp 400w" sizes="172px" width="400" height="107" alt="Vetrina Studio" />
          </a>
          <a className="kit-head-cta" href="#acquista">Prendi il kit</a>
        </header>

        <main>
          <section className="kit-hero">
            <div className="kit-eyebrow">Kit Natale per bar e ristoranti</div>
            <h1>
              A dicembre i clienti scelgono <em>dove andare</em> guardando Instagram.
            </h1>
            <p className="kit-sub">
              Se il tuo profilo è fermo, scelgono un altro locale. Con il Kit Natale hai 20 post e 10 Stories già pronti in Canva, con le didascalie scritte e il calendario dal 1° dicembre al 6 gennaio: cambi logo, foto e prezzi e in circa 2 ore hai sistemato tutte le feste.
            </p>
            <div className="kit-hero-cta">
              <a className="vs-btn kit-btn" href="#acquista">Prendi il kit a {K.prezzo}</a>
              <span>Consegna immediata · Canva gratis va benissimo</span>
            </div>
          </section>

          <section className="kit-sec" aria-labelledby="kit-problema">
            <h2 id="kit-problema">Il problema non è l'idea. È il tempo.</h2>
            <div className="kit-tre">
              <div><strong>Dicembre è il mese più pieno.</strong> Tra cene, prenotazioni e ordini, i post sono l'ultima cosa a cui riesci a pensare.</div>
              <div><strong>Ma è il mese in cui ti cercano di più.</strong> Menu di Natale, cene aziendali, orari delle feste, Capodanno: le persone guardano il profilo prima di scegliere.</div>
              <div><strong>Un profilo fermo sembra un locale chiuso.</strong> Bastano pochi post al momento giusto per far vedere che ci sei e cosa offri.</div>
            </div>
          </section>

          <section className="kit-sec" aria-labelledby="kit-cosa">
            <h2 id="kit-cosa">Cosa ricevi</h2>
            <ul className="kit-cosa">
              {COSA.map(([t, d]) => (
                <li key={t}><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ul>
            <h3>Alcuni dei post</h3>
            <ul className="kit-post">
              {POST.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <p className="kit-nota-ia">Stile elegante e caldo, senza Babbo Natale clip-art né glitter: sembra fatto da un designer, perché il tuo locale non è un volantino. Contenuti creati con l'IA, rivisti da persone.</p>
          </section>

          <section className="kit-sec" aria-labelledby="kit-passi">
            <h2 id="kit-passi">Pronto in 4 passi</h2>
            <ol className="kit-passi">
              {PASSI.map(([t, d]) => (
                <li key={t}><strong>{t}</strong><span>{d}</span></li>
              ))}
            </ol>
          </section>

          <section className="kit-sec" aria-labelledby="kit-acquista-t">
            <h2 id="kit-acquista-t">Prendi il Kit Natale</h2>
            <Acquista id="acquista" />
          </section>

          <section className="kit-sec" aria-labelledby="kit-faq">
            <h2 id="kit-faq">Domande frequenti</h2>
            {FAQ.map(([q, a]) => (
              <details key={q} className="kit-faq">
                <summary>{q}<span className="vs-plus" aria-hidden="true">+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </section>

          <section className="kit-sec kit-noi" aria-labelledby="kit-noi">
            <h2 id="kit-noi">Non hai tempo nemmeno per 2 ore?</h2>
            <p>Lo facciamo noi. Con i piani mensili di Vetrina Studio ricevi ogni mese post, Stories e didascalie pronte con le foto del tuo locale: tu devi solo pubblicare. Se compri il kit, il suo prezzo diventa uno sconto sul primo mese.</p>
            <div className="kit-hero-cta">
              <a className="vs-btn kit-btn kit-btn-2" href="/#pacchetti">Guarda i piani da €49/mese</a>
              <a href={waLink("Ciao! Ho una domanda sul Kit Natale.")} {...ev("WhatsApp", { origine: "kit-natale" })}>Domande? Scrivici su WhatsApp</a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
