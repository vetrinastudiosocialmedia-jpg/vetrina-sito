// Articoli del tema "Google e Google Maps" (pubblicati il 25/11/2026).
// Fonti lette il 24/11/2026. Formato dei campi: vedi lib/articoli.mjs.

const G_RANKING = { titolo: "Google – Suggerimenti per migliorare il posizionamento nella ricerca locale", url: "https://support.google.com/business/answer/7091?hl=it" };
const G_AGGIUNGI = { titolo: "Google – Aggiungere o rivendicare il profilo della tua attività", url: "https://support.google.com/business/answer/2911778?hl=it" };
const G_PROPRIETA = { titolo: "Google – Richiedere la proprietà di un profilo dell'attività", url: "https://support.google.com/business/answer/4566671?hl=it" };
const G_ORARI = { titolo: "Google – Come impostare gli orari speciali", url: "https://support.google.com/business/answer/6303076?hl=it" };
const OPENAI_SEARCH = { titolo: "OpenAI – Come funziona la ricerca web di ChatGPT", url: "https://help.openai.com/en/articles/9237897-chatgpt-search" };
const BRIGHTLOCAL = { titolo: "BrightLocal – Le fonti della ricerca locale di ChatGPT (studio)", url: "https://www.brightlocal.com/learn/local-seo/uncovering-chatgpt-search-sources/" };

