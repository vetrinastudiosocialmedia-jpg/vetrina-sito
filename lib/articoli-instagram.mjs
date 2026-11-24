// Articoli del tema "Instagram" (pubblicati il 25/11/2026).
// Fonti lette il 24/11/2026. Formato dei campi: vedi lib/articoli.mjs.

const IG_RISOLUZIONE = { titolo: "Instagram – Risoluzione delle foto condivise", url: "https://help.instagram.com/1631821640426723" };
const BUFFER_MISURE = { titolo: "Buffer – Instagram image size guide 2026", url: "https://buffer.com/library/instagram-image-size" };
const GRIGLIA_34 = { titolo: "Multiplayer.it – Reels fino a 3 minuti e griglia rettangolare (gennaio 2025)", url: "https://multiplayer.it/notizie/instagram-rivoluziona-i-reels-ora-fino-a-3-minuti-e-nuovi-layout-per-i-profili.html" };
const REELS_3MIN = { titolo: "Social Media Today – Instagram porta i Reels a 3 minuti", url: "https://www.socialmediatoday.com/news/instagram-officially-expands-reels-length-to-3-minutes/737766/" };
const CAROSELLO_20 = { titolo: "Social Media Today – I caroselli arrivano a 20 elementi", url: "https://www.socialmediatoday.com/news/instagram-expands-carousels-to-20-frames/723792/" };
const HASHTAG_5 = { titolo: "Digital Trends – Instagram limita gli hashtag a cinque per post", url: "https://www.digitaltrends.com/social-media/instagram-now-limits-you-to-five-hashtags-per-post/" };
const SPROUT_ORARI = { titolo: "Sprout Social – Best times to post on Instagram in 2026", url: "https://sproutsocial.com/insights/best-times-to-post-on-instagram/" };
const BUFFER_ORARI = { titolo: "Buffer – Gli orari migliori per pubblicare su Instagram nel 2026 (9,6 milioni di post)", url: "https://buffer.com/it/resources/migliori-orari-pubblicare-instagram" };
const META_REELS = { titolo: "Meta for Creators – Reels best practices", url: "https://creators.facebook.com/reels-best-practices-tips-tricks" };
const IG_ORIGINALI = { titolo: "Instagram – Linee guida sui contenuti originali", url: "https://creators.instagram.com/original-content-guidelines/" };
const LOGO_REELS = { titolo: "Social Media Today – Mosseri: il proprio logo sui Reel non riduce la copertura", url: "https://www.socialmediatoday.com/news/instagram-clarifies-that-including-your-own-logo-on-a-reel-is-ok/730852/" };
const SPROUT_BIO = { titolo: "Sprout Social – Instagram bios for businesses", url: "https://sproutsocial.com/insights/instagram-bios-for-businesses/" };
const LINK_BIO = { titolo: "Il Post – Sui profili Instagram ora si possono inserire fino a 5 link", url: "https://www.ilpost.it/2023/04/20/5-link-bio-instagram/" };

