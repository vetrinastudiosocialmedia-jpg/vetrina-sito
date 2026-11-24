# Registro dei contenuti e dei pannelli

Una voce datata per ogni pubblicazione e ogni sessione su Google Search Console e Bing Webmaster Tools (docs/seo-content-spec.md, sezioni 15 e 16). Si scrive solo ciò che si è visto.


## 2026-11-25 — Secondo lotto: 30 guide (/guide/), divise in 6 temi

Segnali usati per la pauta (24/11/2026): suggerimenti di ricerca di Google Italia (google.it, “Le persone hanno chiesto anche” e completamento automatico) e confronti di Google Trends del 23/11/2026 (vedi il documento di progetto “vetrina-pesquisa-produtos-vendas”). Nessun dato di volume assoluto: i segnali dicono che la domanda esiste, non quanto è grande.

| Tema | Articoli | Ricerca reale da cui nasce | Fonti principali (lette il 24/11/2026) | Contributo originale |
| --- | --- | --- | --- | --- |
| Recensioni | come-rispondere-recensione-negativa, come-rispondere-recensione-positiva, come-ottenere-recensioni-google, segnalare-recensione-google, rispondere-recensioni-tripadvisor | “come rispondere ad una recensione negativa su google”, “recensioni google come fare/eliminare”, “come rispondere a recensione tripadvisor” | Google Business Profile (3474122, 4596773, 16816815, 7091), norme Google sui contenuti vietati, Tripadvisor regolamento repliche | 5 risposte negative e 5 positive per settore, messaggi WhatsApp per chiedere recensioni, tabella cosa si rimuove/cosa no, confronto Google–Tripadvisor |
| Google e Google Maps | come-farsi-trovare-su-google-maps, registrare-attivita-google-maps, rivendicare-attivita-google-maps, cambiare-orari-google, attivita-su-chatgpt | “come farsi trovare su google maps”, “google maps registrare/rivendica attività”, “google business profile come funziona” | Google (7091, 2911778, 4566671, 6303076, 3038177, 14509283), OpenAI help (ChatGPT search), studio BrightLocal | Tabella dei 3 fattori con “quanto puoi influire”, tabella delle opzioni orari, prova in 4 passi su ChatGPT |
| WhatsApp Business | whatsapp-business-come-funziona, whatsapp-business-messaggio-automatico, whatsapp-business-messaggio-a-piu-contatti, whatsapp-business-su-pc | “whatsapp business come funziona e quanto costa / mettere messaggio automatico / inviare messaggi a più contatti / scaricarlo su pc” | WhatsApp (download desktop, blog), Garante privacy (linee guida spam; provv. 16/01/2025), TechCrunch, Mailchimp, Shopify | 6 testi automatici pronti, tabella lista broadcast/gruppo, procedura per il consenso |
| Instagram | dimensioni-post-instagram, orari-migliori-pubblicare-instagram, quanti-hashtag-instagram, come-fare-reel-instagram, aumentare-visualizzazioni-reel, carosello-instagram, bio-instagram-attivita, idee-post-instagram-ristorante | “post instagram dimensioni 2026”, “orari migliori per pubblicare su instagram”, “hashtag instagram 2026”, “reel instagram come fare / aumentare visualizzazioni”, “post instagram con foto che scorrono”, “bio instagram perfetta”, “idee post instagram ristorante” | Instagram help e linee guida contenuti originali, Meta for Creators, Buffer, Sprout Social, Digital Trends, Social Media Today, Il Post | Tabella misure, schema dei 5 hashtag, 6 idee di Reel, checklist di 8 punti, 5 strutture di carosello, 10 bio, 30 idee in 4 settimane |
| Più clienti | aumentare-clienti-ristorante, aumentare-clienti-bar, aumentare-clienti-centro-estetico, aumentare-clienti-parrucchiere, aumentare-clienti-negozio | “come aumentare clienti ristorante / bar / centro estetico / in negozio”, “come aumentare clienti parrucchiere” (ricerca 22–23/11) | Google (7091, 13769188, 16816815, 7342169), Garante privacy | Piano in 4 settimane, tabelle per momenti della giornata, messaggi per far tornare i clienti, idee per i giorni lenti |
| IA e social media manager | prompt-chatgpt-post-instagram, migliorare-foto-prodotti-con-ia, social-media-manager-con-ia | “chatgpt instagram post prompt”, “prompt per rendere una foto professionale”, “ai social media manager” (Trends +300%) | Commissione europea (art. 50 AI Act), norme Google sui contenuti vietati, Digital Trends | 6 prompt, 4 prompt per foto, tabella sì/no dei ritocchi, tabella dei compiti IA/persona, 5 domande per scegliere un servizio |

