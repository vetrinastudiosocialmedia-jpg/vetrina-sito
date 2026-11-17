# Vetrina Studio – sito

Sito di **Vetrina Studio – Agenzia Social Media**, pubblicato su [vetrinastudiosocial.it](https://vetrinastudiosocial.it).

Feito em **Next.js** (exportação estática) e hospedado no **GitHub Pages**. A cada alteração enviada para o ramo `main`, o GitHub monta e publica o site sozinho (veja a aba **Actions**).

## Onde mudar cada coisa

| O que | Arquivo |
|---|---|
| Número do WhatsApp, e-mail, Instagram | `lib/site.js` |
| Topo da página (menu, título, telefone) | `components/Hero.jsx` |
| Serviços | `components/Servizi.jsx` |
| "Ti suona familiare?" | `components/Problema.jsx` |
| Come funziona + Come lavoriamo | `components/ComeFunziona.jsx` |
| Planos e preços | `components/Pacchetti.jsx` |
| Sito Vetrina | `components/SitiWeb.jsx` |
| Portfólio | `components/Portfolio.jsx` |
| Perguntas frequentes | `components/Faq.jsx` |
| Contato | `components/Contatti.jsx` |
| Rodapé | `components/Footer.jsx` |
| Botão flutuante do WhatsApp | `components/WhatsAppFloat.jsx` |
| Privacy, Cookie, Termini | `app/privacy/page.jsx`, `app/cookie/page.jsx`, `app/termini/page.jsx` |
| Título e descrição para o Google | `app/layout.jsx` |
| Estilos gerais e versão para celular | `app/globals.css` |
| Imagens e logo | `public/img/` |

A ordem das seções está em `app/page.jsx`.

## Rodar no computador (opcional)

```bash
npm install
npm run dev     # abre em http://localhost:3000
npm run build   # gera o site estático na pasta out/
```

## Domínio

O arquivo `public/CNAME` diz ao GitHub Pages que o site responde em `vetrinastudiosocial.it`. O DNS fica na Aruba.
