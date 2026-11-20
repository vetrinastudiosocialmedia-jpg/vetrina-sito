// Articoli del sito: UNICA fonte della verità (docs/seo-content-spec.md, sezioni 1 e 3).
// Da questa lista escono: le pagine /guide/<slug>/, l'indice /guide/, il piè di pagina,
// la sitemap, llms.txt e llms-full.txt (scripts/genera-seo.mjs) e i dati strutturati.
//
// Per aggiungere un articolo: copia un oggetto, cambia i campi, poi pubblica.
// La build si ferma se qualcosa non rispetta la spec (titolo troppo lungo, meno di 3
// correlati, ecc.) e il sito resta com'era.
//
// Nei testi, i link si scrivono così: [testo del link](/indirizzo/ o https://...).
// ATTENZIONE: i prezzi dei piani Vetrina compaiono anche qui. Se cambiano, aggiorna
// anche gli articoli e la data "aggiornato".

export const SITO = "https://vetrinastudiosocial.it";

export const GRUPPI = [
  {
    slug: "guide",
    nome: "Guide",
    titolo: "Guide per i social di bar, ristoranti e negozi",
    descrizione:
      "Guide pratiche per attività locali: quanto costa farsi seguire i social, ogni quanto pubblicare, cosa pubblicare e come fare foto migliori con il telefono.",
  },
];