- Parole: da 352 a 734 per articolo (i nuovi), contate da scripts/genera-seo.mjs. Ogni articolo ha almeno 3 correlati e da 1 a 3 link di “prossimo passo”.
- Collegamenti dai vecchi ai nuovi: aggiunto 1 correlato a ciascuno dei 4 articoli del 20/11 (data di aggiornamento invariata).
- L'indice /guide/ è diviso per temi (campo `tema`); i 5 articoli del piè di pagina sono in `IN_EVIDENZA` in lib/articoli.mjs.
- Chiamata finale: tema recensioni e Google → WhatsApp; gli altri → piani.
- Verifiche prima di pubblicare: “Verifiche degli articoli: 34 articoli in regola” (scripts/genera-seo.mjs), nessun link interno rotto, un solo H1 per pagina.
- Dopo la pubblicazione: IndexNow con i nuovi indirizzi; Google e Bing: sitemap e richiesta di indicizzazione solo dei nuovi, poco per volta (quota giornaliera).

## 2026-11-20 — Primo lotto di guide (/guide/)

| Articolo | Segnale che ha motivato la pauta | Fonti (lette il 20/11/2026) | Contributo originale |
| --- | --- | --- | --- |
| /guide/quanto-costa-social-media-manager/ | Domanda tipica dei clienti e delle IA ("quanto costa…") | Cronoshare, guida prezzi 2026 | Tabella di confronto delle 4 soluzioni, costo per contenuto dei piani, checklist del preventivo |
| /guide/ogni-quanto-pubblicare-su-instagram/ | Domanda tipica dei clienti | Buffer, studio su 2,1 mln di post (ago 2025); Buffer, orari migliori 2026 (9,6 mln di post) | Tabella dei dati tradotta, settimana tipo con 3 post |
| /guide/cosa-pubblicare-su-instagram-bar/ | Pubblico principale: bar | Instagram for Business, pagina Reels | Calendario di 4 settimane (12 post, 4 Reel, Stories) |
| /guide/foto-piatti-con-lo-smartphone/ | Il cliente invia ~10 foto al mese | Apple, guida iPhone (Griglia e Allineamento orizzontale); Meta for Developers, IG User Media | Passo a passo in 6 punti, tabella delle angolazioni, checklist di 10 punti |

- Parole: 661, 573, 629, 649. Ogni articolo ha 3 correlati e da 1 a 2 link interni di "prossimo passo".
- Verifiche prima di pubblicare: superate (scripts/genera-seo.mjs).
- Dopo la pubblicazione: IndexNow con i 5 nuovi indirizzi; Google: richiesta di indicizzazione dell'indice /guide/; Bing: invio degli URL nuovi.

## 2026-11-20 — Google Search Console

- Proprietà di dominio vetrinastudiosocial.it verificata con record TXT su Aruba ("Proprietà verificata automaticamente").
- Sitemap inviata: https://vetrinastudiosocial.it/sitemap.xml → stato "Impossibile recuperare" al primo invio (normale per una proprietà nuova; ricontrollare).
- Controllo URL della home: "Rilevata, ma attualmente non indicizzata", scoperta tramite sitemap → "Indicizzazione richiesta".

## 2026-11-20 — Bing Webmaster Tools

- Sito importato da Google Search Console (accesso in sola lettura autorizzato dalla titolare dell'account).
- Sitemap inviata → "successfully submitted for processing", stato "Processing".

## 2026-11-19 — IndexNow

- Inviate le 5 pagine pubbliche → risposta 200 (ricevuto, non vuol dire indicizzato).
