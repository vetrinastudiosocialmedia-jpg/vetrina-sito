// Articoli del tema "Recensioni" (pubblicati il 25/11/2026).
// Fonti lette il 24/11/2026. Formato dei campi: vedi lib/articoli.mjs.

const G_RISPOSTE = { titolo: "Google – Suggerimenti per ricevere e rispondere alle recensioni", url: "https://support.google.com/business/answer/3474122?hl=it" };
const G_VIETATI = { titolo: "Google – Contenuti vietati e con limitazioni (recensioni false e incentivi)", url: "https://support.google.com/contributionpolicy/answer/7400114?hl=it" };
const G_SEGNALA = { titolo: "Google – Segnalare recensioni inappropriate sul profilo dell'attività", url: "https://support.google.com/business/answer/4596773?hl=it" };
const G_LINK = { titolo: "Google – Creare un link o un codice QR per richiedere recensioni", url: "https://support.google.com/business/answer/16816815?hl=it" };
const G_RANKING = { titolo: "Google – Suggerimenti per migliorare il posizionamento nella ricerca locale", url: "https://support.google.com/business/answer/7091?hl=it" };
const TA_REPLICHE = { titolo: "Tripadvisor – Regolamento per le repliche della direzione", url: "https://www.tripadvisor.it/Trust-lpgT1CmsfQ3E" };