export const ARTICOLI = [
  {
    gruppo: "guide",
    slug: "quanto-costa-social-media-manager",
    titolo: "Quanto costa un social media manager per un'attività locale",
    titoloScheda: "Quanto costa un social media manager nel 2026",
    descrizione:
      "Prezzi per bar, ristoranti e negozi: freelance, agenzia o contenuti pronti. Tabella di confronto, costo per contenuto e cosa chiedere nel preventivo.",
    rispostaRapida:
      "In Italia un social media manager freelance costa in media tra 300 e 1.500 € al mese, mentre un'agenzia di comunicazione parte da circa 2.000 € al mese, secondo la guida prezzi 2026 di Cronoshare. Per un'attività locale esiste anche una terza strada: ricevere ogni mese contenuti pronti da pubblicare, a partire da 49 € al mese, gestendo da sé commenti e messaggi.",
    pubblicato: "2026-11-20",
    aggiornato: "2026-11-20",
    sezioni: [
      {
        id: "tre-strade",
        titolo: "Le strade possibili, a confronto",
        paragrafi: [
          "Chi ha un bar, un ristorante o un negozio di solito sceglie tra quattro soluzioni. Cambiano il prezzo, quanto lavoro resta a te e chi tiene il controllo dell'account.",
        ],
        tabella: {
          didascalia: "Costi indicativi al mese in Italia. Fonte per freelance e agenzia: Cronoshare, guida prezzi 2026.",
          colonne: ["Soluzione", "Costo al mese", "Cosa fa", "Per chi è adatta"],
          righe: [
            ["Fai da te", "0 € in denaro, ma il tuo tempo", "Tutto: idee, foto, grafiche, testi, pubblicazione", "Chi ha tempo e voglia di imparare"],
            ["Social media manager freelance", "300–1.500 €", "Dipende dal preventivo: numero di social, post, video, strategia", "Chi vuole delegare quasi tutto"],
            ["Agenzia di comunicazione", "Da 2.000 €", "Strategia, contenuti, campagne e report, con un team", "Aziende con budget e obiettivi ampi"],
            ["Contenuti pronti (es. Vetrina Studio)", "49–99 €", "Post, Reel e calendario pronti; pubblichi tu", "Attività locali con budget ridotto"],
          ],
        },
        fonti: [{ titolo: "Cronoshare – Quanto costa un Social Media Manager? Prezzi 2026", url: "https://www.cronoshare.it/quanto-costa/social-media-manager" }],
      },
      {
        id: "da-cosa-dipende",
        titolo: "Da cosa dipende il prezzo",
        paragrafi: [
          "Due preventivi possono essere molto diversi anche per lo stesso lavoro apparente. Secondo Cronoshare, il prezzo cambia soprattutto per questi motivi:",
        ],
        lista: [
          "Quanti social si gestiscono: ogni canale in più richiede tempo e risorse.",
          "Quanto spesso si pubblica: pubblicare ogni giorno costa più di 2–3 post a settimana.",
          "Il tipo di contenuto: video e grafiche elaborate costano più dei post semplici.",
          "La strategia: il piano editoriale spesso si paga a parte.",
          "La pubblicità: la gestione delle campagne può costare il 15–20% del budget investito in inserzioni, che si paga a Meta a parte.",
          "L'esperienza: professionisti certificati chiedono tariffe più alte.",
        ],
        fonti: [{ titolo: "Cronoshare – Quanto costa un Social Media Manager? Prezzi 2026", url: "https://www.cronoshare.it/quanto-costa/social-media-manager" }],
        prossimo: { testo: "Quanti post servono davvero: ogni quanto pubblicare su Instagram", url: "/guide/ogni-quanto-pubblicare-su-instagram/" },
      },
      {
        id: "costo-per-contenuto",
        titolo: "Il conto che conviene fare: quanto costa ogni contenuto",
        paragrafi: [
          "Il prezzo al mese da solo dice poco. Per confrontare due offerte, dividi il prezzo per il numero di contenuti inclusi. Esempio: se un preventivo da 400 € al mese include 12 post, ogni post costa circa 33 €.",
          "Ecco lo stesso conto fatto sui piani di Vetrina Studio, con i prezzi di lancio riservati ai primi 5 clienti:",
        ],
        tabella: {
          didascalia: "Costo per contenuto dei piani Vetrina Studio ai prezzi di lancio (novembre 2026). Contenuti = post + Reel + Stories inclusi.",
          colonne: ["Piano", "Prezzo al mese", "Contenuti inclusi", "Costo per contenuto"],
          righe: [
            ["Essenziale", "49 €", "6 post", "circa 8,20 €"],
            ["Crescita", "89 €", "8 post + 1 Reel = 9", "circa 9,90 €"],
            ["Pro", "99 €", "12 post + 2 Reel + 8 Stories = 22", "4,50 €"],
          ],
        },
        prossimo: { testo: "Vedi i piani e cosa includono", url: "/#pacchetti" },
      },
      {
        id: "cosa-chiedere",
        titolo: "Cosa chiedere prima di firmare",
        paragrafi: ["Qualunque soluzione scegli, fatti mettere per iscritto queste risposte. Evitano quasi tutte le sorprese:"],
        lista: [
          "Quanti post, Reel e Stories al mese sono inclusi, esattamente?",
          "Chi pubblica: tu o loro? Se pubblicano loro, serve la password del tuo account?",
          "Chi risponde a commenti e messaggi privati?",
          "C'è una durata minima o una penale se disdici?",
          "Di chi sono le grafiche e i testi se smetti di collaborare?",
          "Le foto le fai tu o sono incluse? Si usano immagini generate o di repertorio?",
          "Come approvi i contenuti prima che escano?",
          "La pubblicità a pagamento è inclusa o si paga a parte?",
          "Ricevi regolare fattura?",
        ],
      },
    ],
    faq: [
      {
        q: "Un social media manager risponde anche ai messaggi?",
        a: "Dipende dal contratto: chiedilo per iscritto. Nei piani di Vetrina Studio commenti e messaggi restano a te, così il rapporto con i clienti resta tuo.",
      },
      {
        q: "Conviene un freelance o un'agenzia?",
        a: "Per un'attività locale con budget ridotto, un freelance o un servizio di contenuti pronti costano meno. Un'agenzia ha senso quando servono anche strategia, campagne e report su più canali.",
      },
      {
        q: "Il prezzo include la pubblicità su Instagram e Facebook?",
        a: "Di solito no. Il budget delle inserzioni si paga a Meta; la gestione delle campagne, quando c'è, può costare il 15–20% di quel budget secondo Cronoshare.",
      },
    ],
    correlati: ["ogni-quanto-pubblicare-su-instagram", "cosa-pubblicare-su-instagram-bar", "foto-piatti-con-lo-smartphone"],
  },

  {
    gruppo: "guide",
    slug: "ogni-quanto-pubblicare-su-instagram",
    titolo: "Ogni quanto pubblicare su Instagram per un'attività locale",
    titoloScheda: "Ogni quanto pubblicare su Instagram",
    descrizione:
      "Quanti post a settimana servono a un bar, un ristorante o un negozio: cosa dicono i dati su oltre 2 milioni di post e un piano realistico da seguire.",
    rispostaRapida:
      "Per un'attività locale l'obiettivo realistico è pubblicare da 3 a 5 post a settimana, tra foto, caroselli e Reel. Uno studio di Buffer su 2,1 milioni di post ha trovato che passare da 1–2 a 3–5 post a settimana porta circa il 12% di copertura in più per ogni post. Conta però più la costanza: meglio 3 post ogni settimana che un mese pieno seguito dal silenzio.",
    pubblicato: "2026-11-20",
    aggiornato: "2026-11-20",
    sezioni: [
      {
        id: "cosa-dicono-i-dati",
        titolo: "Cosa dicono i dati",
        paragrafi: [
          "Buffer, una piattaforma per programmare i post, ha analizzato 2,1 milioni di post (foto, caroselli e Reel, senza le Stories) di 102.000 account Instagram. Ogni account è stato confrontato con sé stesso nelle settimane in cui pubblicava di più o di meno.",
          "Il risultato: più si pubblica, più crescono copertura e follower, ma con guadagni che si riducono man mano. Il salto più utile è quello da 1–2 a 3–5 post a settimana.",
        ],
        tabella: {
          didascalia: "Effetto della frequenza di pubblicazione su Instagram. Fonte: Buffer, analisi di 2,1 milioni di post (2025).",
          colonne: ["Post a settimana", "Crescita dei follower", "Copertura per post rispetto a 1–2 post"],
          righe: [
            ["1–2", "+0,12%", "base di confronto"],
            ["3–5", "+0,26%", "circa +12%"],
            ["6–9", "+0,44%", "circa +18%"],
            ["10 o più", "+0,66%", "circa +24%"],
          ],
        },
        fonti: [{ titolo: "Buffer – How Often Should You Post on Instagram? Data from 2 Million Posts", url: "https://buffer.com/library/how-often-to-post-on-instagram/" }],
      },
      {
        id: "settimana-tipo",
        titolo: "Una settimana tipo per chi ha poco tempo",
        paragrafi: [
          "Per un'attività che non ha una persona dedicata ai social, tre appuntamenti fissi a settimana sono un ritmo che si riesce a mantenere. Con le Stories nei giorni in cui succede qualcosa, il profilo resta vivo senza diventare un secondo lavoro.",
        ],
        tabella: {
          didascalia: "Esempio di settimana con 3 post, adatto a bar, ristoranti e negozi. È un nostro schema di partenza, da adattare.",
          colonne: ["Giorno", "Formato", "Idea"],
          righe: [
            ["Lunedì", "Foto", "Il prodotto o il piatto della settimana"],
            ["Mercoledì", "Reel di 15–30 secondi", "Dietro le quinte: preparazione, apertura, consegne"],
            ["Venerdì", "Carosello", "Novità, evento del weekend o orari speciali"],
            ["Quando capita", "Stories", "Sondaggi, arrivi freschi, il momento più pieno della giornata"],
          ],
        },
        prossimo: { testo: "Idee concrete per un mese intero: cosa pubblicare su Instagram per un bar", url: "/guide/cosa-pubblicare-su-instagram-bar/" },
      },
      {
        id: "costanza",
        titolo: "Costanza prima della quantità",
        paragrafi: [
          "Lo stesso studio indica 1–2 post a settimana come minimo: sotto questa soglia il profilo rischia di fermarsi o di perdere follower. Per questo conviene preparare il mese in anticipo, con un calendario, invece di pubblicare solo quando c'è tempo.",
          "Se pubblicare di più ti costringe a post fatti di fretta, fermati a 3. Tre post curati ogni settimana valgono più di sette post improvvisati.",
        ],
        fonti: [{ titolo: "Buffer – How Often Should You Post on Instagram? Data from 2 Million Posts", url: "https://buffer.com/library/how-often-to-post-on-instagram/" }],
      },
      {
        id: "quando-pubblicare",
        titolo: "In che giorni e a che ora",
        paragrafi: [
          "Secondo un'analisi di Buffer su 9,6 milioni di post, le fasce con più visualizzazioni sono il giovedì alle 9, il mercoledì alle 12 e il mercoledì alle 18. Sono medie mondiali: per un'attività locale conta di più quando sono online i tuoi clienti.",
          "Apri le statistiche (Insights) del tuo account professionale e guarda in che giorni e a che ore il tuo pubblico è più attivo. Un bar, per esempio, può provare la colazione per i post del mattino e il tardo pomeriggio per l'aperitivo, poi confrontare i risultati dopo un mese.",
        ],
        fonti: [{ titolo: "Buffer – Best Time to Post on Instagram in 2026: Data from 9.6 Million Posts", url: "https://buffer.com/library/best-time-to-post-on-instagram" }],
      },
    ],
    faq: [
      {
        q: "Le Stories contano come post?",
        a: "No. Nello studio di Buffer le Stories non sono comprese. Servono a restare presenti ogni giorno, ma non sostituiscono post e Reel.",
      },
      {
        q: "È meglio pubblicare tutti i giorni?",
        a: "Più post portano più copertura, ma con vantaggi che si riducono. Se pubblicare ogni giorno ti fa calare la qualità, 3–5 post a settimana sono un ottimo compromesso.",
      },
      {
        q: "Quante foto mi servono per 3 post a settimana?",
        a: "Circa 12–13 post al mese. Con una decina di foto buone della tua attività e qualche grafica si copre un mese intero.",
      },
    ],
    correlati: ["cosa-pubblicare-su-instagram-bar", "foto-piatti-con-lo-smartphone", "quanto-costa-social-media-manager"],
  },

  {
    gruppo: "guide",
    slug: "cosa-pubblicare-su-instagram-bar",
    titolo: "Cosa pubblicare su Instagram per un bar: il calendario di un mese",
    titoloScheda: "Cosa pubblicare su Instagram per un bar",
    descrizione:
      "Un calendario di 4 settimane pronto da copiare per l'Instagram di un bar: idee per post, Reel e Stories, più i consigli di Instagram per fare Reel che girano.",
    rispostaRapida:
      "Un bar può riempire un mese di Instagram con cinque temi che si ripetono: il prodotto del giorno, le persone dietro il bancone, i momenti della giornata (colazione, pranzo, aperitivo), le novità e le occasioni speciali. Qui sotto trovi un calendario di 4 settimane con 3 post a settimana, di cui un Reel, e le Stories, pronto da adattare al tuo locale.",
    pubblicato: "2026-11-20",
    aggiornato: "2026-11-20",
    sezioni: [
      {
        id: "cinque-temi",
        titolo: "I cinque temi che funzionano per un bar",
        paragrafi: ["Non serve inventare ogni giorno qualcosa di nuovo. Basta ruotare questi temi:"],
        lista: [
          "Il prodotto: il cappuccino, il cornetto, il cocktail, il piatto del pranzo. Foto vere, da vicino.",
          "Le persone: chi lavora al bancone, chi prepara le torte. Le persone creano fiducia più di qualsiasi grafica.",
          "I momenti della giornata: la colazione, la pausa pranzo, l'aperitivo. Ognuno parla a clienti diversi.",
          "Le novità: un nuovo prodotto, un fornitore locale, il menu che cambia.",
          "Le occasioni: eventi, partite, festività, orari speciali, chiusure per ferie.",
        ],
      },
      {
        id: "calendario",
        titolo: "Il calendario di 4 settimane",
        paragrafi: [
          "Tre post a settimana (lunedì, mercoledì e venerdì) più le Stories. Il mercoledì è sempre un Reel, perché i video brevi sono il formato che Instagram mostra di più anche a chi non ti segue.",
        ],
        tabella: {
          didascalia: "Calendario di esempio per un bar: 12 post al mese, di cui 4 Reel, più le Stories.",
          colonne: ["Settimana", "Lunedì – foto", "Mercoledì – Reel", "Venerdì – post o carosello", "Stories"],
          righe: [
            ["1", "La colazione di sempre: cappuccino e cornetto da vicino", "15 secondi di preparazione di un cocktail per l'aperitivo", "Carosello con il menu del pranzo della settimana", "Sondaggio: dolce o salato a colazione?"],
            ["2", "Ritratto di chi lavora al bancone, con una frase sua", "L'apertura del bar: dalla serranda al primo caffè", "La novità del mese: nuova torta, nuovo prodotto", "Dietro le quinte: arrivano le consegne"],
            ["3", "L'aperitivo ai tavolini, con la luce del pomeriggio", "Tre cose che non sai del nostro caffè", "L'evento del weekend o la partita in diretta", "Quiz sul menu"],
            ["4", "Un grazie ai clienti abituali, con il loro permesso", "Una giornata al bar in 20 secondi", "Orari speciali, festività o promemoria per il weekend", "Domanda: cosa vorreste nel menu?"],
          ],
        },
        prossimo: { testo: "Perché 3 post a settimana: ogni quanto pubblicare su Instagram", url: "/guide/ogni-quanto-pubblicare-su-instagram/" },
      },
      {
        id: "reel",
        titolo: "Come fare i Reel senza perderci la giornata",
        paragrafi: [
          "Instagram, nella sua guida per le aziende, consiglia di aprire il Reel con un aggancio forte nei primi 5 secondi, di usare testo a schermo o voce fuori campo per spiegare il prodotto e di insegnare qualcosa a chi guarda. Sugli account pubblici, i Reel sotto i 90 secondi possono essere consigliati anche a chi non ti segue.",
          "In pratica, per un bar:",
        ],
        lista: [
          "Gira in verticale, con il telefono fermo e vicino a una fonte di luce.",
          "Bastano 4–6 clip da pochi secondi: le mani che preparano, il bicchiere che si riempie, il bancone pieno.",
          "Scrivi una frase a schermo nei primi secondi, per esempio \"Il nostro spritz in 15 secondi\".",
          "Se pensi di sponsorizzare il Reel, evita musica protetta da copyright: per Instagram lo rende non idoneo alla promozione.",
        ],
        fonti: [{ titolo: "Instagram for Business – Get discovered with Reels", url: "https://business.instagram.com/instagram-reels" }],
      },
      {
        id: "orari",
        titolo: "Quando pubblicare",
        paragrafi: [
          "Pubblica i contenuti della colazione la sera prima o al mattino presto, quelli dell'aperitivo nel primo pomeriggio. Dopo un mese, controlla negli Insights del profilo quali post hanno raggiunto più persone e sposta gli orari di conseguenza.",
        ],
        prossimo: { testo: "Foto migliori in 5 minuti: come fotografare piatti e prodotti con lo smartphone", url: "/guide/foto-piatti-con-lo-smartphone/" },
      },
    ],
    faq: [
      {
        q: "Posso mostrare i clienti nelle foto?",
        a: "Solo con il loro permesso. In alternativa mostra mani, tazze, tavolini e il bancone: raccontano il locale senza mostrare i volti.",
      },
      {
        q: "Posso usare musica famosa nei Reel?",
        a: "Se il Reel resta organico, puoi usare l'audio disponibile in Instagram. Se pensi di sponsorizzarlo, scegli audio originale o senza diritti: Instagram esclude dalla promozione i Reel con musica protetta.",
      },
      {
        q: "E se una settimana non ho idee?",
        a: "Riprendi un tema delle settimane precedenti con un prodotto diverso. Ripetere i temi non annoia, perché ogni post raggiunge persone in parte diverse.",
      },
    ],
    correlati: ["ogni-quanto-pubblicare-su-instagram", "foto-piatti-con-lo-smartphone", "quanto-costa-social-media-manager"],
  },

  {
    gruppo: "guide",
    slug: "foto-piatti-con-lo-smartphone",
    titolo: "Come fotografare piatti e prodotti con lo smartphone",
    titoloScheda: "Foto di piatti con lo smartphone: la guida",
    descrizione:
      "Luce, inquadratura e formato: come fare con il telefono foto di piatti e prodotti che funzionano su Instagram, con una checklist di 10 punti prima di scattare.",
    rispostaRapida:
      "Per fotografare bene piatti e prodotti con lo smartphone servono tre cose: luce naturale che arriva di lato, da una finestra e con il flash spento; un'inquadratura pulita, aiutandoti con la griglia della fotocamera; e uno scatto verticale con un po' di spazio intorno al soggetto, perché Instagram e i programmi che pubblicano i post ritagliano le foto troppo alte. Prima di scattare, pulisci l'obiettivo e il bordo del piatto.",
    pubblicato: "2026-11-20",
    aggiornato: "2026-11-20",
    passi: [
      { nome: "Pulisci obiettivo e piatto", testo: "Passa un panno morbido sull'obiettivo del telefono e togli schizzi e briciole dal bordo del piatto." },
      { nome: "Mettiti vicino a una finestra", testo: "Spegni le luci al soffitto e il flash: usa la luce della finestra che arriva di lato." },
      { nome: "Attiva la griglia", testo: "Su iPhone: Impostazioni > Fotocamera > Griglia e Allineamento orizzontale. Su Android cerca Griglia nelle impostazioni della fotocamera." },
      { nome: "Scegli l'angolazione", testo: "Dall'alto per piatti e pizze, a 45 gradi per panini e bicchieri, di fronte per prodotti alti come cocktail e torte." },
      { nome: "Scatta in verticale con margine", testo: "Tieni il soggetto al centro e lascia spazio sopra e sotto, così il ritaglio per Instagram non lo taglia." },
      { nome: "Scegli e ritocca poco", testo: "Fai più scatti, tieni il più nitido e regola solo raddrizzamento e luminosità, senza filtri che cambiano i colori." },
    ],
    sezioni: [
      {
        id: "luce",
        titolo: "La luce: vicino alla finestra, flash spento",
        paragrafi: [
          "La luce conta più del telefono. Il flash schiaccia i colori e crea riflessi sulle salse e sui bicchieri; le lampade al soffitto danno ombre dure e colori gialli.",
          "Porta il piatto vicino a una finestra, con la luce che arriva di lato. Se il sole è troppo forte, una tenda bianca leggera lo rende morbido. Se il piatto ha un lato in ombra, un foglio bianco o il menu messo di fronte alla finestra rimanda un po' di luce.",
        ],
      },
      {
        id: "inquadratura",
        titolo: "L'inquadratura: tre angolazioni che funzionano sempre",
        paragrafi: [
          "La griglia divide lo schermo in nove parti e ti aiuta a tenere il soggetto dritto e ben posizionato. Su iPhone si attiva da Impostazioni > Fotocamera, accendendo Griglia e Allineamento orizzontale; quest'ultimo aiuta a scattare perfettamente dall'alto.",
        ],
        tabella: {
          didascalia: "Quale angolazione usare a seconda del prodotto.",
          colonne: ["Angolazione", "Quando usarla", "Esempi"],
          righe: [
            ["Dall'alto (90 gradi)", "Piatti piatti o con tanti elementi sul tavolo", "Pizza, colazione completa, tagliere"],
            ["A 45 gradi", "Come lo vede chi è seduto al tavolo", "Panini, primi piatti, tazze"],
            ["Di fronte (0 gradi)", "Prodotti alti, che hanno strati o altezza", "Cocktail, torte a strati, burger"],
          ],
        },
        fonti: [{ titolo: "Apple – Utilizzare gli strumenti della fotocamera di iPhone per configurare gli scatti", url: "https://support.apple.com/it-it/guide/iphone/iph3dc593597/ios" }],
      },
      {
        id: "formato",
        titolo: "Il formato giusto per Instagram",
        paragrafi: [
          "Scatta in verticale. Le foto verticali occupano più spazio nel feed rispetto a quelle quadrate o orizzontali.",
          "Lascia però un po' di margine sopra e sotto il soggetto: lo scatto del telefono è più alto del formato che Instagram accetta dai programmi di pubblicazione, che secondo la documentazione di Meta va da 4:5 (verticale) a 1,91:1 (orizzontale). Una foto più alta viene ritagliata, e senza margine si rischia di tagliare il bicchiere o il bordo del piatto.",
        ],
        fonti: [{ titolo: "Meta for Developers – Instagram Graph API, IG User Media (specifiche delle immagini)", url: "https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media" }],
      },
      {
        id: "checklist",
        titolo: "La checklist prima di scattare",
        paragrafi: ["Dieci controlli che richiedono meno di un minuto:"],
        lista: [
          "Obiettivo pulito.",
          "Flash e luci al soffitto spenti.",
          "Piatto vicino alla finestra, luce di lato.",
          "Bordo del piatto e tavolo puliti.",
          "Via tovaglioli usati, telefoni, chiavi e scontrini dall'inquadratura.",
          "Griglia attiva.",
          "Almeno due angolazioni diverse per ogni piatto.",
          "Scatto verticale con margine sopra e sotto.",
          "Più scatti dello stesso piatto, per scegliere il più nitido.",
          "Colori veri: niente filtri che cambiano l'aspetto del cibo.",
        ],
        prossimo: { testo: "Quante foto servono al mese: ogni quanto pubblicare su Instagram", url: "/guide/ogni-quanto-pubblicare-su-instagram/" },
      },
    ],
    faq: [
      {
        q: "Meglio usare la modalità ritratto?",
        a: "Può aiutare con prodotti alti fotografati di fronte, perché sfoca lo sfondo. Per i piatti fotografati dall'alto non serve: prova entrambe e tieni la foto più naturale.",
      },
      {
        q: "Posso usare foto prese da internet?",
        a: "No: usa foto tue o con una licenza che lo permetta. Le foto di altri sono protette dal diritto d'autore, e i clienti vogliono vedere i tuoi piatti veri.",
      },
      {
        q: "Quante foto devo fare al mese?",
        a: "Per pubblicare 3 volte a settimana bastano una decina di foto buone al mese, completate da qualche grafica.",
      },
    ],
    correlati: ["cosa-pubblicare-su-instagram-bar", "ogni-quanto-pubblicare-su-instagram", "quanto-costa-social-media-manager"],
  },
];

