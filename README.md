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
| Página de boas-vindas com questionário (depois do pagamento) | `components/Benvenuto.jsx` (endereço: /benvenuto/) |
| Links de pagamento Stripe e planos do PayPal | **não ficam no código**: veja "Variáveis de ambiente" |
| Privacy, Cookie, Termini | `app/privacy/page.jsx`, `app/cookie/page.jsx`, `app/termini/page.jsx` |
| Título e descrição para o Google | `app/layout.jsx` |
| Estilos gerais e versão para celular | `app/globals.css` |
| Imagens e logo | `public/img/` |

A ordem das seções está em `app/page.jsx`.

## Atualizar o site pelo navegador

1. Recebeu um `.zip` novo com os arquivos do site? Abra **Add file → Upload files** neste repositório, arraste o `.zip` e clique em **Commit changes**.
2. A publicação automática extrai o arquivo, salva os arquivos no repositório e publica o site em 2–3 minutos (acompanhe na aba **Actions**).

## Rodar no computador (opcional)

```bash
npm install
npm run dev     # abre em http://localhost:3000
npm run build   # gera o site estático na pasta out/
```

## Domínio

O arquivo `public/CNAME` diz ao GitHub Pages que o site responde em `vetrinastudiosocial.it`. O DNS fica na Aruba.

## Variáveis de ambiente (.env)

Os códigos dos planos do PayPal não ficam no repositório.

- **No GitHub:** Settings → Secrets and variables → Actions → **Secrets**: `STRIPE_LINK_ESSENZIALE`, `STRIPE_LINK_CRESCITA`, `STRIPE_LINK_PRO` (checkout Stripe, têm prioridade) e `PAYPAL_PLAN_ESSENZIALE`, `PAYPAL_PLAN_CRESCITA`, `PAYPAL_PLAN_PRO` (usados só se faltar o link Stripe). A publicação automática usa esses valores na hora de montar o site.
- **No computador (opcional):** copie `.env.example` para `.env.local` e preencha. O `.env.local` nunca vai para o GitHub.

Atenção: num site estático, o que aparece na página (como o link de assinatura do PayPal) fica visível para quem visita. Os códigos de plano não são senhas: ninguém consegue mexer no seu PayPal com eles. A **Secret** do app do PayPal, essa sim, nunca deve ir para o site nem para o repositório.