export const ARTICOLI_RECENSIONI = [
  {
    gruppo: "guide",
    tema: "recensioni",
    chiamata: "recensioni",
    slug: "come-rispondere-recensione-negativa",
    titolo: "Come rispondere a una recensione negativa su Google (con 5 esempi)",
    titoloScheda: "Rispondere a una recensione negativa: 5 esempi",
    descrizione:
      "Come rispondere a una recensione negativa su Google senza peggiorare le cose: la struttura in 4 passi, cosa non scrivere e 5 risposte pronte da adattare.",
    rispostaRapida:
      "Rispondi entro un paio di giorni, a mente fredda e in poche righe: ringrazia, riconosci il problema senza accusare il cliente, spiega cosa hai fatto o farai per rimediare e invita a contattarti in privato, firmando con il tuo nome. È quello che consiglia Google, che vieta invece di offrire sconti o regali in cambio della modifica o della rimozione di una recensione.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Aspetta di essere calmo", testo: "Leggi la recensione, verifica cosa è successo con chi era in turno e rispondi solo quando non sei più arrabbiato: la risposta resta pubblica per anni." },
      { nome: "Ringrazia e riconosci", testo: "Ringrazia per il tempo dedicato e riconosci il problema concreto, senza giustificazioni lunghe e senza dare la colpa al cliente." },
      { nome: "Spiega cosa cambia", testo: "Una frase su cosa hai fatto o farai: un controllo in cucina, un turno in più il sabato, un prodotto sostituito. Niente promesse vaghe." },
      { nome: "Porta la conversazione in privato", testo: "Invita a scriverti o chiamarti e firma con nome o iniziali. I dettagli si sistemano lontano dalla pagina pubblica." },
    ],
    sezioni: [
      {
        id: "perche-rispondere",
        titolo: "Perché conviene rispondere (anche quando hai ragione tu)",
        paragrafi: [
          "La risposta non la legge solo chi ha scritto la recensione: la leggono tutte le persone che stanno decidendo se venire da te. Per loro conta più il tono della risposta che la singola critica.",
          "Google spiega che rispondere alle recensioni mostra che dai valore al parere dei clienti, e lo inserisce tra i suggerimenti per migliorare la visibilità del profilo nella ricerca locale. Una risposta calma a una critica fa spesso una figura migliore di dieci complimenti senza risposta.",
        ],
        fonti: [G_RANKING, G_RISPOSTE],
      },
      {
        id: "cosa-non-scrivere",
        titolo: "Cosa non scrivere mai",
        paragrafi: ["Gli errori più comuni sono quelli che trasformano una critica in una discussione pubblica:"],
        lista: [
          "Attaccare o ironizzare sul cliente, anche se la recensione è ingiusta.",
          "Scrivere dati personali: cosa ha ordinato, a che ora è venuto, con chi era. Google chiede espressamente di non condividere informazioni private di chi recensisce.",
          "Accusare pubblicamente il cliente di mentire o dire che la recensione è falsa: se pensi che violi le regole, segnalala a Google.",
          "Offrire sconti, consumazioni gratis o regali in cambio della modifica o della rimozione: per Google è un incentivo vietato.",
          "Copiare la stessa risposta su tutte le recensioni negative: si nota e sembra automatica.",
          "Fare pubblicità nella risposta: chi ha scritto è già un cliente, non serve vendergli altro.",
        ],
        fonti: [G_RISPOSTE, G_VIETATI],
        prossimo: { testo: "Quando e come segnalare una recensione falsa o offensiva", url: "/guide/segnalare-recensione-google/" },
      },
      {
        id: "esempi",
        titolo: "5 risposte da adattare",
        paragrafi: [
          "Sostituisci i nomi e i dettagli tra parentesi quadre. Tieni la risposta tra le 3 e le 5 righe: Google consiglia risposte brevi e semplici.",
        ],
        lista: [
          "Attesa lunga: “Gentile [nome], grazie per averci scritto. Ha ragione, sabato sera l'attesa è stata troppo lunga e ci dispiace. Da questa settimana abbiamo una persona in più in sala nel fine settimana. Se vuole raccontarci meglio com'è andata, ci scriva a [contatto]. [Tuo nome], [nome attività]”",
          "Piatto o prodotto non all'altezza: “Grazie [nome], è un riscontro utile. Il [piatto/prodotto] non doveva arrivarle così: ne abbiamo parlato con [la cucina/il fornitore] e abbiamo già controllato il problema. Ci farebbe piacere sapere di più: ci trova a [contatto]. [Tuo nome]”",
          "Prezzo giudicato alto: “Grazie per la sincerità, [nome]. Usiamo [ingredienti locali/materiali artigianali] e il prezzo riflette questa scelta, ma capiamo che non sia per tutti. Se le va, a [giorni] proponiamo [menu o formula più leggera]. [Tuo nome]” — qui l'informazione è utile per chi legge, non è uno sconto in cambio della recensione.",
          "Personale scortese: “[Nome], ci dispiace molto: non è il modo in cui vogliamo accogliere i clienti. Abbiamo parlato con il team di quanto è successo. Se vuole, ci scriva a [contatto] per raccontarci i dettagli. [Tuo nome]”",
          "Cliente che non riconosci: “Gentile [nome], grazie per la recensione. Non riusciamo a ritrovare la sua visita nelle nostre prenotazioni e vorremmo capire cosa è successo: può scriverci a [contatto]? [Tuo nome]” — tono neutro, senza accuse.",
        ],
        fonti: [G_RISPOSTE],
      },
    ],
    faq: [
      { q: "Posso cancellare una recensione negativa?", a: "No. Puoi solo segnalarla a Google se viola le sue norme, per esempio se è spam o contiene insulti. Le critiche che semplicemente non ti piacciono restano." },
      { q: "Devo rispondere a tutte le recensioni?", a: "Alle negative conviene sempre rispondere. Per le positive Google dice che non serve ringraziare tutti: rispondi quando hai qualcosa di utile o di nuovo da aggiungere." },
      { q: "Posso offrire uno sconto a chi ha avuto un problema?", a: "Puoi rimediare in privato a un disservizio, ma non legare l'offerta alla modifica o alla rimozione della recensione: per Google è un incentivo vietato." },
    ],
    correlati: ["come-rispondere-recensione-positiva", "segnalare-recensione-google", "come-ottenere-recensioni-google"],
  },
  {
    gruppo: "guide",
    tema: "recensioni",
    chiamata: "recensioni",
    slug: "come-rispondere-recensione-positiva",
    titolo: "Come rispondere a una recensione positiva: esempi per attività locali",
    titoloScheda: "Rispondere a una recensione positiva: esempi",
    descrizione:
      "Come rispondere a una recensione positiva su Google in modo naturale: quando conviene farlo, la formula in 3 frasi ed esempi per bar, ristoranti e centri estetici.",
    rispostaRapida:
      "A una recensione positiva si risponde in due o tre frasi: grazie con il nome della persona, un dettaglio preciso di quello che ha scritto e un'informazione utile per chi legge, come una novità o un orario. Google spiega che non è necessario ringraziare ogni recensione: conviene rispondere quando hai qualcosa da aggiungere, senza fare pubblicità e senza copiare sempre la stessa frase.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "quando-rispondere",
        titolo: "Quando conviene rispondere",
        paragrafi: [
          "Rispondere alle recensioni positive non è obbligatorio. Le indicazioni di Google sono chiare: non serve ringraziare ogni persona, conviene farlo quando hai notizie o informazioni utili da condividere.",
          "In pratica: rispondi alle recensioni lunghe e dettagliate, a quelle che citano una persona del tuo staff, a quelle che parlano di un prodotto o servizio nuovo e a quelle di clienti abituali. Le stelle senza testo possono restare senza risposta.",
        ],
        fonti: [G_RISPOSTE],
      },
      {
        id: "formula",
        titolo: "La formula in 3 frasi",
        paragrafi: ["Una buona risposta positiva ha tre parti, e ognuna sta in una frase:"],
        lista: [
          "Grazie con il nome: “Grazie Giulia!” suona meglio di “Grazie per la recensione”.",
          "Un dettaglio preciso: riprendi quello che ha scritto (il tiramisù, la piega, il servizio veloce a pranzo). Mostra che l'hai letta davvero.",
          "Un'informazione utile per chi legge: una novità, un orario, un servizio che forse non conosce. Niente sconti o promozioni: chi ha scritto è già un cliente.",
        ],
        fonti: [G_RISPOSTE],
      },
      {
        id: "esempi",
        titolo: "Esempi per settore",
        paragrafi: ["Adatta i dettagli tra parentesi quadre e cambia sempre almeno la frase centrale, per non avere risposte tutte uguali."],
        tabella: {
          didascalia: "Esempi di risposta a recensioni positive, da adattare.",
          colonne: ["Attività", "Recensione (in breve)", "Risposta"],
          righe: [
            ["Bar", "Colazione ottima, cornetti caldi", "Grazie [nome]! I cornetti li sforniamo alle 6:30, quindi chi arriva presto li trova appena fatti. A presto!"],
            ["Ristorante", "Cena di compleanno perfetta", "Grazie [nome], felici che la festa sia andata bene! Per i gruppi da 8 persone in su abbiamo anche la sala sul retro: basta chiederla quando prenoti."],
            ["Pizzeria", "Impasto leggerissimo", "Grazie [nome]! L'impasto lievita 48 ore: è il nostro piccolo segreto. Il martedì c'è anche la pizza del mese."],
            ["Centro estetico", "Trattamento rilassante, [nome operatrice] bravissima", "Grazie [nome], lo diremo subito a [operatrice]! Da questo mese c'è anche [nuovo trattamento], se vuoi provarlo."],
            ["Negozio", "Consigli utili, ho trovato il regalo giusto", "Grazie [nome]! Ricordati che il cambio è possibile entro [giorni] con lo scontrino."],
          ],
        },
        prossimo: { testo: "Come ottenere più recensioni su Google: link, QR e messaggio WhatsApp", url: "/guide/come-ottenere-recensioni-google/" },
      },
      {
        id: "errori",
        titolo: "Gli errori da evitare",
        lista: [
          "La stessa frase copiata su tutte le recensioni.",
          "Risposte lunghissime: Google consiglia testi brevi e semplici.",
          "Promozioni e link a offerte nella risposta.",
          "Rispondere dopo mesi: meglio poche risposte puntuali che tante in ritardo.",
        ],
        fonti: [G_RISPOSTE],
      },
    ],
    faq: [
      { q: "Devo rispondere anche alle recensioni senza testo?", a: "Non è necessario. Concentrati su quelle con un testo: sono quelle che le persone leggono." },
      { q: "Posso usare l'IA per scrivere le risposte?", a: "Sì, per una bozza, ma rileggi e personalizza sempre il dettaglio centrale: risposte tutte uguali si notano." },
      { q: "Chi deve firmare la risposta?", a: "Il titolare o la persona che segue il profilo, con nome o iniziali: rende la risposta più umana." },
    ],
    correlati: ["come-rispondere-recensione-negativa", "come-ottenere-recensioni-google", "rispondere-recensioni-tripadvisor"],
  },
  {
    gruppo: "guide",
    tema: "recensioni",
    chiamata: "recensioni",
    slug: "come-ottenere-recensioni-google",
    titolo: "Come ottenere più recensioni su Google: link, QR e messaggio WhatsApp",
    titoloScheda: "Come ottenere più recensioni su Google",
    descrizione:
      "Come chiedere le recensioni su Google ai clienti contenti: dove trovare il link e il codice QR ufficiali, quando chiederle, i messaggi pronti e cosa è vietato.",
    rispostaRapida:
      "Il modo più semplice è chiederle al momento giusto, con il link ufficiale: dal profilo dell'attività su Google scegli “Leggi recensioni”, poi “Ottieni più recensioni” e copia il link o scarica il codice QR, che si genera solo da computer. Mandalo su WhatsApp o mettilo al banco. Non offrire mai sconti o regali in cambio: Google lo considera un incentivo vietato.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Apri il profilo dell'attività da computer", testo: "Vai su business.google.com con l'account che gestisce la scheda." },
      { nome: "Trova il link", testo: "Seleziona “Leggi recensioni”, poi “Ottieni più recensioni” e l'icona di condivisione." },
      { nome: "Copia il link", testo: "Tocca l'icona Copia: è il link da mandare su WhatsApp, via email o da mettere nella bio." },
      { nome: "Scarica il codice QR", testo: "Fai clic destro sul QR e scegli “Salva immagine con nome”. Da smartphone il QR per ora non si genera." },
    ],
    sezioni: [
      {
        id: "dove-mettere-link",
        titolo: "Dove usare il link e il QR",
        paragrafi: ["Google stesso suggerisce di portare il link dove il cliente ti incontra già. Per un'attività locale funzionano:"],
        lista: [
          "Un cartoncino con il QR vicino alla cassa o sul tavolo, con una frase semplice: “Ti è piaciuto? Lasciaci una recensione”.",
          "Il messaggio WhatsApp dopo una prenotazione, un ritiro o un appuntamento.",
          "Lo scontrino o la ricevuta, se il tuo gestionale permette di aggiungere un testo.",
          "La firma delle email e la bio di Instagram.",
        ],
        fonti: [G_LINK],
      },
      {
        id: "quando-chiedere",
        titolo: "Il momento giusto per chiederle",
        paragrafi: [
          "La richiesta funziona quando arriva subito dopo un momento positivo: il cliente ti ha appena fatto un complimento, ha ritirato una torta per una festa, è uscito contento dal parrucchiere. Chiedere a voce, e poi mandare il link, è più efficace del cartello da solo.",
          "Ricorda che per scrivere una recensione serve un account Google: se il cliente non lo ha, può crearlo anche con un indirizzo email non Gmail.",
        ],
        fonti: [G_RISPOSTE],
      },
      {
        id: "messaggi-pronti",
        titolo: "3 messaggi WhatsApp pronti",
        lista: [
          "Dopo una cena: “Grazie per essere stati da noi stasera! Se vi siete trovati bene, ci aiutate tantissimo con una recensione su Google: [link]. Buona serata, [nome]”",
          "Dopo un appuntamento: “Ciao [nome], grazie di essere passata oggi! Se ti va di raccontare com'è andata, la tua recensione su Google ci aiuta a farci conoscere: [link]”",
          "Dopo un ritiro o un acquisto: “Grazie per l'ordine di oggi! Se la [torta/prodotto] è piaciuta, ci lasci due righe su Google? [link] Ci aiuti più di quanto pensi.”",
        ],
        prossimo: { testo: "WhatsApp Business: come impostare le risposte e i messaggi automatici", url: "/guide/whatsapp-business-messaggio-automatico/" },
      },
      {
        id: "cosa-e-vietato",
        titolo: "Cosa è vietato",
        paragrafi: ["Le regole di Google sulle recensioni sono severe, e le violazioni possono portare a recensioni rimosse e a limitazioni sul profilo. Non è consentito:"],
        lista: [
          "Offrire sconti, prodotti gratis o pagamenti in cambio di una recensione.",
          "Chiedere a parenti, dipendenti o amici di scrivere recensioni sull'attività.",
          "Scrivere recensioni su un concorrente o farle scrivere a qualcuno.",
          "Fare pressione sul voto o chiedere di scrivere solo recensioni a 5 stelle: la richiesta deve lasciare il cliente libero di raccontare la sua esperienza.",
        ],
        fonti: [G_VIETATI],
      },
    ],
    faq: [
      { q: "Posso fare un concorso tra chi lascia una recensione?", a: "No: un premio legato alla recensione è un incentivo, e Google lo vieta. Puoi chiedere la recensione, non pagarla." },
      { q: "Perché una recensione non compare?", a: "Google controlla le recensioni prima di pubblicarle e a volte servono alcuni giorni. Quelle che violano le norme vengono rimosse." },
      { q: "Il QR funziona anche stampato in piccolo?", a: "Sì, ma stampalo almeno di 3–4 centimetri di lato e provalo con il tuo telefono prima di metterlo al banco." },
    ],
    correlati: ["come-rispondere-recensione-negativa", "come-rispondere-recensione-positiva", "come-farsi-trovare-su-google-maps"],
  },
  {
    gruppo: "guide",
    tema: "recensioni",
    chiamata: "recensioni",
    slug: "segnalare-recensione-google",
    titolo: "Recensioni Google false o offensive: come segnalarle",
    titoloScheda: "Come segnalare una recensione Google falsa",
    descrizione:
      "Quali recensioni Google si possono far rimuovere e quali no, come segnalarle dal profilo o dallo strumento di gestione, quanto si aspetta e come fare ricorso.",
    rispostaRapida:
      "Google rimuove solo le recensioni che violano le sue norme, come spam, insulti, conflitti di interesse o contenuti falsi; non interviene sulle critiche con cui non sei d'accordo. Per segnalarne una apri il profilo, scegli “Leggi recensioni”, tocca la bandierina accanto alla recensione, indica il motivo e invia. La valutazione richiede di solito alcuni giorni e puoi fare un solo ricorso.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    passi: [
      { nome: "Apri le recensioni del profilo", testo: "Dal profilo della tua attività su Google seleziona “Leggi recensioni”." },
      { nome: "Tocca la bandierina", testo: "Accanto alla recensione c'è l'icona di segnalazione: selezionala." },
      { nome: "Scegli il motivo", testo: "Indica il motivo più preciso, per esempio “Spam” o “Linguaggio volgare”, e seleziona “Invia segnalazione”." },
      { nome: "Segui lo stato", testo: "Nello strumento di gestione delle recensioni vedi se la segnalazione è in attesa, valutata o in ricorso." },
    ],
    sezioni: [
      {
        id: "cosa-si-rimuove",
        titolo: "Cosa si può far rimuovere (e cosa no)",
        tabella: {
          didascalia: "Sintesi delle norme di Google sui contenuti degli utenti di Maps.",
          colonne: ["Si può segnalare", "Non si può far rimuovere"],
          righe: [
            ["Spam e recensioni ripetute o automatiche", "Una critica che ritieni ingiusta"],
            ["Insulti, linguaggio volgare, attacchi personali", "Un voto basso senza testo"],
            ["Recensioni fuori tema (politica, notizie, altro locale)", "Un'opinione sul prezzo o sul servizio"],
            ["Conflitto di interessi (concorrenti, ex dipendenti)", "Una lamentela su un disservizio reale"],
            ["Contenuti falsi, foto rubate, dati personali", "Una recensione vecchia ma veritiera"],
          ],
        },
        paragrafi: [
          "Google è esplicito: non interviene nelle dispute tra attività e clienti e non rimuove le recensioni solo perché sono negative. In quei casi la strada giusta è una risposta pubblica fatta bene.",
        ],
        fonti: [G_SEGNALA, { titolo: "Google – Norme relative ai contenuti generati dagli utenti di Maps", url: "https://support.google.com/contributionpolicy/answer/7422880?hl=it" }],
        prossimo: { testo: "Come rispondere a una recensione negativa (con 5 esempi)", url: "/guide/come-rispondere-recensione-negativa/" },
      },
      {
        id: "tempi-ricorso",
        titolo: "Tempi, stato della segnalazione e ricorso",
        paragrafi: [
          "La valutazione richiede di solito alcuni giorni. Nello strumento di gestione delle recensioni trovi lo stato: in attesa di decisione, valutata senza violazioni oppure riassegnata dopo un ricorso.",
          "Se la recensione viene giudicata conforme, puoi presentare un ricorso una sola volta, anche per più recensioni insieme (fino a 10). La decisione arriva via email.",
          "Nello Spazio economico europeo, dallo stesso strumento si possono segnalare anche le recensioni che arrivano da siti terzi e compaiono nel profilo.",
        ],
        fonti: [G_SEGNALA],
      },
      {
        id: "casi-particolari",
        titolo: "Casi particolari",
        lista: [
          "Ricatto: se qualcuno minaccia recensioni negative per ottenere soldi o vantaggi, Google ha una procedura di segnalazione dedicata alle truffe estorsive.",
          "Ondata di recensioni sospette: Google può nascondere temporaneamente le recensioni di un profilo e mostrare un avviso ai clienti.",
          "Recensione vera rimossa per errore dai filtri antispam: contatta l'assistenza del Profilo dell'attività.",
        ],
        fonti: [G_SEGNALA, { titolo: "Google – Avvisi per i consumatori", url: "https://support.google.com/contributionpolicy/answer/15178562?hl=it" }],
      },
    ],
    faq: [
      { q: "Se faccio segnalare la recensione da molti amici viene tolta prima?", a: "No: conta se la recensione viola le norme, non il numero di segnalazioni. Una segnalazione precisa, con il motivo giusto, basta." },
      { q: "Nel frattempo devo rispondere?", a: "Se la recensione è offensiva puoi aspettare l'esito. Se contiene una critica, conviene rispondere con calma subito: la segnalazione potrebbe non andare a buon fine." },
      { q: "Posso chiedere a un avvocato di farla togliere?", a: "Per contenuti diffamatori esistono strade legali, da valutare con un professionista. Per tutto il resto vale la procedura di segnalazione di Google." },
    ],
    correlati: ["come-rispondere-recensione-negativa", "come-ottenere-recensioni-google", "rispondere-recensioni-tripadvisor"],
  },
  {
    gruppo: "guide",
    tema: "recensioni",
    chiamata: "recensioni",
    slug: "rispondere-recensioni-tripadvisor",
    titolo: "Come rispondere alle recensioni su Tripadvisor",
    titoloScheda: "Come rispondere alle recensioni Tripadvisor",
    descrizione:
      "Le regole di Tripadvisor per le repliche della direzione, cosa viene rifiutato, quanto aspettare la pubblicazione e due risposte d'esempio per ristoranti e bar.",
    rispostaRapida:
      "Su Tripadvisor rispondi con una “replica della direzione”, disponibile dopo esserti registrato come proprietario. La risposta deve essere pertinente, senza pubblicità né dati personali del cliente, scritta in una sola lingua e senza elenchi puntati. Non puoi accusare il recensore di aver scritto il falso: in quel caso si segnala. Le repliche conformi vengono pubblicate di solito entro 48 ore lavorative.",
    pubblicato: "2026-11-25",
    aggiornato: "2026-11-25",
    sezioni: [
      {
        id: "regole",
        titolo: "Le regole da rispettare",
        paragrafi: ["Tripadvisor controlla le repliche prima di pubblicarle e rifiuta quelle che non rispettano il suo regolamento. In sintesi, una replica non deve:"],
        lista: [
          "Contenere pubblicità, offerte o promesse di regali, denaro o servizi.",
          "Riportare conversazioni private con il cliente o pezzi della recensione.",
          "Indicare nomi, indirizzi, numeri o ipotesi sull'identità di chi ha scritto.",
          "Accusare il recensore di aver pubblicato un contenuto falso o minacciarlo.",
          "Contenere opinioni politiche, religiose o personali fuori tema.",
          "Usare elenchi puntati, formattazione o traduzioni automatiche incomprensibili, o mescolare più lingue.",
        ],
        fonti: [TA_REPLICHE],
      },
      {
        id: "differenze-google",
        titolo: "Cosa cambia rispetto a Google",
        tabella: {
          didascalia: "Confronto pratico tra risposte su Google e su Tripadvisor.",
          colonne: ["", "Google", "Tripadvisor"],
          righe: [
            ["Chi può rispondere", "Chi gestisce il profilo dell'attività verificato", "Chi è registrato come proprietario della struttura"],
            ["Pubblicazione", "Dopo un controllo automatico", "Dopo moderazione, di solito entro 48 ore lavorative"],
            ["Formattazione", "Testo semplice", "Niente elenchi puntati né formattazione"],
            ["Recensione che sembra falsa", "Si segnala dal profilo", "Si segnala a Tripadvisor; non va scritto nella replica"],
          ],
        },
        fonti: [TA_REPLICHE, G_SEGNALA],
      },
      {
        id: "esempi",
        titolo: "Due repliche d'esempio",
        paragrafi: [
          "Critica sul servizio: “Gentile ospite, grazie per il suo commento. Ci dispiace che l'attesa tra le portate sia stata lunga: quella sera avevamo due tavolate e non siamo stati all'altezza. Abbiamo rivisto l'organizzazione della sala per i gruppi. Speriamo di poterle offrire un'esperienza migliore alla prossima visita. [Nome], titolare”",
          "Recensione positiva: “Grazie mille! Siamo felici che la carbonara e il tiramisù le siano piaciuti: sono i piatti a cui teniamo di più. Le ricordiamo che il ristorante è aperto anche la domenica a pranzo. A presto, [Nome] e lo staff”",
          "Le stesse regole di tono valgono anche su Google: brevi, concrete, firmate.",
        ],
        prossimo: { testo: "Le 5 risposte per Google da adattare alle recensioni negative", url: "/guide/come-rispondere-recensione-negativa/" },
      },
    ],
    faq: [
      { q: "Posso rispondere più volte alla stessa recensione?", a: "La replica della direzione è pensata come un'unica risposta pubblica: conviene scriverla una volta, con calma. Gli scambi successivi si fanno in privato." },
      { q: "Posso scrivere la replica in inglese a un turista?", a: "Sì, ma in una sola lingua per replica: le risposte che mescolano più lingue vengono rifiutate." },
      { q: "A cosa servono le repliche, se la recensione resta?", a: "Servono a chi legge: chi sta scegliendo dove mangiare guarda come gestisci le critiche, e una replica calma e concreta rassicura più di molte stelle." },
    ],
    correlati: ["come-rispondere-recensione-negativa", "come-rispondere-recensione-positiva", "segnalare-recensione-google"],
  },
];
