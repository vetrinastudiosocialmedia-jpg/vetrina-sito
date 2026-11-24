// Articoli del tema "IA e social media manager" (pubblicati il 25/11/2026).
// Fonti lette il 24/11/2026. Formato dei campi: vedi lib/articoli.mjs.

const UE_TRASPARENZA = { titolo: "Commissione europea – Regole di trasparenza per i sistemi di IA (art. 50 AI Act)", url: "https://digital-strategy.ec.europa.eu/it/factpages/quick-facts-transparency-rules-ai-systems" };
const HASHTAG_5 = { titolo: "Digital Trends – Instagram limita gli hashtag a cinque per post", url: "https://www.digitaltrends.com/social-media/instagram-now-limits-you-to-five-hashtags-per-post/" };
const G_VIETATI = { titolo: "Google – Contenuti vietati e con limitazioni (recensioni false e incentivi)", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=it" };

export const ARTICOLI_IA = [
  {
    gruppo: "guide",
    tema: "ia",
    slug: "prompt-chatgpt-post-instagram",
    titolo: "Prompt ChatGPT per i post Instagram della tua attività",
    titoloScheda: "Prompt ChatGPT per i post Instagram",
    descrizione:
      "6 prompt in italiano da copiare in ChatGPT o Gemini per didascalie, idee di post, bio e risposte alle recensioni, più le regole per usarli bene.",
    rispostaRapida:
      "Un buon prompt per i post della tua attività dà all'IA quattro informazioni: chi sei (attività, città, clienti), cosa vuoi (didascalia, idee, bio), il tono e i limiti, come lunghezza, hashtag ed emoji. Qui trovi sei prompt pronti. Prima di pubblicare rileggi sempre: l'IA può inventare prezzi, orari o dettagli che non esistono, e la responsabilità di quello che pubblichi resta tua.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "struttura-prompt",
        titolo: "La struttura di un buon prompt",
        tabella: {
          didascalia: "I quattro elementi da dare sempre all'IA, con un esempio.",
          colonne: ["Elemento", "Esempio"],
          righe: [
            ["Chi sei", "Sono il titolare di una pizzeria napoletana a Carpi, clienti famiglie e giovani."],
            ["Cosa vuoi", "Scrivi la didascalia per il post della pizza del mese."],
            ["Tono", "Caldo e semplice, come se parlassi a un cliente al banco."],
            ["Limiti", "Massimo 60 parole, 3 emoji, 5 hashtag, chiudi invitando a prenotare su WhatsApp."],
          ],
        },
      },
      {
        id: "sei-prompt",
        titolo: "6 prompt da copiare",
        paragrafi: ["Sostituisci le parti tra parentesi quadre con le tue informazioni."],
        lista: [
          "Didascalia: “Sono [attività] a [città]. Scrivi una didascalia Instagram per una foto di [prodotto]. Tono [tono]. Massimo 60 parole, 2–3 emoji, chiudi con un invito a [azione]. Aggiungi al massimo 5 hashtag precisi: città, tipo di attività, prodotto.”",
          "Idee del mese: “Dammi 12 idee di post Instagram per [attività] a [città] per il mese di [mese], tenendo conto di [festività/eventi]. Dividile tra prodotto, persone, locale e informazioni pratiche. Una riga per idea.”",
          "Reel: “Scrivi la scaletta di un Reel di 20 secondi per [attività]: 4 inquadrature da girare con il telefono, il testo da mettere a schermo e una frase da dire a voce.”",
          "Bio: “Scrivi 3 versioni di bio Instagram per [attività] a [indirizzo/città], entro 150 caratteri, con cosa facciamo, cosa ci distingue ([punto di forza]) e un invito a [azione].”",
          "Risposta a una recensione negativa: “Ecco una recensione negativa: [testo]. Scrivi una risposta di 4 righe, calma e professionale: ringrazia, riconosci il problema senza accusare il cliente, spiega cosa cambiamo ([cosa]) e invita a scriverci a [contatto]. Niente sconti in cambio.”",
          "Riscrittura: “Rendi più breve e chiaro questo testo per Instagram, senza cambiare le informazioni: [testo].”",
        ],
        fonti: [HASHTAG_5],
        prossimo: { testo: "Come rispondere a una recensione negativa (le regole da dare anche all'IA)", url: "/guide/come-rispondere-recensione-negativa/" },
      },
      {
        id: "regole",
        titolo: "Le regole per usarli bene",
        lista: [
          "Controlla ogni dato: prezzi, orari, ingredienti, allergeni. L'IA a volte inventa.",
          "Non chiedere all'IA di scrivere recensioni sulla tua attività: per Google sono contenuti falsi, vietati.",
          "Personalizza: cambia almeno una frase con un dettaglio che solo tu conosci.",
          "Salva i prompt che funzionano e riusali ogni mese.",
        ],
        fonti: [G_VIETATI],
      },
    ],
    faq: [
      { q: "Meglio ChatGPT o Gemini?", a: "Per i testi dei social funzionano bene entrambi. Conta di più dare informazioni precise nel prompt." },
      { q: "Devo dire che i testi sono scritti con l'IA?", a: "Per i normali testi promozionali rivisti da te non c'è un obbligo generale di dichiararlo; le regole UE di trasparenza riguardano soprattutto immagini, audio e video che potrebbero sembrare reali. Dichiararlo può comunque essere una scelta di trasparenza." },
      { q: "Posso usare le immagini create dall'IA nei post?", a: "Per grafiche e sfondi sì; per mostrare piatti e prodotti usa foto vere, migliorate senza cambiarli." },
    ],
    correlati: ["migliorare-foto-prodotti-con-ia", "social-media-manager-con-ia", "bio-instagram-attivita"],
  },
  {
    gruppo: "guide",
    tema: "ia",
    slug: "migliorare-foto-prodotti-con-ia",
    titolo: "Come migliorare le foto dei prodotti con l'IA (senza ingannare i clienti)",
    titoloScheda: "Migliorare le foto dei prodotti con l'IA",
    descrizione:
      "Come usare l'IA per sistemare luce, sfondo e nitidezza delle foto di piatti e prodotti, cosa non cambiare mai, 4 prompt pronti e le regole UE sulla trasparenza.",
    rispostaRapida:
      "L'IA è utile per migliorare luce, colori, nitidezza e sfondo delle foto scattate con il telefono, ma il prodotto deve restare quello vero: stessa porzione, stessi ingredienti, stesso colore. Cambiarlo inganna il cliente, che poi lo scopre al tavolo. Parti sempre da una foto reale e, se l'immagine modificata potrebbe sembrare una foto autentica di qualcosa che non esiste, dichiaralo.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "cosa-si-puo",
        titolo: "Cosa si può fare e cosa no",
        tabella: {
          didascalia: "Ritocchi con l'IA: la regola è migliorare la foto, non il prodotto.",
          colonne: ["Sì", "No"],
          righe: [
            ["Correggere luce e bilanciamento del bianco", "Ingrandire la porzione o aggiungere ingredienti"],
            ["Togliere briciole, macchie, oggetti di disturbo", "Cambiare il colore reale di un prodotto o di un tessuto"],
            ["Sostituire uno sfondo disordinato con uno neutro", "Inventare un locale o un ambiente che non esiste"],
            ["Aumentare la nitidezza di una foto un po' mossa", "Generare da zero un piatto “mai cucinato”"],
          ],
        },
      },
      {
        id: "prompt",
        titolo: "4 prompt per ChatGPT o Gemini",
        paragrafi: ["Carica la tua foto e usa uno di questi prompt, adattandolo:"],
        lista: [
          "“Migliora la luce di questa foto come se fosse scattata vicino a una finestra di giorno. Non cambiare il piatto, la porzione né i colori del cibo.”",
          "“Sostituisci solo lo sfondo con un tavolo di legno chiaro sfocato. Il prodotto deve restare identico.”",
          "“Togli le briciole e le macchie dal bordo del piatto, senza modificare nient'altro.”",
          "“Rendi la foto più nitida e correggi il colore giallo delle lampade, mantenendo i colori naturali.”",
        ],
        prossimo: { testo: "Prima di tutto lo scatto: come fotografare piatti e prodotti con lo smartphone", url: "/guide/foto-piatti-con-lo-smartphone/" },
      },
      {
        id: "trasparenza",
        titolo: "Le regole UE sulla trasparenza",
        paragrafi: [
          "Dal 2 agosto 2026 si applicano le regole di trasparenza dell'articolo 50 dell'AI Act. Tra l'altro, chi usa sistemi di IA deve informare le persone quando mostra immagini, audio o video generati o manipolati con l'IA che somigliano a persone, oggetti, luoghi o eventi reali e che potrebbero sembrare autentici.",
          "Per un'attività la regola pratica è semplice: se hai solo sistemato la luce di una foto vera, non hai creato niente di falso; se l'immagine mostra qualcosa che nella realtà non esiste, scrivilo chiaramente nel post. Per i casi dubbi chiedi a un consulente.",
        ],
        fonti: [UE_TRASPARENZA],
      },
    ],
    faq: [
      { q: "Le app gratuite vanno bene?", a: "Per ritocchi semplici sì. Controlla sempre il risultato a schermo intero: l'IA a volte deforma bordi, scritte e loghi." },
      { q: "Posso usare l'IA per creare foto del locale?", a: "Meglio di no: i clienti vogliono vedere il posto vero. Usa l'IA per migliorare le foto che hai." },
      { q: "Instagram segnala le immagini fatte con l'IA?", a: "Meta può aggiungere un'etichetta ai contenuti che riconosce come creati o modificati con l'IA; indipendentemente da questo, la scelta di essere trasparente spetta a te." },
    ],
    correlati: ["prompt-chatgpt-post-instagram", "foto-piatti-con-lo-smartphone", "social-media-manager-con-ia"],
  },
  {
    gruppo: "guide",
    tema: "ia",
    slug: "social-media-manager-con-ia",
    titolo: "Social media manager con l'IA: cosa fa l'IA e cosa deve controllare una persona",
    titoloScheda: "Social media manager con l'IA: cosa cambia",
    descrizione:
      "Cosa può fare oggi l'IA per i social di un'attività locale, cosa deve restare in mano a una persona e come scegliere un servizio che usa l'IA senza rischi.",
    rispostaRapida:
      "L'IA oggi scrive bozze di didascalie, propone idee, riassume recensioni e migliora le foto in pochi secondi; per questo i servizi che la usano possono costare meno. Una persona deve però scegliere la strategia, controllare fatti e prezzi, usare foto vere dell'attività, rispondere ai clienti e decidere cosa pubblicare. La formula che funziona è: contenuti creati con l'IA, rivisti da persone.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "divisione-compiti",
        titolo: "Chi fa cosa",
        tabella: {
          didascalia: "Divisione dei compiti tra IA e persona nella gestione dei social di un'attività locale.",
          colonne: ["Compito", "IA", "Persona"],
          righe: [
            ["Idee per il calendario", "Propone molte idee in fretta", "Sceglie quelle adatte all'attività e al periodo"],
            ["Didascalie", "Scrive la bozza", "Controlla fatti, prezzi, orari e tono"],
            ["Foto", "Migliora luce, sfondo, nitidezza", "Scatta o sceglie foto vere, controlla che il prodotto non cambi"],
            ["Grafiche", "Crea varianti e formati", "Mantiene lo stile riconoscibile dell'attività"],
            ["Recensioni", "Propone una bozza di risposta", "Decide cosa rispondere e firma"],
            ["Messaggi dei clienti", "Suggerisce risposte rapide", "Risponde davvero e gestisce i casi delicati"],
          ],
        },
      },
      {
        id: "rischi",
        titolo: "I rischi da evitare",
        lista: [
          "Informazioni inventate: un prezzo o un orario sbagliati scritti dall'IA restano una tua responsabilità.",
          "Contenuti tutti uguali: testi generici che potrebbero essere di qualsiasi locale.",
          "Immagini che ingannano: piatti o ambienti che non esistono.",
          "Recensioni scritte dall'IA: per Google sono contenuti falsi e sono vietate.",
          "Trasparenza: dal 2 agosto 2026 le regole UE chiedono di segnalare le immagini e i video generati o manipolati con l'IA che potrebbero sembrare autentici.",
        ],
        fonti: [G_VIETATI, UE_TRASPARENZA],
        prossimo: { testo: "Come migliorare le foto con l'IA senza ingannare i clienti", url: "/guide/migliorare-foto-prodotti-con-ia/" },
      },
      {
        id: "come-scegliere",
        titolo: "Come scegliere un servizio che usa l'IA",
        paragrafi: ["Prima di affidare i tuoi social a un servizio che usa l'IA, fai queste domande:"],
        lista: [
          "Chi controlla i contenuti prima che arrivino a me?",
          "Usate le foto vere della mia attività o immagini generate?",
          "Posso approvare o chiedere modifiche prima della pubblicazione?",
          "Chi ha accesso al mio account? (meglio nessuno: pubblichi tu)",
          "Quanto costa al mese e cosa è incluso, contenuto per contenuto?",
        ],
        prossimo: { testo: "Quanto costa un social media manager per un'attività locale", url: "/guide/quanto-costa-social-media-manager/" },
      },
    ],
    faq: [
      { q: "L'IA può sostituire del tutto un social media manager?", a: "Può fare buona parte del lavoro ripetitivo, ma non conosce la tua attività, i tuoi clienti e la tua città: servono comunque scelte e controlli umani." },
      { q: "Come lavora Vetrina Studio con l'IA?", a: "Usiamo l'IA per scrivere e impaginare più velocemente; ogni contenuto è controllato da una persona, usiamo le foto vere dell'attività e segnaliamo le immagini generate." },
      { q: "Posso fare tutto da solo con l'IA?", a: "Sì, se hai tempo per scattare, controllare e pubblicare con costanza. Le altre guide di questa sezione ti aiutano a farlo." },
    ],
    correlati: ["quanto-costa-social-media-manager", "prompt-chatgpt-post-instagram", "migliorare-foto-prodotti-con-ia"],
  },
];