export const ARTICOLI_GOOGLE = [
  {
    gruppo: "guide",
    tema: "google",
    chiamata: "google",
    slug: "come-farsi-trovare-su-google-maps",
    titolo: "Come farsi trovare su Google Maps: i 3 fattori che contano",
    titoloScheda: "Come farsi trovare su Google Maps",
    descrizione:
      "Come Google sceglie le attività da mostrare su Maps (pertinenza, distanza, evidenza) e la checklist gratuita per far trovare il tuo bar, ristorante o negozio.",
    rispostaRapida:
      "Google mostra le attività locali in base a tre fattori: pertinenza (quanto la scheda corrisponde alla ricerca), distanza da chi cerca ed evidenza (quanto l'attività è conosciuta, anche per numero di recensioni e voti). Non si può pagare per salire nei risultati locali. Si può però completare e verificare la scheda, tenere gli orari aggiornati, aggiungere foto e rispondere alle recensioni: è tutto gratuito.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "tre-fattori",
        titolo: "I 3 fattori, spiegati semplici",
        tabella: {
          didascalia: "I fattori del posizionamento locale secondo la guida di Google, e quanto puoi influire su ciascuno.",
          colonne: ["Fattore", "Cosa vuol dire", "Quanto puoi influire"],
          righe: [
            ["Pertinenza", "Quanto la tua scheda corrisponde a quello che la persona cerca", "Molto: categoria giusta, descrizione, servizi, attributi"],
            ["Distanza", "Quanto sei lontano da chi cerca (o dal luogo indicato nella ricerca)", "Quasi nulla: conta l'indirizzo corretto"],
            ["Evidenza", "Quanto l'attività è conosciuta: link da altri siti, numero di recensioni e voti", "Abbastanza: recensioni, risposte, presenza online coerente"],
          ],
        },
        paragrafi: [
          "Google precisa che non è possibile richiedere o acquistare un posizionamento migliore nei risultati locali e che i dettagli dell'algoritmo restano riservati. Diffida di chi ti promette il primo posto su Maps.",
        ],
        fonti: [G_RANKING],
      },
      {
        id: "checklist",
        titolo: "La checklist della scheda Google",
        paragrafi: ["Questi sono i punti che Google stesso indica, tradotti in azioni concrete per un'attività locale:"],
        lista: [
          "Scheda rivendicata e verificata: solo così puoi modificarla e rispondere alle recensioni.",
          "Categoria principale precisa: “Pizzeria” e non solo “Ristorante”, se fai pizza.",
          "Indirizzo completo e uguale ovunque: sito, Instagram, Facebook, TheFork, Tripadvisor.",
          "Orari sempre giusti, compresi festivi e chiusure: un cliente che trova chiuso non torna.",
          "Attributi compilati: Wi-Fi, accesso per sedie a rotelle, dehors, pagamento con carta.",
          "Foto vere e recenti: locale, piatti o prodotti, staff, ingresso visto dalla strada.",
          "Risposte alle recensioni, soprattutto a quelle negative.",
        ],
        fonti: [G_RANKING],
        prossimo: { testo: "Come ottenere più recensioni su Google con il link e il QR ufficiali", url: "/guide/come-ottenere-recensioni-google/" },
      },
      {
        id: "errori",
        titolo: "Gli errori che fanno perdere clienti",
        lista: [
          "Aggiungere parole chiave o il nome della città al nome dell'attività (es. “Bar Sport Miglior Caffè Modena”): Google chiede il nome reale.",
          "Due schede per la stessa attività, magari una vecchia con il telefono sbagliato.",
          "Orari estivi lasciati anche d'inverno, o la chiusura per ferie dimenticata.",
          "Solo foto prese da internet o del logo, senza il locale vero.",
        ],
        fonti: [{ titolo: "Google – Linee guida per la rappresentazione della tua attività su Google", url: "https://support.google.com/business/answer/3038177?hl=it" }],
        prossimo: { testo: "Come cambiare gli orari su Google, anche per festivi e chiusure", url: "/guide/cambiare-orari-google/" },
      },
    ],
    faq: [
      { q: "Quanto tempo serve per vedere risultati?", a: "Le modifiche alla scheda compaiono di solito in pochi giorni, ma il posizionamento dipende anche da distanza e notorietà: nessuno può garantire tempi o posizioni." },
      { q: "Serve un sito web per comparire su Google Maps?", a: "No, la scheda è gratuita e funziona anche senza sito. Un sito con le stesse informazioni aiuta però Google e i clienti a fidarsi." },
      { q: "Pagare la pubblicità Google migliora la posizione su Maps?", a: "No: gli annunci compaiono come annunci, separati dai risultati locali gratuiti, che non si possono comprare." },
    ],
    correlati: ["registrare-attivita-google-maps", "cambiare-orari-google", "come-ottenere-recensioni-google"],
  },
  {
    gruppo: "guide",
    tema: "google",
    chiamata: "google",
    slug: "registrare-attivita-google-maps",
    titolo: "Come registrare la tua attività su Google Maps, passo a passo",
    titoloScheda: "Registrare un'attività su Google Maps",
    descrizione:
      "Come aggiungere la tua attività su Google Maps gratis: i passaggi su business.google.com, la verifica, cosa preparare prima e cosa fare se la scheda esiste già.",
    rispostaRapida:
      "Per registrare un'attività su Google Maps vai su business.google.com/add, scegli “Aggiungi la tua attività su Google”, inserisci nome, categoria, indirizzo e contatti, poi scegli uno dei metodi di verifica che Google ti propone. È gratuito. Se cercando il nome trovi che la scheda esiste già, non crearne una nuova: rivendica quella esistente, così non nascono doppioni.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Controlla che la scheda non esista già", testo: "Cerca su Google Maps il nome dell'attività e la città. Se compare, segui la procedura per rivendicarla invece di crearne una nuova." },
      { nome: "Apri business.google.com/add", testo: "Accedi con l'account Google che userai per gestire l'attività (meglio uno dell'attività, non personale)." },
      { nome: "Inserisci i dati", testo: "Nome reale dell'attività, categoria principale, indirizzo completo se i clienti possono venire da te, telefono e sito o profilo social." },
      { nome: "Verifica l'attività", testo: "Scegli uno dei metodi di verifica proposti e segui le istruzioni: Google può chiedere, per esempio, una breve videoregistrazione dell'attività." },
      { nome: "Completa la scheda", testo: "Dopo la verifica aggiungi orari, foto, descrizione, servizi e attributi." },
    ],
    sezioni: [
      {
        id: "cosa-preparare",
        titolo: "Cosa preparare prima di iniziare",
        lista: [
          "Il nome esatto dell'attività, come compare sull'insegna.",
          "La categoria principale più precisa (es. “Gelateria”, “Centro estetico”, “Negozio di abbigliamento”).",
          "L'indirizzo completo, scritto come lo riconosce Google Maps.",
          "Telefono e, se ce l'hai, sito o profilo Instagram.",
          "Orari di apertura e 5–10 foto vere: ingresso, interno, prodotti, staff.",
        ],
        paragrafi: ["Google insiste sull'indirizzo: deve essere preciso e seguire le sue linee guida, perché è quello che ti fa comparire alle persone vicine."],
        fonti: [G_AGGIUNGI],
      },
      {
        id: "verifica",
        titolo: "La verifica: perché serve",
        paragrafi: [
          "Finché la scheda non è verificata non puoi gestirla davvero: Google spiega che la verifica dimostra che sei autorizzato a rappresentare l'attività, ed è uno dei suggerimenti per migliorare la visibilità nella ricerca locale.",
          "Il metodo di verifica dipende dall'attività e Google lo mostra durante la procedura. Se qualcosa non va, la community del Profilo dell'attività e l'assistenza Google sono i canali ufficiali per chiedere aiuto.",
        ],
        fonti: [G_AGGIUNGI, G_RANKING],
        prossimo: { testo: "La scheda esiste già? Come rivendicare un'attività su Google Maps", url: "/guide/rivendicare-attivita-google-maps/" },
      },
      {
        id: "dopo-la-verifica",
        titolo: "Dopo la verifica: i primi 15 minuti",
        paragrafi: ["Una scheda vuota serve a poco. Appena verificata, completa questi campi:"],
        lista: [
          "Orari, compresi quelli speciali per le prossime festività.",
          "Descrizione in 2–3 frasi: cosa fai, per chi, cosa ti distingue.",
          "Servizi o menu, con prezzi se li hai.",
          "Attributi (Wi-Fi, dehors, accessibilità, pagamenti).",
          "Le prime foto e il link per chiedere recensioni ai clienti contenti.",
        ],
        prossimo: { testo: "Come farsi trovare su Google Maps: la checklist completa", url: "/guide/come-farsi-trovare-su-google-maps/" },
      },
    ],
    faq: [
      { q: "Registrare l'attività su Google costa?", a: "No: aggiungere, rivendicare e gestire il profilo dell'attività è gratuito." },
      { q: "Posso registrarla se lavoro a domicilio?", a: "Sì, come attività che serve una zona: in quel caso puoi indicare l'area servita invece di mostrare l'indirizzo." },
      { q: "Meglio usare il mio account Gmail personale?", a: "Meglio un account dell'attività, a cui poi aggiungere altre persone come gestori: se un giorno cambi collaboratori non perdi la scheda." },
    ],
    correlati: ["rivendicare-attivita-google-maps", "come-farsi-trovare-su-google-maps", "cambiare-orari-google"],
  },
  {
    gruppo: "guide",
    tema: "google",
    chiamata: "google",
    slug: "rivendicare-attivita-google-maps",
    titolo: "Come rivendicare un'attività già presente su Google Maps",
    titoloScheda: "Rivendicare un'attività su Google Maps",
    descrizione:
      "La tua attività è già su Google Maps ma non la gestisci tu? Come rivendicarla da computer o smartphone e come chiedere la proprietà a chi la gestisce oggi.",
    rispostaRapida:
      "Se la scheda non è verificata, apri Google Maps, cerca la tua attività, seleziona “Rivendica questa attività” e poi “Gestisci ora”, quindi completa la verifica. Se invece è già gestita da qualcun altro, vai su business.google.com/add, cerca l'attività e scegli “Richiedi l'accesso”: il proprietario attuale ha tre giorni per rispondere, poi in alcuni casi puoi verificarla tu.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "non-verificata",
        titolo: "Caso 1: la scheda esiste ma nessuno la gestisce",
        paragrafi: ["Succede spesso: Google crea la scheda da solo, o un cliente l'ha suggerita. Per prenderne il controllo:"],
        lista: [
          "Da computer: apri Google Maps, cerca nome e città, seleziona la tua attività, poi “Rivendica questa attività” e “Gestisci ora”. Scegli un metodo di verifica e segui le istruzioni.",
          "Da smartphone: nell'app Google Maps apri la scheda, tocca “Informazioni”, poi “Rivendica questa attività” e “Gestisci ora”, e completa la verifica.",
        ],
        fonti: [G_AGGIUNGI],
      },
      {
        id: "gestita-da-altri",
        titolo: "Caso 2: la scheda è già gestita da qualcun altro",
        paragrafi: [
          "Capita quando la scheda l'ha creata un ex socio, un precedente gestore o un'agenzia. In questo caso si chiede la proprietà:",
        ],
        lista: [
          "Vai su business.google.com/add e inserisci nome e indirizzo dell'attività.",
          "Scegli la tua attività dall'elenco: potresti vedere il messaggio “Un altro utente potrebbe gestire questo profilo dell'attività”.",
          "Seleziona “Richiedi l'accesso”, compila il modulo e invia.",
          "Il proprietario attuale riceve un'email e ha tre giorni per rispondere. Tu ricevi un'email di conferma per seguire la richiesta.",
          "Se non risponde entro tre giorni, dall'email di conferma puoi selezionare “Visualizza richiesta” e poi “Verifica”, quando questa opzione è disponibile.",
        ],
        fonti: [G_PROPRIETA],
      },
      {
        id: "consigli",
        titolo: "Prima di chiedere la proprietà",
        lista: [
          "Prova a contattare chi gestiva la scheda: un trasferimento concordato è più veloce.",
          "Se la richiesta viene rifiutata puoi suggerire una modifica alla scheda o fare ricorso.",
          "Una volta ottenuto l'accesso, controlla chi altro è proprietario o gestore e togli le persone che non lavorano più con te: chi è proprietario può modificare e trasferire la scheda.",
        ],
        fonti: [G_PROPRIETA, { titolo: "Google – Proteggere il profilo dell'attività", url: "https://support.google.com/business/answer/14509283?hl=it" }],
        prossimo: { testo: "Dopo la verifica: come completare la scheda per farti trovare", url: "/guide/come-farsi-trovare-su-google-maps/" },
      },
    ],
    faq: [
      { q: "E se trovo due schede per la stessa attività?", a: "Rivendica quella giusta e segnala il doppione: Google ha una sezione di aiuto dedicata ai profili duplicati e ai problemi di proprietà." },
      { q: "Rivendicare la scheda costa?", a: "No, è gratuito come la creazione della scheda." },
      { q: "L'agenzia che mi segue può gestire la scheda?", a: "Sì, ma come gestore aggiunto da te: la proprietà conviene tenerla sull'account dell'attività." },
    ],
    correlati: ["registrare-attivita-google-maps", "come-farsi-trovare-su-google-maps", "cambiare-orari-google"],
  },
  {
    gruppo: "guide",
    tema: "google",
    chiamata: "google",
    slug: "cambiare-orari-google",
    titolo: "Come cambiare gli orari su Google (anche festivi e chiusure)",
    titoloScheda: "Cambiare gli orari su Google, anche festivi",
    descrizione:
      "Come modificare gli orari della tua attività su Google e Maps: orari normali, orari speciali per festivi e ferie, chiusure lunghe e gli errori da evitare.",
    rispostaRapida:
      "Dal profilo dell'attività scegli “Modifica profilo” e poi “Orario”. Per festivi e cambi temporanei usa gli “Orari speciali”, validi per chiusure o variazioni fino a 6 giorni consecutivi; per chiusure di 7 giorni o più segna l'attività come “Chiusa temporaneamente”. Google consiglia di confermare anche le festività in cui sei aperto con l'orario normale, così i clienti sanno che l'informazione è giusta.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Apri il profilo", testo: "Vai su business.google.com o cerca il nome della tua attività su Google mentre sei collegato all'account che la gestisce." },
      { nome: "Modifica profilo > Orario", testo: "Seleziona “Modifica profilo”, poi la scheda “Orario”." },
      { nome: "Orari speciali > Modifica", testo: "In “Orario di apertura” seleziona Modifica accanto a “Orari speciali”. Conferma le date proposte con “Rivedi” o usa “Aggiungi una data”." },
      { nome: "Inserisci l'orario", testo: "Se sei aperto togli la spunta da “Chiuso” e scrivi gli orari; per più fasce scegli Altro > Aggiungi orario. Se sei chiuso lascia “Chiuso”." },
      { nome: "Salva", testo: "Seleziona Salva. Gli orari speciali, in quella data, prendono il posto di quelli normali." },
    ],
    sezioni: [
      {
        id: "quale-opzione",
        titolo: "Quale opzione usare",
        tabella: {
          didascalia: "Le opzioni di Google per gli orari, secondo la guida ufficiale sugli orari speciali.",
          colonne: ["Situazione", "Cosa usare"],
          righe: [
            ["Cambio stabile (nuovo orario invernale)", "Orario di apertura normale"],
            ["Natale, Capodanno, Pasqua, ponti", "Orari speciali (anche se sei aperto come sempre)"],
            ["Chiusura fino a 6 giorni consecutivi", "Orari speciali con “Chiuso”"],
            ["Ferie o lavori di 7 giorni o più", "Chiusa temporaneamente"],
            ["Asporto, consegna o servizi con orari diversi", "Altri orari"],
          ],
        },
        paragrafi: [
          "Attenzione: perché gli orari speciali compaiano, l'orario di apertura deve essere impostato come “Aperta (orario standard specificato)”.",
        ],
        fonti: [G_ORARI],
      },
      {
        id: "casi-difficili",
        titolo: "I casi che creano confusione",
        lista: [
          "Orari dopo mezzanotte: una fascia di orario speciale non può superare le 24 ore. Per una serata dalle 19 alle 2, dividi tra due giorni (19:00–00:00 e 00:00–02:00).",
          "Pranzo e cena: aggiungi due fasce nello stesso giorno con Altro > Aggiungi orario.",
          "Il giorno dopo un festivo: l'orario speciale vale solo per la data scelta; ricontrolla che il giorno seguente torni quello normale.",
        ],
        fonti: [G_ORARI],
      },
      {
        id: "promemoria",
        titolo: "Un promemoria che evita brutte sorprese",
        paragrafi: [
          "Il cliente che trova la serranda abbassata mentre Google diceva “aperto” difficilmente torna, e a volte lo racconta in una recensione. Segna in calendario due momenti all'anno, a fine novembre e a fine maggio, per controllare orari, festività e ferie in un colpo solo.",
        ],
        prossimo: { testo: "Gli altri controlli per farti trovare su Google Maps", url: "/guide/come-farsi-trovare-su-google-maps/" },
      },
    ],
    faq: [
      { q: "Quanto ci mettono gli orari nuovi a comparire?", a: "Di solito poco, ma le modifiche possono passare da un controllo di Google: aggiorna gli orari con qualche giorno di anticipo." },
      { q: "Devo inserire gli orari speciali anche se il 26 dicembre sono aperto come sempre?", a: "Sì, Google lo consiglia: così i clienti vedono che l'orario di quel giorno è confermato." },
      { q: "Posso aggiornare gli orari dal telefono?", a: "Sì, anche dall'app Google Maps: Modifica profilo, poi Informazioni sull'attività." },
    ],
    correlati: ["come-farsi-trovare-su-google-maps", "registrare-attivita-google-maps", "whatsapp-business-messaggio-automatico"],
  },
  {
    gruppo: "guide",
    tema: "google",
    chiamata: "google",
    slug: "attivita-su-chatgpt",
    titolo: "Il tuo locale compare su ChatGPT? Come verificarlo e cosa fare",
    titoloScheda: "La tua attività compare su ChatGPT?",
    descrizione:
      "Sempre più persone chiedono a ChatGPT dove mangiare o a chi rivolgersi. Come controllare se la tua attività compare, da quali fonti dipende e cosa puoi fare.",
    rispostaRapida:
      "Per saperlo fai una prova: chiedi a ChatGPT, con la ricerca web attiva, la stessa cosa che chiederebbe un cliente, per esempio “pizzeria a Carpi aperta la domenica”. ChatGPT cerca sul web e cita le fonti, e OpenAI dice che non esiste un modo per garantirsi le prime posizioni. Quello che puoi fare è avere informazioni giuste e uguali ovunque: sito, scheda Google, social e recensioni.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Apri ChatGPT con la ricerca web", testo: "La ricerca parte da sola quando serve, oppure puoi sceglierla dagli strumenti (“Cerca”)." },
      { nome: "Fai 3 domande da cliente", testo: "Una generica (“bar per colazione a [città]”), una specifica (“[servizio] a [città] aperto il lunedì”) e una con il tuo nome." },
      { nome: "Guarda le fonti", testo: "Apri le citazioni o il pannello Fonti: vedi da quali siti ChatGPT ha preso le informazioni su di te e sui concorrenti." },
      { nome: "Correggi alla fonte", testo: "Se trovi orari o prezzi sbagliati, correggili dove sono scritti: sito, scheda Google, social, directory." },
    ],
    sezioni: [
      {
        id: "come-cerca",
        titolo: "Come ChatGPT trova le attività",
        paragrafi: [
          "Secondo la guida di OpenAI, quando la domanda lo richiede ChatGPT cerca sul web, a volte tramite fornitori di ricerca partner, riscrivendo la richiesta in una o più ricerche mirate. Può usare la posizione approssimativa per risultati locali e mostra le fonti con citazioni.",
          "OpenAI precisa che il posizionamento nella ricerca di ChatGPT dipende da diversi fattori legati all'affidabilità e alla pertinenza, e che non esiste un modo per garantirsi le prime posizioni.",
        ],
        fonti: [OPENAI_SEARCH],
      },
      {
        id: "fonti",
        titolo: "Da quali fonti dipende",
        paragrafi: [
          "Uno studio di BrightLocal sulle fonti usate da ChatGPT per le ricerche locali ha trovato che la maggior parte sono siti delle attività (58%), seguiti da pagine che le citano (27%) e da directory (15%). È uno studio su un campione, non una regola fissa, ma il messaggio è chiaro: il tuo sito e quello che si dice di te contano.",
        ],
        fonti: [BRIGHTLOCAL],
        prossimo: { testo: "La checklist per farsi trovare su Google Maps (vale anche per l'IA)", url: "/guide/come-farsi-trovare-su-google-maps/" },
      },
      {
        id: "cosa-fare",
        titolo: "Cosa puoi fare in pratica",
        lista: [
          "Avere un sito, anche di una pagina, con nome, indirizzo, orari, servizi e prezzi scritti in testo (non solo in foto).",
          "Tenere identici nome, indirizzo e telefono su sito, scheda Google, Instagram, Facebook e directory.",
          "Scrivere sul sito le risposte alle domande che i clienti fanno davvero: parcheggio, prenotazioni, opzioni senza glutine.",
          "Raccogliere recensioni vere con regolarità e rispondere.",
          "Diffidare di chi promette di “posizionarti su ChatGPT”: nessuno può garantirlo.",
        ],
      },
    ],
    faq: [
      { q: "Posso pagare per comparire su ChatGPT?", a: "OpenAI spiega che non c'è un modo per garantirsi le prime posizioni nella ricerca di ChatGPT." },
      { q: "Le stesse regole valgono per Gemini e gli altri assistenti?", a: "Funzionano in modo simile: cercano sul web e riassumono. Informazioni chiare e coerenti aiutano con tutti." },
      { q: "Ogni quanto rifare la prova?", a: "Una volta ogni due o tre mesi, e dopo ogni cambio importante (orari, indirizzo, servizi)." },
    ],
    correlati: ["come-farsi-trovare-su-google-maps", "registrare-attivita-google-maps", "social-media-manager-con-ia"],
  },
];
