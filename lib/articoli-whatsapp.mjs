// Articoli del tema "WhatsApp Business" (pubblicati il 25/11/2026).
// Fonti lette il 24/11/2026. Formato dei campi: vedi lib/articoli.mjs.

const WA_BLOG = { titolo: "WhatsApp – Presentazione dell'app WhatsApp Business", url: "https://blog.whatsapp.com/introducing-the-whats-app-business-app?lang=it" };
const MAILCHIMP_WA = { titolo: "Mailchimp – WhatsApp Business: cos'è e come si differenzia da WhatsApp Messenger", url: "https://mailchimp.com/it/resources/whatsapp-business/" };
const SHOPIFY_WA = { titolo: "Shopify – Guida a WhatsApp Business (messaggi automatici)", url: "https://it.shopify.com/blog/whatsapp-business" };
const WA_DESKTOP = { titolo: "WhatsApp – Scarica WhatsApp per computer (dispositivi collegati)", url: "https://www.whatsapp.com/download/desktop?lang=it" };
const TC_BROADCAST = { titolo: "TechCrunch – WhatsApp limiterà i messaggi broadcast (marzo 2025)", url: "https://techcrunch.com/2025/03/18/whatsapp-will-soon-limit-number-of-broadcast-messages-users-and-businesses-can-send" };
const GARANTE_SPAM = { titolo: "Garante privacy – Linee guida contro lo spam: offerte su WhatsApp solo con consenso", url: "https://www.garanteprivacy.it/garante/doc.jsp?ID=2549317" };
const GARANTE_GRUPPO = { titolo: "Garante privacy – Provvedimento del 16 gennaio 2025 (promozioni in un gruppo WhatsApp senza consenso)", url: "https://www.garanteprivacy.it/garante/doc.jsp?ID=10112726" };