// ---------- funzioni di aiuto ----------

export function urlGruppo(slug) {
  return `/${slug}/`;
}

export function urlArticolo(a) {
  return `/${a.gruppo}/${a.slug}/`;
}

export function articoliDelGruppo(slug) {
  return ARTICOLI.filter((a) => a.gruppo === slug);
}

export function trovaArticolo(gruppo, slug) {
  return ARTICOLI.find((a) => a.gruppo === gruppo && a.slug === slug);
}

export function trovaGruppo(slug) {
  return GRUPPI.find((g) => g.slug === slug);
}

// Testo semplice di un articolo (per contare le parole e per llms-full.txt)
export function senzaLink(t) {
  return t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

export function testoArticolo(a) {
  const parti = [a.titolo, a.rispostaRapida];
  for (const p of a.passi || []) parti.push(p.nome, p.testo);
  for (const s of a.sezioni) {
    parti.push(s.titolo, ...(s.paragrafi || []), ...(s.lista || []));
    if (s.tabella) parti.push(s.tabella.didascalia, ...s.tabella.colonne, ...s.tabella.righe.flat());
  }
  for (const f of a.faq) parti.push(f.q, f.a);
  return senzaLink(parti.join(" "));
}

export function contaParole(a) {
  return testoArticolo(a).split(/\s+/).filter(Boolean).length;
}

export function minutiLettura(a) {
  return Math.max(1, Math.round(contaParole(a) / 200));
}

export function dataItaliana(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}
