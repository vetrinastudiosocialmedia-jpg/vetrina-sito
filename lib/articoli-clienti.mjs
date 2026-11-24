// Articoli del tema "Più clienti per la tua attività" (pubblicati il 25/11/2026).
// Fonti lette il 24/11/2026. Formato dei campi: vedi lib/articoli.mjs.

const G_RANKING = { titolo: "Google – Suggerimenti per migliorare il posizionamento nella ricerca locale", url: "https://support.google.com/business/answer/7091?hl=it" };
const G_LINK_ATTIVITA = { titolo: "Google – Linee guida per i link dell'attività (prenotazioni e ordini)", url: "https://support.google.com/business/answer/13769188?hl=it" };
const G_LINK_RECENSIONI = { titolo: "Google – Creare un link o un codice QR per richiedere recensioni", url: "https://support.google.com/business/answer/16816815?hl=it" };
const G_POST = { titolo: "Google – Creare e gestire i post nel profilo dell'attività", url: "https://support.google.com/business/answer/7342169?hl=it" };
const GARANTE_SPAM = { titolo: "Garante privacy – Linee guida contro lo spam: offerte su WhatsApp solo con consenso", url: "https://www.garanteprivacy.it/garante/doc.jsp?ID=2549317" };

export const ARTICOLI_CLIENTI = [
  {
    gruppo: "guide",
    tema: "clienti",
    slug: "aumentare-clienti-ristorante",
    titolo: "Come aumentare i clienti di un ristorante: piano in 4 settimane",
    titoloScheda: "Come aumentare i clienti di un ristorante",
    descrizione:
      "Più clienti in un ristorante senza grandi budget: scheda Google, recensioni, prenotazioni facili, Instagram e clienti abituali, con un piano di 4 settimane.",
    rispostaRapida:
      "Per aumentare i clienti di un ristorante lavora su cinque punti, nell'ordine: farti trovare su Google Maps con una scheda completa, raccogliere e rispondere alle recensioni, rendere la prenotazione facile da Google, WhatsApp e Instagram, mostrare piatti e persone vere sui social e far tornare chi è già venuto, con il suo consenso. Sono azioni gratuite o quasi: serve costanza più che budget.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "cinque-leve",
        titolo: "Le 5 leve, in ordine di priorità",
        lista: [
          "Scheda Google completa: categoria precisa (“Osteria”, “Ristorante di pesce”), orari giusti, foto vere, menu. È lì che ti cerca chi decide dove mangiare stasera.",
          "Recensioni: chiedile ai clienti contenti con il link ufficiale e rispondi a tutte le negative.",
          "Prenotazione in un gesto: pulsante di prenotazione o link nella scheda Google (se disponibile per la tua attività), WhatsApp in bio, numero cliccabile.",
          "Instagram con piatti e persone vere: il piatto simbolo, lo chef, la sala piena.",
          "Clienti abituali: chi è già venuto torna più facilmente di un cliente nuovo. Con il loro consenso, avvisali di menu stagionali ed eventi.",
        ],
        fonti: [G_RANKING, G_LINK_ATTIVITA, G_LINK_RECENSIONI],
      },
      {
        id: "piano",
        titolo: "Il piano in 4 settimane",
        tabella: {
          didascalia: "Un'azione principale a settimana, sostenibile anche con il locale aperto.",
          colonne: ["Settimana", "Azione", "Tempo"],
          righe: [
            ["1", "Completa la scheda Google: categoria, orari speciali, 10 foto nuove, menu", "1 ora"],
            ["2", "Stampa il QR per le recensioni al banco e rispondi alle recensioni degli ultimi mesi", "1 ora"],
            ["3", "Prepara 12 post e 4 Reel per il mese (una sessione foto, poi programmazione)", "3 ore"],
            ["4", "Crea su WhatsApp Business la lista dei clienti che hanno dato il consenso e manda il menu della stagione", "1 ora"],
          ],
        },
        prossimo: { testo: "Idee post Instagram per un ristorante: 30 idee per un mese", url: "/guide/idee-post-instagram-ristorante/" },
      },
      {
        id: "gruppi-eventi",
        titolo: "Gruppi, eventi e serate lente",
        paragrafi: [
          "Le serate vuote si riempiono meglio con un motivo per venire che con uno sconto: una serata a tema, il menu degustazione del giovedì, la cena con il produttore di vino. Annunciala con un post nella scheda Google (Google mostra i post dell'attività anche nella sezione “Dal proprietario”) e con un carosello su Instagram.",
          "Per cene aziendali e compleanni prepara un menu per gruppi in PDF da mandare su WhatsApp in un secondo.",
        ],
        fonti: [G_POST],
        prossimo: { testo: "Come inviare un messaggio a più clienti con WhatsApp (nel rispetto della privacy)", url: "/guide/whatsapp-business-messaggio-a-piu-contatti/" },
      },
    ],
    faq: [
      { q: "Conviene fare pubblicità a pagamento?", a: "Dopo aver sistemato scheda Google e recensioni sì, con budget piccoli e una zona ristretta. Prima no: porteresti persone su un profilo che non convince." },
      { q: "Gli sconti portano clienti?", a: "Portano soprattutto chi cerca lo sconto. Meglio un motivo per venire (evento, menu stagionale) o un vantaggio per chi torna." },
      { q: "Quanto tempo ci vuole per vedere risultati?", a: "Le prime prenotazioni da Google e Instagram arrivano spesso dopo qualche settimana di costanza, ma dipende da zona, concorrenza e punto di partenza." },
    ],
    correlati: ["come-farsi-trovare-su-google-maps", "come-ottenere-recensioni-google", "idee-post-instagram-ristorante"],
  },
  {
    gruppo: "guide",
    tema: "clienti",
    slug: "aumentare-clienti-bar",
    titolo: "Come aumentare i clienti di un bar: colazioni, pranzi e aperitivi",
    titoloScheda: "Come aumentare i clienti di un bar",
    descrizione:
      "Idee concrete per portare più clienti in un bar: farsi trovare su Google, Stories quotidiane, uffici vicini, aperitivi a tema e clienti abituali. Con checklist.",
    rispostaRapida:
      "Un bar vive di abitudini: per avere più clienti devi farti trovare da chi passa in zona e diventare la scelta fissa per colazione, pausa o aperitivo. Quindi scheda Google con orari sempre giusti, una Storia al giorno con quello che c'è oggi, offerte per gli uffici vicini, aperitivi con un motivo per venire e un modo semplice per far tornare chi c'è già stato.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "tre-momenti",
        titolo: "Tre momenti, tre clienti diversi",
        tabella: {
          didascalia: "Cosa comunicare in ciascun momento della giornata di un bar.",
          colonne: ["Momento", "Chi viene", "Cosa comunicare"],
          righe: [
            ["Colazione", "Chi va al lavoro, genitori dopo la scuola", "Cosa è appena sfornato, orario di apertura, velocità"],
            ["Pranzo veloce", "Uffici e negozi vicini", "Il piatto del giorno, il prezzo, il ritiro su prenotazione"],
            ["Aperitivo", "Amici, colleghi, coppie", "La proposta della serata, musica, eventi, dehors"],
          ],
        },
      },
      {
        id: "azioni",
        titolo: "Le azioni che funzionano in un bar",
        lista: [
          "Orari giusti su Google, compresi festivi e ferie: chi trova chiuso va dal bar accanto.",
          "Una Storia al giorno: la vetrina dei cornetti alle 7, il piatto del giorno alle 11, il primo spritz alle 18.",
          "Vassoi per uffici: un messaggio alle aziende vicine con l'offerta per colazioni di lavoro e compleanni.",
          "Aperitivo con un motivo: degustazione, partita, musica dal vivo, “aperitivo del vicino” per i negozi della via.",
          "Recensioni: QR al banco con una frase semplice, e risposte alle critiche.",
          "Clienti abituali: una tessera timbri o una lista WhatsApp per chi ha detto sì alle novità.",
        ],
        fonti: [G_RANKING, G_LINK_RECENSIONI],
        prossimo: { testo: "Cosa pubblicare su Instagram per un bar: il calendario di un mese", url: "/guide/cosa-pubblicare-su-instagram-bar/" },
      },
      {
        id: "checklist",
        titolo: "Checklist della settimana",
        lista: [
          "Lunedì: controllo orari su Google e Instagram.",
          "Ogni giorno: una Storia con il prodotto del momento.",
          "Mercoledì: un post o un Reel (dietro le quinte, prodotto, staff).",
          "Giovedì: annuncio dell'aperitivo del weekend.",
          "Venerdì: risposta alle recensioni della settimana.",
        ],
        prossimo: { testo: "A che ora pubblicare per farti vedere da chi decide", url: "/guide/orari-migliori-pubblicare-instagram/" },
      },
    ],
    faq: [
      { q: "La tessera fedeltà funziona ancora?", a: "Sì, se è semplice: un timbro a caffè o colazione e un premio chiaro. Quella digitale va bene solo se non chiede troppi dati." },
      { q: "Posso mandare le offerte su WhatsApp a tutti i clienti?", a: "Solo a chi ti ha dato il consenso: per le comunicazioni promozionali il Garante privacy lo richiede." },
      { q: "Meglio Instagram o Facebook per un bar?", a: "Instagram per mostrare prodotti e atmosfera; Facebook è utile per eventi e per un pubblico più adulto. Si possono pubblicare gli stessi contenuti su entrambi." },
    ],
    correlati: ["cosa-pubblicare-su-instagram-bar", "come-ottenere-recensioni-google", "cambiare-orari-google"],
  },
  {
    gruppo: "guide",
    tema: "clienti",
    slug: "aumentare-clienti-centro-estetico",
    titolo: "Come aumentare i clienti di un centro estetico",
    titoloScheda: "Come aumentare i clienti di un centro estetico",
    descrizione:
      "Nuove clienti per un centro estetico e più ritorni: scheda Google, prenotazione online, prima e dopo con consenso, promemoria e recensioni.",
    rispostaRapida:
      "In un centro estetico i clienti arrivano da Google e Instagram, ma restano per fiducia e abitudine. Per averne di più: scheda Google completa con servizi e prezzi, prenotazione facile in un clic, contenuti che mostrano risultati veri (con il consenso scritto della cliente), recensioni raccolte con regolarità e un promemoria per il trattamento successivo, solo a chi lo ha chiesto.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "nuove-clienti",
        titolo: "Farsi trovare dalle nuove clienti",
        lista: [
          "Scheda Google con categoria precisa (“Centro estetico”, “Centro di depilazione laser”), elenco dei servizi con prezzo e foto della cabina e dell'ingresso.",
          "Link di prenotazione nella scheda, se disponibile per la tua attività, o almeno WhatsApp e telefono ben visibili.",
          "Su Instagram, contenuti che rispondono a domande vere: quante sedute servono, come prepararsi al trattamento, cosa evitare dopo.",
        ],
        fonti: [G_RANKING, G_LINK_ATTIVITA],
      },
      {
        id: "prima-dopo",
        titolo: "Il prima e dopo, fatto bene",
        paragrafi: [
          "Il prima e dopo convince più di qualsiasi slogan, ma ha due regole. Serve il consenso scritto della cliente a pubblicare le sue foto, anche senza volto. E le foto devono essere vere: stessa luce, stessa posizione, nessun filtro o ritocco che cambi il risultato.",
          "Evita promesse come “risultati garantiti” o “definitivo”: ogni pelle risponde in modo diverso, e una promessa non mantenuta diventa una recensione negativa.",
        ],
        prossimo: { testo: "Come fare un carosello prima e dopo su Instagram", url: "/guide/carosello-instagram/" },
      },
      {
        id: "far-tornare",
        titolo: "Far tornare chi c'è già stata",
        tabella: {
          didascalia: "Momenti in cui un messaggio (con il consenso della cliente) aiuta a riprenotare.",
          colonne: ["Momento", "Messaggio"],
          righe: [
            ["Giorno dopo il trattamento", "Come va? Ecco i consigli per i prossimi giorni"],
            ["Quando è ora della seduta successiva", "Promemoria con due orari liberi"],
            ["Cambio di stagione", "I trattamenti consigliati per l'inverno o per l'estate"],
            ["Dopo una bella esperienza", "La richiesta di recensione con il link Google"],
          ],
        },
        fonti: [GARANTE_SPAM, G_LINK_RECENSIONI],
        prossimo: { testo: "WhatsApp Business: messaggi automatici e risposte rapide", url: "/guide/whatsapp-business-messaggio-automatico/" },
      },
    ],
    faq: [
      { q: "I pacchetti di sedute aiutano?", a: "Sì, se il prezzo e le condizioni sono chiari: aiutano la cliente a completare il percorso e a te a programmare il lavoro." },
      { q: "Posso pubblicare le foto delle clienti se non si vede il viso?", a: "Chiedi comunque il consenso scritto: anche senza volto può essere riconoscibile, per esempio da un tatuaggio." },
      { q: "Conviene rispondere ai prezzi in DM?", a: "Sì, ma prepara una risposta rapida con il listino: chi chiede il prezzo vuole una risposta veloce." },
    ],
    correlati: ["aumentare-clienti-parrucchiere", "come-ottenere-recensioni-google", "whatsapp-business-messaggio-automatico"],
  },
  {
    gruppo: "guide",
    tema: "clienti",
    slug: "aumentare-clienti-parrucchiere",
    titolo: "Come aumentare i clienti di un parrucchiere",
    titoloScheda: "Come aumentare i clienti di un parrucchiere",
    descrizione:
      "Come riempire l'agenda di un salone: Reel delle trasformazioni, prenotazioni facili, giorni lenti, recensioni e il richiamo al momento giusto.",
    rispostaRapida:
      "Un parrucchiere ha un vantaggio: ogni cliente torna ogni poche settimane. Per crescere servono nuove clienti che ti scoprono, con trasformazioni mostrate in Reel e caroselli, una scheda Google curata e recensioni, e un'agenda piena anche nei giorni lenti, con un motivo per prenotare. Il resto è far tornare chi c'è già stato, con un promemoria a chi lo vuole.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "contenuti",
        titolo: "I contenuti che portano clienti a un salone",
        tabella: {
          didascalia: "Formati che funzionano per un salone, con il consenso delle clienti per foto e video.",
          colonne: ["Contenuto", "Formato", "Perché funziona"],
          righe: [
            ["La trasformazione", "Reel di 10–20 secondi", "Si vede il risultato in un attimo"],
            ["Prima e dopo del colore", "Carosello 4:5", "Si confronta con calma, si salva"],
            ["Come mantenere il colore a casa", "Carosello o Reel con voce", "Mostra competenza, si condivide"],
            ["Il team", "Post o Reel", "Chi prenota vuole sapere chi la seguirà"],
            ["Agenda della settimana", "Stories", "Chi ha voglia di un taglio vede subito i posti liberi"],
          ],
        },
        prossimo: { testo: "Come fare un Reel per la tua attività, passo a passo", url: "/guide/come-fare-reel-instagram/" },
      },
      {
        id: "giorni-lenti",
        titolo: "Riempire i giorni lenti",
        paragrafi: ["Quasi ogni salone ha uno o due giorni vuoti. Invece di uno sconto generico, prova un motivo per venire proprio quel giorno:"],
        lista: [
          "Un servizio dedicato (“martedì della piega veloce”, “trattamento ristrutturante del mercoledì”).",
          "Posti liberi della giornata in una Storia al mattino.",
          "Un messaggio alle clienti che hanno chiesto di essere avvisate dei posti liberi.",
        ],
        fonti: [GARANTE_SPAM],
      },
      {
        id: "google-recensioni",
        titolo: "Scheda Google e recensioni",
        lista: [
          "Categoria precisa (“Parrucchiere”, “Barbiere”), servizi con prezzi indicativi, foto vere del salone.",
          "Link per prenotare o WhatsApp ben visibile.",
          "Recensioni chieste al momento giusto: quando la cliente si guarda allo specchio e sorride.",
          "Risposta alle recensioni negative con calma: il colore non riuscito si sistema in salone, non nei commenti.",
        ],
        fonti: [G_RANKING, G_LINK_RECENSIONI],
        prossimo: { testo: "Come rispondere a una recensione negativa (con esempi)", url: "/guide/come-rispondere-recensione-negativa/" },
      },
    ],
    faq: [
      { q: "Devo chiedere il permesso per i video delle clienti?", a: "Sì, sempre, meglio per iscritto. Molte clienti accettano volentieri se possono vedere il video prima." },
      { q: "Ogni quanto ricontattare una cliente?", a: "Al momento del servizio successivo (ritocco radici, taglio), solo se ti ha detto che le fa piacere ricevere il promemoria." },
      { q: "Conviene un profilo per ogni parrucchiera del team?", a: "Il profilo del salone resta il principale; i profili personali possono aiutare, purché rimandino sempre al salone per le prenotazioni." },
    ],
    correlati: ["aumentare-clienti-centro-estetico", "come-fare-reel-instagram", "come-ottenere-recensioni-google"],
  },
  {
    gruppo: "guide",
    tema: "clienti",
    slug: "aumentare-clienti-negozio",
    titolo: "Come aumentare i clienti in negozio: idee per il commercio locale",
    titoloScheda: "Come aumentare i clienti in negozio",
    descrizione:
      "Più persone in un negozio di quartiere: scheda Google, novità su Instagram, WhatsApp per tenere da parte un articolo, eventi e collaborazioni.",
    rispostaRapida:
      "Per portare più clienti in negozio devi farti trovare quando qualcuno cerca un prodotto in zona e dargli un motivo per venire adesso. Lavora su scheda Google completa (anche con i prodotti disponibili, dove la funzione è attiva), novità mostrate su Instagram, WhatsApp per chiedere e tenere da parte un articolo, piccoli eventi in negozio e collaborazioni con le attività vicine.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "farsi-trovare",
        titolo: "Farsi trovare quando cercano un prodotto",
        paragrafi: [
          "Molte persone cercano un prodotto con il nome della città o “vicino a me”. Google indica tra i modi per migliorare la visibilità locale una scheda completa, verificata e con foto; per i negozi, nelle regioni dove la funzione è disponibile, si possono aggiungere anche i prodotti disponibili in negozio.",
          "Anche senza catalogo, una descrizione che nomina le marche e le categorie principali (“scarpe comode da donna”, “giocattoli in legno”) aiuta chi cerca a capire che hai quello che vuole.",
        ],
        fonti: [G_RANKING],
      },
      {
        id: "motivo-per-venire",
        titolo: "Un motivo per venire adesso",
        lista: [
          "Le novità della settimana in un carosello e nelle Stories, con prezzo.",
          "“Te lo teniamo da parte”: su WhatsApp il cliente chiede taglia o colore e passa a ritirare.",
          "Un piccolo evento: presentazione della nuova collezione, giornata di prova, laboratorio per bambini.",
          "Collaborazioni con i vicini: vetrina condivisa, sconto incrociato con il bar della via, sacchetto con il volantino dell'altro negozio.",
        ],
        prossimo: { testo: "Come fare un carosello con le novità della settimana", url: "/guide/carosello-instagram/" },
      },
      {
        id: "far-tornare",
        titolo: "Far tornare chi ha già comprato",
        tabella: {
          didascalia: "Strumenti per i clienti già acquisiti, dal più semplice al più strutturato.",
          colonne: ["Strumento", "Come funziona", "Attenzione"],
          righe: [
            ["Lista WhatsApp delle novità", "Un messaggio al mese con gli arrivi", "Solo con il consenso del cliente"],
            ["Tessera fedeltà", "Timbri o punti a ogni acquisto", "Regole semplici e visibili"],
            ["Richiesta di recensione", "QR alla cassa o nel sacchetto", "Niente sconti in cambio della recensione"],
          ],
        },
        fonti: [GARANTE_SPAM, G_LINK_RECENSIONI],
        prossimo: { testo: "Come ottenere più recensioni su Google", url: "/guide/come-ottenere-recensioni-google/" },
      },
    ],
    faq: [
      { q: "Serve un e-commerce?", a: "Non per forza. Per molti negozi di quartiere bastano Instagram per mostrare e WhatsApp per riservare e ritirare." },
      { q: "Le vetrine contano ancora?", a: "Sì, e possono diventare contenuti: una foto della vetrina nuova è un post facile e riconoscibile." },
      { q: "Ogni quanto pubblicare le novità?", a: "Quando arrivano, con un ritmo regolare: almeno una o due volte a settimana tra post e Stories." },
    ],
    correlati: ["come-farsi-trovare-su-google-maps", "carosello-instagram", "whatsapp-business-messaggio-a-piu-contatti"],
  },
];