export const ARTICOLI_WHATSAPP = [
  {
    gruppo: "guide",
    tema: "whatsapp",
    slug: "whatsapp-business-come-funziona",
    titolo: "WhatsApp Business: come funziona e quanto costa",
    titoloScheda: "WhatsApp Business: come funziona e costi",
    descrizione:
      "Cos'è WhatsApp Business, cosa cambia rispetto a WhatsApp normale, quanto costa (l'app è gratis) e quali funzioni usare subito in un bar, un ristorante o un negozio.",
    rispostaRapida:
      "WhatsApp Business è l'app gratuita di WhatsApp pensata per le piccole attività: si scarica come quella normale, ma aggiunge un profilo con indirizzo, orari e sito, il catalogo, i messaggi automatici di benvenuto e di assenza, le risposte rapide e le etichette per organizzare le chat. L'app non ha costi; si paga solo la WhatsApp Business Platform (API), pensata per aziende con grandi volumi.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "differenze",
        titolo: "WhatsApp e WhatsApp Business: le differenze",
        tabella: {
          didascalia: "Confronto tra le due app per un'attività locale.",
          colonne: ["", "WhatsApp", "WhatsApp Business (app)"],
          righe: [
            ["Pensata per", "Chat personali", "Piccole attività e professionisti"],
            ["Costo", "Gratis", "Gratis"],
            ["Profilo", "Nome, foto, stato", "Profilo dell'attività con indirizzo, orari, email, sito"],
            ["Messaggi automatici", "No", "Benvenuto e assenza"],
            ["Risposte rapide ed etichette", "No", "Sì"],
            ["Catalogo prodotti o servizi", "No", "Sì"],
          ],
        },
        paragrafi: [
          "Lo stesso numero non può essere attivo contemporaneamente sulle due app: se vuoi usare il numero del negozio su WhatsApp Business, lo togli da WhatsApp normale. Molte attività usano un secondo numero dedicato al lavoro.",
        ],
        fonti: [MAILCHIMP_WA, WA_BLOG],
      },
      {
        id: "quanto-costa",
        titolo: "Quanto costa davvero",
        paragrafi: [
          "L'app WhatsApp Business è gratuita da scaricare e da usare, senza limiti sulle chat normali con i clienti. Esiste poi la WhatsApp Business Platform, cioè l'API collegata a software esterni, che si paga per messaggio: serve a chi gestisce grandi volumi o automazioni complesse, non a un bar o a un parrucchiere.",
          "Meta propone anche servizi opzionali a pagamento, come la verifica dell'account: utili per alcuni, non necessari per iniziare.",
        ],
        fonti: [MAILCHIMP_WA],
      },
      {
        id: "funzioni-da-usare",
        titolo: "Le 5 funzioni da attivare subito",
        lista: [
          "Profilo dell'attività completo: indirizzo, orari, sito o Instagram, una descrizione di una riga.",
          "Messaggio di benvenuto: risponde da solo a chi ti scrive la prima volta.",
          "Messaggio di assenza: avvisa chi scrive a negozio chiuso quando risponderai.",
          "Risposte rapide: i testi che ripeti ogni giorno (menu, listino, come arrivare) richiamati con una scorciatoia.",
          "Etichette: per distinguere a colpo d'occhio prenotazioni, ordini da ritirare e clienti da richiamare.",
        ],
        prossimo: { testo: "Come impostare il messaggio automatico, con testi pronti", url: "/guide/whatsapp-business-messaggio-automatico/" },
      },
    ],
    faq: [
      { q: "Posso passare a WhatsApp Business senza perdere le chat?", a: "Sì: durante la configurazione l'app propone di usare il numero già attivo su WhatsApp e di trasferire le chat. Fai comunque un backup prima." },
      { q: "I clienti vedono che sono un'attività?", a: "Sì, il profilo mostra che è un account aziendale con le informazioni che hai inserito." },
      { q: "Serve la Partita IVA per usarlo?", a: "No, l'app si attiva con un numero di telefono come quella normale." },
    ],
    correlati: ["whatsapp-business-messaggio-automatico", "whatsapp-business-messaggio-a-piu-contatti", "whatsapp-business-su-pc"],
  },
  {
    gruppo: "guide",
    tema: "whatsapp",
    slug: "whatsapp-business-messaggio-automatico",
    titolo: "WhatsApp Business: come impostare il messaggio automatico",
    titoloScheda: "WhatsApp Business: il messaggio automatico",
    descrizione:
      "Come impostare su WhatsApp Business il messaggio di benvenuto e quello di assenza, quando partono, e 6 testi pronti per bar, ristoranti, negozi e centri estetici.",
    rispostaRapida:
      "In WhatsApp Business apri Impostazioni, poi Strumenti attività: lì trovi “Messaggio di benvenuto” e “Messaggio d'assenza”. Il benvenuto parte da solo con chi ti scrive per la prima volta o dopo 14 giorni senza messaggi; l'assenza parte quando sei chiuso, sempre o in orari che scegli tu. Scrivi testi brevi che dicano quando risponderai e dove trovare menu o listino.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Apri Strumenti attività", testo: "In WhatsApp Business vai su Impostazioni (su Android dai tre puntini in alto) e poi su Strumenti attività." },
      { nome: "Attiva il messaggio di benvenuto", testo: "Tocca “Messaggio di benvenuto”, attiva l'invio, scrivi il testo e scegli i destinatari." },
      { nome: "Attiva il messaggio d'assenza", testo: "Tocca “Messaggio d'assenza”, attivalo e scegli quando inviarlo: sempre, in orari personalizzati o fuori dall'orario di apertura del profilo." },
      { nome: "Salva le risposte rapide", testo: "Sempre in Strumenti attività, crea le risposte rapide con una scorciatoia (es. /menu) per i testi che mandi più spesso." },
    ],
    sezioni: [
      {
        id: "differenza",
        titolo: "Benvenuto, assenza e risposte rapide: chi fa cosa",
        tabella: {
          didascalia: "I tre strumenti di messaggistica dell'app WhatsApp Business.",
          colonne: ["Strumento", "Quando parte", "A cosa serve"],
          righe: [
            ["Messaggio di benvenuto", "Prima chat di un cliente o dopo 14 giorni di inattività", "Presentarti e dare le informazioni base"],
            ["Messaggio d'assenza", "Negli orari che scegli (es. fuori orario)", "Dire che sei chiuso e quando risponderai"],
            ["Risposte rapide", "Quando le richiami tu con la scorciatoia", "Rispondere in pochi secondi alle domande ricorrenti"],
          ],
        },
        fonti: [SHOPIFY_WA],
      },
      {
        id: "testi-pronti",
        titolo: "6 testi pronti",
        paragrafi: ["Brevi, con l'informazione che il cliente cerca davvero. Sostituisci le parti tra parentesi quadre."],
        lista: [
          "Benvenuto ristorante: “Ciao e grazie per averci scritto! Per prenotare indicaci giorno, ora e numero di persone. Il menu è qui: [link]. Ti rispondiamo appena possibile.”",
          "Benvenuto bar: “Ciao! Siamo aperti [orari]. Per ordini di torte e vassoi scrivici con almeno [2] giorni di anticipo.”",
          "Benvenuto centro estetico: “Ciao, grazie per il messaggio! Dicci il trattamento che ti interessa e due giorni comodi per te: ti proponiamo il primo orario libero.”",
          "Assenza serale: “Ora siamo chiusi. Ti rispondiamo domani dalle [ora]. Se vuoi prenotare, lasciaci pure giorno e orario.”",
          "Assenza per ferie: “Siamo in ferie fino al [data]. Leggiamo tutti i messaggi al rientro. Buone vacanze anche a te!”",
          "Assenza durante il servizio: “Siamo in pieno servizio! Ti rispondiamo appena possibile, entro [tempo].”",
        ],
        prossimo: { testo: "Come ottenere recensioni con un messaggio WhatsApp dopo la visita", url: "/guide/come-ottenere-recensioni-google/" },
      },
      {
        id: "errori",
        titolo: "Errori da evitare",
        lista: [
          "Testi lunghissimi: il cliente li legge sul telefono, tre righe bastano.",
          "Promettere risposte “subito” se non puoi: meglio un tempo realistico.",
          "Dimenticare di aggiornare l'assenza dopo le ferie.",
          "Usare il messaggio automatico per mandare pubblicità: serve a informare chi ti ha scritto.",
        ],
        prossimo: { testo: "Come cambiare gli orari su Google, così combaciano con quelli di WhatsApp", url: "/guide/cambiare-orari-google/" },
      },
    ],
    faq: [
      { q: "WhatsApp normale ha il messaggio automatico?", a: "No: benvenuto e assenza sono funzioni dell'app WhatsApp Business." },
      { q: "Posso usare un messaggio d'assenza diverso per le ferie?", a: "Sì: cambia il testo prima di partire e scegli l'invio “sempre” per quei giorni. Al rientro rimetti il messaggio serale." },
      { q: "Posso escludere alcuni contatti?", a: "Sì, per entrambi i messaggi puoi scegliere a chi inviarli, per esempio escludendo fornitori o familiari." },
    ],
    correlati: ["whatsapp-business-come-funziona", "whatsapp-business-messaggio-a-piu-contatti", "whatsapp-business-su-pc"],
  },
  {
    gruppo: "guide",
    tema: "whatsapp",
    slug: "whatsapp-business-messaggio-a-piu-contatti",
    titolo: "Come inviare un messaggio a più clienti con WhatsApp Business",
    titoloScheda: "WhatsApp Business: messaggi a più clienti",
    descrizione:
      "Come mandare lo stesso messaggio a più clienti su WhatsApp Business con le liste broadcast: limiti, consenso dei clienti richiesto dal Garante e alternative.",
    rispostaRapida:
      "Con le liste broadcast di WhatsApp Business invii lo stesso messaggio a più clienti, che lo ricevono in una chat privata con te. Ogni lista può avere fino a 256 contatti e il messaggio arriva solo a chi ha salvato il tuo numero in rubrica. Per le promozioni serve il consenso del cliente: il Garante privacy ha sanzionato attività che hanno mandato offerte su WhatsApp senza averlo.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Raccogli il consenso", testo: "Chiedi al cliente, anche per iscritto in chat, se vuole ricevere novità e offerte su WhatsApp, e conserva la risposta." },
      { nome: "Chiedi di salvare il tuo numero", testo: "Senza il tuo numero in rubrica il cliente non riceve i messaggi della lista." },
      { nome: "Crea la lista dal telefono", testo: "Nell'app tocca il menu (tre puntini o Impostazioni), poi “Nuovo broadcast”/“Liste broadcast”, scegli i contatti e conferma." },
      { nome: "Scrivi un messaggio utile", testo: "Una novità concreta, breve, con un modo semplice per non ricevere più messaggi (“rispondi STOP”)." },
    ],
    sezioni: [
      {
        id: "broadcast-gruppo",
        titolo: "Lista broadcast o gruppo? Meglio la lista",
        tabella: {
          didascalia: "Differenze pratiche tra lista broadcast e gruppo WhatsApp.",
          colonne: ["", "Lista broadcast", "Gruppo"],
          righe: [
            ["Chi vede i numeri degli altri", "Nessuno: ogni cliente riceve una chat privata", "Tutti i membri"],
            ["Risposte", "Arrivano solo a te", "Le vedono tutti"],
            ["Requisito", "Il cliente deve aver salvato il tuo numero", "Nessuno, ma serve il consenso per aggiungerlo"],
          ],
        },
        paragrafi: [
          "Il gruppo espone il numero di ogni cliente a tutti gli altri: il Garante privacy, con un provvedimento del 16 gennaio 2025, ha sanzionato un'attività che aveva inserito i clienti in un gruppo WhatsApp per mandare promozioni senza informativa e senza consenso.",
        ],
        fonti: [GARANTE_GRUPPO],
      },
      {
        id: "consenso",
        titolo: "Il consenso: la regola da non saltare",
        paragrafi: [
          "Per il Garante privacy le offerte commerciali via WhatsApp, SMS o social si possono mandare solo con il consenso preventivo del cliente. Avere il suo numero perché ha prenotato non basta: il consenso va chiesto in modo chiaro e libero, e il cliente deve poter smettere di ricevere messaggi quando vuole.",
          "Un modo semplice: alla prima chat, chiedi “Vuoi ricevere su WhatsApp le nostre novità, al massimo due volte al mese?”. Segna con un'etichetta chi risponde sì.",
        ],
        fonti: [GARANTE_SPAM],
      },
      {
        id: "limiti",
        titolo: "I limiti da conoscere",
        lista: [
          "Fino a 256 contatti per lista; puoi creare più liste.",
          "Il messaggio arriva solo a chi ha salvato il tuo numero.",
          "Le liste si creano dal telefono principale, non dal computer.",
          "WhatsApp ha annunciato nel 2025 limiti mensili ai messaggi broadcast per ridurre lo spam: il numero esatto può cambiare e l'app mostra quanti invii restano.",
        ],
        fonti: [TC_BROADCAST],
        prossimo: { testo: "Usare WhatsApp Business dal computer: cosa si può fare e cosa no", url: "/guide/whatsapp-business-su-pc/" },
      },
    ],
    faq: [
      { q: "I clienti capiscono che è un messaggio a più persone?", a: "Lo ricevono come chat privata con te. Se il testo è generico si intuisce, per questo conviene personalizzarlo per gruppi (es. clienti del pranzo)." },
      { q: "Ogni quanto posso scrivere?", a: "Poche volte al mese, solo con novità utili: troppi messaggi portano a blocchi e segnalazioni." },
      { q: "E se ho più di 256 clienti?", a: "Puoi dividerli in più liste. Per grandi volumi esiste la WhatsApp Business Platform, a pagamento." },
    ],
    correlati: ["whatsapp-business-come-funziona", "whatsapp-business-messaggio-automatico", "come-ottenere-recensioni-google"],
  },
  {
    gruppo: "guide",
    tema: "whatsapp",
    slug: "whatsapp-business-su-pc",
    titolo: "WhatsApp Business sul computer: come usarlo da PC",
    titoloScheda: "WhatsApp Business sul computer (PC e Mac)",
    descrizione:
      "Come usare WhatsApp Business dal computer con l'app per Windows e Mac o con WhatsApp Web: collegamento con QR, fino a 4 dispositivi e cosa resta sul telefono.",
    rispostaRapida:
      "Scarica WhatsApp per Windows o Mac dalla pagina ufficiale, oppure apri web.whatsapp.com nel browser. Sul telefono apri WhatsApp Business, vai su Dispositivi collegati, tocca “Collega un dispositivo” e inquadra il codice QR. Puoi collegare fino a quattro dispositivi oltre al telefono principale, che serve comunque per registrare l'account e collegare nuovi computer.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Scegli app o browser", testo: "L'app per Windows si scarica dal Microsoft Store, quella per Mac dalla pagina di download di WhatsApp. In alternativa usa web.whatsapp.com." },
      { nome: "Apri Dispositivi collegati", testo: "Sul telefono: su Android dal menu con i tre puntini, su iPhone da Impostazioni." },
      { nome: "Collega il computer", testo: "Tocca “Collega un dispositivo” e inquadra il QR che compare sullo schermo del computer." },
      { nome: "Controlla le sessioni", testo: "Dalla stessa schermata vedi i computer collegati e puoi scollegarli in qualsiasi momento." },
    ],
    sezioni: [
      {
        id: "app-o-web",
        titolo: "App per computer o WhatsApp Web?",
        tabella: {
          didascalia: "Differenze pratiche tra le due modalità per usare WhatsApp Business da computer.",
          colonne: ["", "App Windows / Mac", "WhatsApp Web"],
          righe: [
            ["Installazione", "Sì (Windows 10 64 bit versione 1903 o successive, Mac)", "No, basta il browser"],
            ["Notifiche", "Come un programma, anche a finestra chiusa", "Solo con la scheda del browser aperta"],
            ["Ideale per", "Il computer della cassa o dell'ufficio", "Computer condivisi o usati di rado"],
          ],
        },
        fonti: [WA_DESKTOP],
      },
      {
        id: "cosa-cambia",
        titolo: "Cosa si fa bene dal computer (e cosa no)",
        paragrafi: [
          "Dal computer si risponde più velocemente, si copiano i testi dal menu o dal listino e si inviano file e foto salvati sul PC. È comodo per chi gestisce prenotazioni o preventivi.",
          "Alcune cose restano legate al telefono principale: la registrazione dell'account, il collegamento di nuovi dispositivi e la creazione delle liste broadcast.",
        ],
        fonti: [WA_DESKTOP],
        prossimo: { testo: "Le risposte rapide e i messaggi automatici da impostare prima", url: "/guide/whatsapp-business-messaggio-automatico/" },
      },
      {
        id: "sicurezza",
        titolo: "Due regole di sicurezza",
        lista: [
          "Su un computer condiviso, scollega la sessione a fine giornata da Dispositivi collegati.",
          "Controlla ogni tanto l'elenco dei dispositivi: se ne vedi uno che non riconosci, scollegalo subito.",
        ],
      },
    ],
    faq: [
      { q: "Posso usare WhatsApp Business sul PC con il telefono spento?", a: "Sì, i dispositivi collegati funzionano anche quando il telefono è spento; se però il telefono principale resta inutilizzato a lungo, i dispositivi collegati vengono scollegati." },
      { q: "Più persone possono rispondere dallo stesso numero?", a: "Sì, fino a quattro dispositivi collegati insieme, per esempio la cassa e l'ufficio." },
      { q: "Serve un account diverso per il computer?", a: "No, è lo stesso account del telefono: cambia solo dove leggi e rispondi." },
    ],
    correlati: ["whatsapp-business-come-funziona", "whatsapp-business-messaggio-automatico", "whatsapp-business-messaggio-a-piu-contatti"],
  },
];