export const ARTICOLI_INSTAGRAM = [
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "dimensioni-post-instagram",
    titolo: "Dimensioni dei post Instagram 2026: tutti i formati",
    titoloScheda: "Dimensioni post Instagram 2026",
    descrizione:
      "Le misure giuste per post, caroselli, Stories e Reels su Instagram nel 2026: tabella in pixel, il formato 3:4 della griglia e quale scegliere per non farsi tagliare.",
    rispostaRapida:
      "Instagram carica le foto fino a 1080 pixel di larghezza. Per il feed il formato più sicuro è verticale 4:5, cioè 1080 × 1350 pixel; il quadrato è 1080 × 1080 e l'orizzontale 1080 × 566. Stories e Reels sono 9:16, 1080 × 1920. Dal 2025 la griglia del profilo mostra le anteprime in 3:4: tieni testi e soggetti al centro per non farli tagliare.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "tabella-misure",
        titolo: "La tabella delle misure",
        tabella: {
          didascalia: "Misure consigliate in pixel. Larghezza massima 1080 px secondo Instagram; proporzioni secondo la guida Buffer 2026.",
          colonne: ["Formato", "Proporzione", "Pixel", "Quando usarlo"],
          righe: [
            ["Post verticale", "4:5", "1080 × 1350", "Il più usato: occupa più spazio nel feed"],
            ["Post verticale alto", "3:4", "1080 × 1440", "Solo dall'app; coincide con l'anteprima della griglia"],
            ["Post quadrato", "1:1", "1080 × 1080", "Grafiche e loghi"],
            ["Post orizzontale", "1,91:1", "1080 × 566", "Panorami e foto di gruppo"],
            ["Stories e Reels", "9:16", "1080 × 1920", "Contenuti a tutto schermo"],
          ],
        },
        fonti: [IG_RISOLUZIONE, BUFFER_MISURE],
      },
      {
        id: "griglia",
        titolo: "La griglia del profilo non è più quadrata",
        paragrafi: [
          "A gennaio 2025 Instagram ha cambiato la griglia del profilo: le anteprime non sono più quadrate ma rettangolari, in verticale. Un post 4:5 viene quindi mostrato nella griglia leggermente tagliato ai lati, e una grafica quadrata con il testo sui bordi rischia di perdere qualche lettera.",
          "La regola pratica: tieni titoli, prezzi e loghi nella parte centrale dell'immagine, lasciando un margine sui quattro lati.",
        ],
        fonti: [GRIGLIA_34],
      },
      {
        id: "quale-scegliere",
        titolo: "Quale formato scegliere per un'attività locale",
        lista: [
          "Foto di piatti, prodotti e locale: 4:5 verticale, 1080 × 1350.",
          "Locandine con orari e offerte: 4:5, con il testo al centro.",
          "Caroselli: tutte le slide nello stesso formato del primo elemento, meglio 4:5.",
          "Reels e Stories: 9:16, lasciando libera la parte bassa dove compaiono didascalia e pulsanti.",
          "Se usi un programma per pubblicare (es. Meta Business Suite), resta su 4:5: il 3:4 funziona solo dall'app.",
        ],
        fonti: [BUFFER_MISURE],
        prossimo: { testo: "Come fotografare piatti e prodotti con lo smartphone", url: "/guide/foto-piatti-con-lo-smartphone/" },
      },
    ],
    faq: [
      { q: "Perché Instagram taglia la mia foto?", a: "Perché è più alta o più larga dei formati ammessi. Riportala a 4:5 o 1:1 prima di caricarla, e tieni il soggetto al centro." },
      { q: "Le foto perdono qualità se le carico più grandi?", a: "Instagram riduce le foto a 1080 pixel di larghezza: caricarle più grandi non migliora il risultato." },
      { q: "Che misura usare su Canva?", a: "Cerca il modello “Post Instagram verticale” (1080 × 1350) per il feed e “Storia Instagram” (1080 × 1920) per Stories e Reels." },
    ],
    correlati: ["carosello-instagram", "come-fare-reel-instagram", "foto-piatti-con-lo-smartphone"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "orari-migliori-pubblicare-instagram",
    titolo: "Orari migliori per pubblicare su Instagram per un'attività locale",
    titoloScheda: "Orari migliori per pubblicare su Instagram",
    descrizione:
      "A che ora pubblicare su Instagram: cosa dicono gli studi 2026 di Sprout Social e Buffer, come leggere gli orari dei tuoi follower e un piano per bar e ristoranti.",
    rispostaRapida:
      "Gli studi del 2026 indicano i giorni feriali come i migliori: per Sprout Social le fasce più forti vanno dal lunedì al giovedì tra mezzogiorno e il pomeriggio, con il fine settimana più debole; per Buffer gli orari migliori sono giovedì alle 9, mercoledì alle 12 e alle 18. Sono medie generali: per la tua attività conta di più quando sono online i tuoi follower, che trovi negli Insights.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "cosa-dicono-gli-studi",
        titolo: "Cosa dicono gli studi",
        tabella: {
          didascalia: "Orari indicati dagli studi 2026 (ora locale). Sono medie su milioni di post di tutti i settori.",
          colonne: ["Studio", "Orari migliori", "Note"],
          righe: [
            ["Sprout Social (marzo 2026)", "Lun 14–16, mar 13–19, mer 12–21, gio 12–14", "Weekend con l'engagement più basso"],
            ["Buffer (9,6 milioni di post)", "Gio 9:00, mer 12:00, mer 18:00", "Metà settimana più forte"],
          ],
        },
        fonti: [SPROUT_ORARI, BUFFER_ORARI],
      },
      {
        id: "tuoi-follower",
        titolo: "Gli orari dei tuoi follower contano di più",
        paragrafi: [
          "Un bar di paese non ha lo stesso pubblico di un marchio di moda internazionale. Per questo il dato più utile è nel tuo profilo: con un account professionale apri la Dashboard per professionisti, poi gli Insights e la sezione dei follower, dove trovi i momenti di maggiore attività per giorno e per ora.",
          "Pubblica per 3–4 settimane negli orari che vedi lì, poi confronta i risultati dei post: tieni gli orari che funzionano, cambia quelli che no.",
        ],
        prossimo: { testo: "Quanti post servono a settimana: ogni quanto pubblicare", url: "/guide/ogni-quanto-pubblicare-su-instagram/" },
      },
      {
        id: "piano-locale",
        titolo: "Un punto di partenza per bar e ristoranti",
        paragrafi: ["Finché non hai dati tuoi, ragiona su quando i clienti decidono. Questi sono consigli pratici da verificare con i tuoi Insights, non regole:"],
        lista: [
          "Colazione e pranzo: pubblica a metà mattina, quando si decide dove andare a pranzo.",
          "Aperitivo e cena: pubblica nel tardo pomeriggio, prima dell'uscita dal lavoro.",
          "Weekend e brunch: pubblica il giovedì o il venerdì, quando si organizzano i piani.",
          "Offerte del giorno: Stories al mattino, quando l'offerta è ancora valida tutto il giorno.",
        ],
      },
    ],
    faq: [
      { q: "Conviene pubblicare la domenica?", a: "Secondo gli studi il weekend ha in media meno interazioni, ma per un brunch o un evento domenicale il post del sabato o della domenica mattina può avere senso: decidi in base al contenuto." },
      { q: "I Reels hanno orari diversi?", a: "Sprout Social indica per i Reels le stesse fasce dei post. Il tempo di visione conta più dell'orario." },
      { q: "Posso programmare i post?", a: "Sì, gratis con Meta Business Suite o dall'app di Instagram: scegli data e ora prima di pubblicare." },
    ],
    correlati: ["ogni-quanto-pubblicare-su-instagram", "idee-post-instagram-ristorante", "aumentare-visualizzazioni-reel"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "quanti-hashtag-instagram",
    titolo: "Quanti hashtag usare su Instagram nel 2026 (e quali)",
    titoloScheda: "Quanti hashtag usare su Instagram nel 2026",
    descrizione:
      "Da dicembre 2025 Instagram permette al massimo 5 hashtag per post e Reel. Come sceglierli per un'attività locale, con esempi per bar, ristoranti e negozi.",
    rispostaRapida:
      "Al massimo cinque: da dicembre 2025 Instagram ha ridotto il limite da 30 a 5 hashtag per post e per Reel. Il responsabile di Instagram, Adam Mosseri, ha spiegato che pochi hashtag specifici funzionano meglio di lunghe liste generiche e che gli hashtag non aumentano di per sé la copertura. Per un'attività locale scegli tag precisi: città o quartiere, tipo di attività, prodotto.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "regola-cinque",
        titolo: "La regola dei 5 hashtag",
        paragrafi: [
          "Instagram ha introdotto il limite di cinque hashtag per post per mettere fine agli elenchi di decine di tag uguali per tutti. Secondo Mosseri, pochi tag specifici funzionano meglio di molti tag generici, e gli hashtag aiutano soprattutto a descrivere il contenuto e nella ricerca, non a far crescere da soli il profilo.",
          "Se ripubblichi vecchi testi con lunghi blocchi di hashtag, accorciali prima: Instagram non ne accetta più di cinque.",
        ],
        fonti: [HASHTAG_5],
      },
      {
        id: "come-sceglierli",
        titolo: "Come scegliere i 5 hashtag",
        paragrafi: ["Uno schema semplice che funziona per quasi ogni post di un'attività locale:"],
        tabella: {
          didascalia: "Schema per scegliere gli hashtag, con esempi per un bar di Modena.",
          colonne: ["Posizione", "Tipo di hashtag", "Esempio"],
          righe: [
            ["1", "Città o quartiere", "#modena"],
            ["2", "Tipo di attività + città", "#barmodena"],
            ["3", "Prodotto o tema del post", "#colazioneitaliana"],
            ["4", "Occasione o stagione", "#natale"],
            ["5", "Il tuo nome o hashtag dell'attività", "#barcentralemodena"],
          ],
        },
        prossimo: { testo: "Bio Instagram per un'attività: 10 esempi da copiare", url: "/guide/bio-instagram-attivita/" },
      },
      {
        id: "da-evitare",
        titolo: "Hashtag da evitare",
        lista: [
          "Tag enormi e generici (#food, #love, #instagood): il tuo post sparisce tra milioni.",
          "Tag che non c'entrano con il contenuto solo perché sono di moda.",
          "Sempre gli stessi cinque copiati su ogni post: cambia almeno quelli su prodotto e occasione.",
          "Tag del tipo “segui per segui”: attirano profili che non diventeranno mai clienti.",
        ],
      },
    ],
    faq: [
      { q: "Gli hashtag vanno nella didascalia o nel primo commento?", a: "Mettili nella didascalia. Il limite di cinque vale per il post nel suo insieme." },
      { q: "Le Stories hanno lo stesso limite?", a: "Nelle Stories gli hashtag si usano con lo sticker dedicato; il limite di cinque riguarda post e Reels." },
      { q: "Allora gli hashtag non servono più?", a: "Servono a dire a Instagram e a chi cerca di cosa parla il post. Per farsi trovare contano di più contenuti originali, didascalie chiare e parole chiave nel testo." },
    ],
    correlati: ["bio-instagram-attivita", "aumentare-visualizzazioni-reel", "idee-post-instagram-ristorante"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "come-fare-reel-instagram",
    titolo: "Come fare un Reel su Instagram per la tua attività",
    titoloScheda: "Come fare un Reel su Instagram",
    descrizione:
      "Come fare un Reel per un bar, un ristorante o un negozio: formato, durata massima, i passaggi dall'app e 6 idee facili da girare con il telefono in mezz'ora.",
    rispostaRapida:
      "Un Reel si crea dall'app Instagram: tocca il “+”, scegli Reel, gira o carica clip verticali in 9:16, aggiungi musica o voce, testo e didascalia, poi pubblica. Può durare fino a 3 minuti, ma per un'attività locale bastano spesso pochi secondi ben fatti. Instagram consiglia contenuti originali, verticali e di buona qualità, senza loghi di altre app.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Scegli un'idea in una frase", testo: "“Come nasce il nostro cornetto”, “3 piatti nuovi del menu”: se non sta in una frase, è troppo complicata." },
      { nome: "Gira in verticale", testo: "Telefono in verticale, luce naturale, 3–6 clip brevi. Pulisci l'obiettivo prima." },
      { nome: "Monta nell'app", testo: "Tocca “+” e poi Reel, carica le clip, taglia le parti lente e metti in ordine." },
      { nome: "Aggiungi audio e testo", testo: "Musica dalla libreria di Instagram o la tua voce; una scritta breve all'inizio per dire di cosa parla il video." },
      { nome: "Scrivi la didascalia e pubblica", testo: "Due righe con il nome del prodotto, la città e cosa deve fare chi guarda (“prenota su WhatsApp”)." },
    ],
    sezioni: [
      {
        id: "regole-base",
        titolo: "Le regole di base di Instagram",
        lista: [
          "Durata: fino a 3 minuti, dal gennaio 2025.",
          "Formato: verticale 9:16, che rende il video immersivo a tutto schermo.",
          "Originalità: Instagram premia i contenuti originali e limita nei suggerimenti quelli ripubblicati senza modifiche.",
          "Loghi: niente filigrane di altre app (per esempio TikTok); il tuo logo invece non riduce la copertura, ha spiegato Adam Mosseri.",
        ],
        fonti: [REELS_3MIN, META_REELS, IG_ORIGINALI, LOGO_REELS],
      },
      {
        id: "idee",
        titolo: "6 idee facili per un'attività locale",
        tabella: {
          didascalia: "Idee di Reel che si girano con il telefono, senza attrezzatura.",
          colonne: ["Idea", "Cosa riprendere", "Durata indicativa"],
          righe: [
            ["Dietro le quinte", "La preparazione di un piatto o di una piega, in 4–5 clip", "15–30 secondi"],
            ["Prima e dopo", "Il tavolo vuoto e apparecchiato, i capelli prima e dopo", "10–15 secondi"],
            ["Il prodotto della settimana", "Il prodotto da vicino, con la voce che spiega cos'è", "15–20 secondi"],
            ["Una giornata da noi", "Apertura, momento di punta, chiusura", "20–40 secondi"],
            ["Risposta a una domanda", "Una domanda frequente dei clienti, risposta a voce", "20–40 secondi"],
            ["Presenta lo staff", "Una persona del team e cosa fa", "15–30 secondi"],
          ],
        },
        prossimo: { testo: "Come aumentare le visualizzazioni dei Reel", url: "/guide/aumentare-visualizzazioni-reel/" },
      },
      {
        id: "errori",
        titolo: "Gli errori più comuni",
        lista: [
          "Video orizzontali o con bordi neri.",
          "Inizio lento: i primi secondi devono già mostrare il prodotto o il risultato.",
          "Testo troppo piccolo o coperto dai pulsanti in basso.",
          "Musica scaricata da internet invece che dalla libreria di Instagram.",
        ],
      },
    ],
    faq: [
      { q: "Devo metterci la faccia?", a: "No. Mani, prodotti, ambiente e voce funzionano bene per un'attività locale." },
      { q: "Quanti Reel al mese servono?", a: "Per un'attività locale 2–4 al mese sono un buon inizio, accanto ai post. Meglio pochi ma curati." },
      { q: "Posso usare lo stesso video su TikTok?", a: "Sì, ma caricalo senza la filigrana di TikTok: su Instagram i video con loghi di altre app vengono suggeriti meno." },
    ],
    correlati: ["aumentare-visualizzazioni-reel", "dimensioni-post-instagram", "carosello-instagram"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "aumentare-visualizzazioni-reel",
    titolo: "Come aumentare le visualizzazioni dei Reel",
    titoloScheda: "Come aumentare le visualizzazioni dei Reel",
    descrizione:
      "Cosa guarda Instagram per suggerire un Reel: originalità, tempo di visione, condivisioni. Le regole ufficiali e una checklist di 8 punti prima di pubblicare.",
    rispostaRapida:
      "Instagram suggerisce di più i Reel originali, verticali e di buona qualità, che le persone guardano fino in fondo e condividono. Quindi: mostra subito il punto del video, tieni il ritmo, usa audio dalla libreria e un testo che spieghi di cosa parla. Evita ripubblicazioni senza modifiche e filigrane di altre app, che Instagram mostra meno a chi non ti segue già.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "cosa-guarda-instagram",
        titolo: "Cosa guarda Instagram",
        paragrafi: [
          "Instagram non pubblica la formula esatta, ma le sue indicazioni per i creator vanno sempre nella stessa direzione: contenuti originali, pensati in verticale, con audio e strumenti creativi dell'app, che spingono le persone a guardare e a condividere.",
          "Le linee guida sui contenuti originali spiegano che gli account che ripubblicano contenuti di altri senza modifiche sostanziali vengono suggeriti meno, mentre la distribuzione verso chi ti segue già non cambia.",
        ],
        fonti: [META_REELS, IG_ORIGINALI],
      },
      {
        id: "checklist",
        titolo: "La checklist prima di pubblicare",
        lista: [
          "Il primo secondo mostra già il prodotto, il risultato o la domanda.",
          "Il video è verticale 9:16, nitido, con buona luce.",
          "Nessuna filigrana di altre app.",
          "C'è una scritta breve che dice di cosa parla il Reel.",
          "L'audio è dalla libreria di Instagram oppure è la tua voce.",
          "Hai tagliato ogni momento lento: ogni clip aggiunge qualcosa.",
          "La didascalia contiene il nome del prodotto e la città, con al massimo 5 hashtag precisi.",
          "C'è un invito chiaro: salvare, mandare a un amico, prenotare.",
        ],
        fonti: [META_REELS, HASHTAG_5],
        prossimo: { testo: "Quanti hashtag usare nel 2026 e come sceglierli", url: "/guide/quanti-hashtag-instagram/" },
      },
      {
        id: "per-locale",
        titolo: "Visualizzazioni sì, ma dalle persone giuste",
        paragrafi: [
          "Per un'attività locale un Reel visto da 800 persone della tua città vale più di uno visto da 20.000 persone lontane. Per questo conviene parlare di cose locali: il nome del quartiere, un evento in piazza, un prodotto che si trova solo da te.",
          "Misura i risultati negli Insights del Reel: oltre alle visualizzazioni guarda condivisioni, salvataggi, visite al profilo e messaggi ricevuti.",
        ],
        prossimo: { testo: "Come fare un Reel per la tua attività: passi e 6 idee", url: "/guide/come-fare-reel-instagram/" },
      },
    ],
    faq: [
      { q: "Comprare visualizzazioni aiuta?", a: "No: sono visualizzazioni di profili che non diventeranno clienti e possono violare le regole di Instagram." },
      { q: "Il logo della mia attività nel video riduce la copertura?", a: "No: Adam Mosseri ha chiarito che il proprio logo va bene; vengono penalizzati i loghi di altre app." },
      { q: "Quanto deve durare un Reel?", a: "Fino a 3 minuti, ma non c'è una durata magica: deve durare quanto serve per dire una cosa senza tempi morti." },
    ],
    correlati: ["come-fare-reel-instagram", "quanti-hashtag-instagram", "orari-migliori-pubblicare-instagram"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "carosello-instagram",
    titolo: "Come fare un carosello su Instagram (i post con foto che scorrono)",
    titoloScheda: "Come fare un carosello su Instagram",
    descrizione:
      "Come pubblicare un carosello su Instagram con fino a 20 foto o video, il formato giusto per le slide e 5 strutture pronte per bar, ristoranti e negozi.",
    rispostaRapida:
      "Il carosello è il post con più foto o video che si scorrono di lato. Dall'app tocca “+”, scegli Post, seleziona l'icona per più elementi e aggiungi fino a 20 foto o video, poi riordinali e pubblica. Tutte le slide prendono il formato della prima: usa il verticale 4:5. Funziona bene per menu, prima e dopo, guide in più passaggi e racconti.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Prepara le slide", testo: "Tutte nello stesso formato, meglio 4:5 (1080 × 1350). La prima deve far venire voglia di scorrere." },
      { nome: "Crea il post", testo: "Nell'app tocca “+”, scegli Post e attiva la selezione multipla." },
      { nome: "Aggiungi e ordina", testo: "Scegli fino a 20 foto o video e mettili nell'ordine giusto. Puoi aggiungere anche la musica." },
      { nome: "Didascalia e pubblicazione", testo: "Scrivi la didascalia, aggiungi luogo e al massimo 5 hashtag, poi pubblica o programma." },
    ],
    sezioni: [
      {
        id: "regole",
        titolo: "Le regole del carosello",
        lista: [
          "Fino a 20 elementi tra foto e video, dall'agosto 2024 (prima erano 10).",
          "Il formato della prima slide vale per tutte: se la prima è 4:5, anche le altre verranno adattate a 4:5.",
          "La griglia del profilo mostra solo la prima slide.",
        ],
        fonti: [CAROSELLO_20, BUFFER_MISURE],
      },
      {
        id: "strutture",
        titolo: "5 strutture pronte",
        tabella: {
          didascalia: "Strutture di carosello per attività locali.",
          colonne: ["Struttura", "Slide", "Esempio"],
          righe: [
            ["Il menu della settimana", "Copertina + 1 slide per piatto + slide finale con orari", "Ristorante, gastronomia"],
            ["Prima e dopo", "Prima, passaggi intermedi, risultato", "Parrucchiere, centro estetico, sartoria"],
            ["5 motivi per…", "Copertina + 5 slide + invito finale", "“5 motivi per festeggiare da noi”"],
            ["Guida pratica", "Domanda + 3–5 passaggi + riepilogo", "“Come scegliere il vino per la cena”"],
            ["Racconto", "Foto in ordine di tempo, una frase per slide", "Una giornata in negozio, un evento"],
          ],
        },
        prossimo: { testo: "Le misure giuste per tutte le slide", url: "/guide/dimensioni-post-instagram/" },
      },
      {
        id: "consigli",
        titolo: "Tre consigli per farli scorrere",
        lista: [
          "Copertina con una promessa chiara (“3 dolci nuovi da provare”) e una freccia o un “scorri”.",
          "Una sola idea per slide, con poco testo e grande.",
          "Ultima slide utile: come prenotare, dove siete, cosa fare adesso.",
        ],
      },
    ],
    faq: [
      { q: "Posso mettere foto e video insieme?", a: "Sì, il carosello accetta entrambi, fino a 20 elementi in tutto." },
      { q: "Meglio un carosello o un Reel?", a: "Dipende: il Reel è più adatto a mostrare movimento e a farti scoprire da nuove persone, il carosello a spiegare e a far salvare il post. Alternali." },
      { q: "Posso modificare l'ordine dopo la pubblicazione?", a: "Puoi modificare la didascalia e, in alcuni casi, eliminare singole slide, ma non conviene contarci: controlla l'ordine prima." },
    ],
    correlati: ["dimensioni-post-instagram", "come-fare-reel-instagram", "idee-post-instagram-ristorante"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "bio-instagram-attivita",
    titolo: "Bio Instagram per un'attività: 10 esempi da copiare",
    titoloScheda: "Bio Instagram per attività: 10 esempi",
    descrizione:
      "Come scrivere la bio Instagram di un bar, un ristorante, un centro estetico o un negozio in 150 caratteri: lo schema in 4 righe, 10 esempi e i link da mettere.",
    rispostaRapida:
      "La bio ha 150 caratteri, spazi ed emoji compresi: in quattro righe deve dire cosa fai, dove sei, cosa ti distingue e cosa fare adesso, per esempio prenotare su WhatsApp. Sotto la bio puoi aggiungere fino a 5 link: metti per primo quello che usi di più, come prenotazioni, menu o sito, e usa il campo nome per la categoria e la città.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "schema",
        titolo: "Lo schema in 4 righe",
        lista: [
          "Riga 1 – Cosa fai: “Pizzeria napoletana”, “Centro estetico e laser”.",
          "Riga 2 – Dove e quando: “Via Roma 12, Carpi · chiuso il lunedì”.",
          "Riga 3 – Cosa ti distingue: “Impasto 48 ore”, “Solo prodotti bio”.",
          "Riga 4 – Cosa fare adesso: “Prenota su WhatsApp 👇”.",
        ],
        paragrafi: [
          "Nel campo nome, che Instagram usa anche nella ricerca, scrivi nome e categoria: “Bar Centrale | Colazioni Modena”. I link si aggiungono da Modifica profilo, sezione Link: fino a cinque.",
        ],
        fonti: [SPROUT_BIO, LINK_BIO],
      },
      {
        id: "esempi",
        titolo: "10 esempi da adattare",
        tabella: {
          didascalia: "Esempi di bio entro i 150 caratteri. Sostituisci nomi, indirizzi e orari.",
          colonne: ["Attività", "Bio"],
          righe: [
            ["Bar", "☕ Colazioni e aperitivi dal 1998 · Piazza Grande 3, Modena · Cornetti sfornati ogni mattina · Ordina vassoi su WhatsApp 👇"],
            ["Ristorante", "Cucina emiliana di stagione · Via Emilia 45, Castelfranco · Chiuso lunedì · Prenota il tuo tavolo 👇"],
            ["Pizzeria", "🍕 Pizza napoletana, impasto 48h · Carpi centro · Anche da asporto · Ordina qui 👇"],
            ["Gelateria", "Gelato artigianale con frutta di stagione · Sassuolo · Aperti tutti i giorni 14–23 · Torte gelato su ordinazione 👇"],
            ["Pasticceria", "Torte per feste e matrimoni · Mirandola · Ordina 3 giorni prima su WhatsApp 👇"],
            ["Centro estetico", "Trattamenti viso e corpo, laser · Formigine · Su appuntamento · Prenota in 1 minuto 👇"],
            ["Parrucchiere", "Colore e tagli donna/uomo · Nonantola · Specialisti in biondi · Prenota su WhatsApp 👇"],
            ["Negozio abbigliamento", "Moda donna 40–60 anni · Vignola centro · Novità ogni settimana · Chiedi la tua taglia in DM 👇"],
            ["Gastronomia", "Piatti pronti e tortellini fatti a mano · Bologna Savena · Ordini per le feste 👇"],
            ["Fiorista", "Fiori per eventi e consegne in giornata · Cento · Ordina entro le 11 👇"],
          ],
        },
        prossimo: { testo: "Quanti hashtag usare e come sceglierli", url: "/guide/quanti-hashtag-instagram/" },
      },
      {
        id: "errori",
        titolo: "Errori da evitare",
        lista: [
          "Frasi motivazionali che non dicono cosa fai.",
          "Orari vecchi: se cambiano spesso, metti solo il giorno di chiusura.",
          "Troppe emoji: una o due per riga bastano.",
          "Un link che porta a una pagina che non funziona più.",
        ],
      },
    ],
    faq: [
      { q: "Devo mettere gli hashtag nella bio?", a: "Solo quello della tua attività, se lo usi davvero. Gli altri tolgono spazio." },
      { q: "Meglio il link al sito o a WhatsApp?", a: "Al canale da cui ricevi più prenotazioni o ordini. Con cinque link puoi mettere entrambi, il più importante per primo." },
      { q: "Ogni quanto aggiornare la bio?", a: "Quando cambia qualcosa (orari, servizi, promozioni stagionali) e comunque una volta ogni pochi mesi." },
    ],
    correlati: ["quanti-hashtag-instagram", "dimensioni-post-instagram", "idee-post-instagram-ristorante"],
  },
  {
    gruppo: "guide",
    tema: "instagram",
    slug: "idee-post-instagram-ristorante",
    titolo: "Idee post Instagram per un ristorante: 30 idee per un mese",
    titoloScheda: "Idee post Instagram per ristoranti: 30 idee",
    descrizione:
      "30 idee di post Instagram per un ristorante, divise per settimana e per tipo (post, carosello, Reel, Stories), con le didascalie d'esempio da adattare al tuo locale.",
    rispostaRapida:
      "Per un mese di Instagram un ristorante ha bisogno di alternare cinque tipi di contenuto: i piatti, le persone che li fanno, il locale, le recensioni dei clienti e le informazioni pratiche come orari ed eventi. Qui trovi 30 idee divise in quattro settimane, abbastanza per pubblicare 3 post a settimana e riempire le Stories, con il formato consigliato per ciascuna.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "trenta-idee",
        titolo: "Le 30 idee, settimana per settimana",
        tabella: {
          didascalia: "30 idee per un mese. Formato consigliato tra parentesi: P = post, C = carosello, R = Reel, S = Stories.",
          colonne: ["Settimana", "Idee"],
          righe: [
            ["1 – Il menu", "Il piatto simbolo (P) · Da dove arrivano gli ingredienti (C) · Il piatto in 15 secondi (R) · Sondaggio: quale piatto nuovo? (S) · Il vino consigliato (P) · Domanda del giorno sul menu (S) · Il dolce della casa (P) · Prezzo del menu pranzo (S)"],
            ["2 – Le persone", "Presenta lo chef (R) · Una giornata in cucina (C) · Il sorriso in sala (P) · Cosa mangia lo staff a fine turno (S) · La storia del locale in 5 foto (C) · Il fornitore di fiducia (P) · Quiz: da quanti anni siamo aperti? (S)"],
            ["3 – Il locale e i clienti", "La sala prima dell'apertura (R) · La recensione più bella (P) · Il tavolo migliore per una cena romantica (P) · Prima e dopo l'allestimento per un evento (C) · Grazie ai clienti di questa settimana (S) · Il dehors o la vista (P) · Repost di un cliente, con permesso (S)"],
            ["4 – Informazioni ed eventi", "Orari della settimana e del festivo (P) · Come prenotare in 10 secondi (R) · L'evento del mese (C) · Menu per gruppi e cene aziendali (P) · Conto alla rovescia all'evento (S) · Domande frequenti: parcheggio, cani, celiachia (C) · Riassunto del mese (C) · Arrivederci al prossimo mese (S)"],
          ],
        },
        prossimo: { testo: "Il calendario di un mese pensato per i bar", url: "/guide/cosa-pubblicare-su-instagram-bar/" },
      },
      {
        id: "didascalie",
        titolo: "3 didascalie d'esempio",
        lista: [
          "Piatto simbolo: “Se vieni da noi la prima volta, inizia da qui: [piatto], con [ingrediente principale] di [provenienza]. Lo prepariamo così dal [anno]. 📍[città] · Prenota su WhatsApp”",
          "Presenta lo chef: “Lui è [nome]. Ogni mattina alle [ora] è già in cucina a [preparazione]. Chiedigli del [piatto] quando vieni: ha una storia da raccontare.”",
          "Recensione: “Grazie [nome cliente] per queste parole ❤️ Le leggiamo tutte, anche quando ci dite cosa migliorare. Hai cenato da noi? Raccontacelo su Google: link in bio.”",
        ],
        prossimo: { testo: "Come rispondere alle recensioni positive (e usarle nei post)", url: "/guide/come-rispondere-recensione-positiva/" },
      },
      {
        id: "regole-semplici",
        titolo: "Tre regole per non perdere il ritmo",
        lista: [
          "Prepara le foto in un'unica sessione a settimana, con la luce del mattino.",
          "Programma i post in anticipo con Meta Business Suite o dall'app.",
          "Ripeti ogni mese le idee che funzionano: il piatto simbolo può tornare con una foto nuova.",
        ],
      },
    ],
    faq: [
      { q: "Quanti di questi post devo pubblicare?", a: "Con 3 post a settimana usi circa 12–13 idee al mese per il feed; le altre diventano Stories." },
      { q: "Posso ripubblicare le foto dei clienti?", a: "Solo chiedendo il permesso e citando l'autore: le foto restano di chi le ha scattate." },
      { q: "Vanno bene anche per una pizzeria o un'osteria?", a: "Sì, cambiano solo i piatti e il tono: la struttura in quattro settimane funziona per qualsiasi locale." },
    ],
    correlati: ["cosa-pubblicare-su-instagram-bar", "orari-migliori-pubblicare-instagram", "aumentare-clienti-ristorante"],
  },
];
