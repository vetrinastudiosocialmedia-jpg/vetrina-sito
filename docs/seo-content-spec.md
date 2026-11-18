Spec de Conteúdo para SEO e IA
Especificação para qualquer site, feito em qualquer tecnologia: onde ficam os artigos, regras editoriais, rodapé-diretório, dados estruturados, robots.txt, sitemap, llms.txt, testes, auditoria, IndexNow e a configuração do Google Search Console e do Bing Webmaster Tools feita por uma IA no navegador.

qualquer tecnologia
HTML puro, CMS ou framework
3 prompts prontos
Spec completa
Prompts
Checklist
Verificações rápidas
Arquivo .md
Nesta spec
1. Princípios
2. Onde as coisas ficam
3. Dados de cada artigo
4. Regras editoriais
5. Como o artigo é montado na página
6. Rodapé-diretório
7. Cabeçalho da página e dados estruturados
8. robots.txt
9. sitemap.xml
10. llms.txt e llms-full.txt
11. Página "Sobre e conteúdo"
12. Verificações antes de publicar
13. Verificações do site no ar
14. IndexNow (Bing, Yandex, Seznam, Naver)
15. Fluxo de publicação
16. Configuração automática dos buscadores (IA no navegador)
17. Acompanhamento
18. O que não fazer
Especificação para qualquer site, feito em qualquer tecnologia (HTML puro, gerador de site estático, CMS ou framework). Diz o que precisa existir e como deve ser feito para os artigos serem encontrados, entendidos e citados por buscadores e assistentes de IA: onde ficam os artigos, regras editoriais, rodapé, dados estruturados, robots.txt, sitemap.xml, llms.txt, verificações, IndexNow e a configuração do Google Search Console e do Bing Webmaster Tools feita por uma IA no navegador.

Como usar: salve este arquivo no projeto (ex.: docs/seo-content-spec.md) e cole um dos prompts do apêndice no seu agente de IA. O agente descobre a tecnologia do projeto e aplica a spec do jeito dela.

1. Princípios
Uma fonte da verdade para os artigos. Existe um único lugar com a lista de artigos e os dados de cada um (título, descrição, datas, grupo, relacionados). Sitemap, rodapé, llms.txt, índices dos grupos e links relacionados saem dessa lista. Num site com build ou CMS, isso é gerado automaticamente. Em HTML puro, a lista é um arquivo (planilha, JSON, YAML ou o próprio README) e há um checklist de publicação que atualiza todos os lugares de uma vez.
Resposta primeiro. Todo artigo abre com uma "Resposta rápida" que responde a pergunta em um parágrafo. É o trecho que o Google destaca e que assistentes de IA citam.
Tudo no HTML entregue. Texto, links, metadados e dados estruturados chegam no HTML que o servidor manda. Nada essencial depende de JavaScript rodando no navegador.
Uma URL por assunto. Sem duplicatas, sem parâmetros, sem dois artigos disputando a mesma busca.
Verdade verificável. Número, norma, preço ou estatística têm fonte ao lado. Nada inventado. Nenhuma promessa de posição no Google.
Verificado antes e depois de publicar. As regras desta spec são conferidas automaticamente sempre que possível, e o site no ar é conferido depois de cada publicação.
Registro de tudo. Cada publicação e cada sessão nos painéis dos buscadores viram uma anotação datada com o que foi feito e o que foi visto.
2. Onde as coisas ficam
O que importa é o endereço público, não a pasta no código. O site precisa responder nestes caminhos:

Endereço	O que é
/	Página inicial
/<grupo>	Índice de um grupo (categoria) com todos os artigos dele
/<grupo>/<slug>	Um artigo
/sobre	Quem faz o conteúdo, como é feito, contato e correções
/termos, /privacidade	Páginas legais
/robots.txt	Regras para robôs
/sitemap.xml	Lista de todas as URLs públicas
/llms.txt	Mapa do site em texto para assistentes de IA
/llms-full.txt	Todos os artigos em texto, para assistentes de IA
/<chave>.txt	Arquivo de comprovação do IndexNow
/editorial/<nome>.webp	Imagens dos artigos
No projeto, mantenha separados:

Conteúdo: os artigos (um arquivo por artigo ou por grupo, no formato que o projeto usa: HTML, Markdown, JSON, banco do CMS).
Modelo do artigo: o layout único que todo artigo usa (cabeçalho, resposta rápida, seções, FAQ, rodapé). Em HTML puro, um arquivo-modelo copiado para cada artigo novo.
Arquivos gerados: sitemap, llms.txt, llms-full.txt, índices dos grupos e rodapé.
Imagens editoriais: uma pasta só para elas.
Registros: uma pasta de documentação com as anotações datadas (docs/ ou equivalente).
Esta spec, junto da documentação.
Regras de URL

Grupo e slug em minúsculas, sem acento, palavras separadas por hífen.
Slug = a busca que a pessoa faz, curto (3 a 6 palavras). Ex.: /guias/como-calcular-preco-de-venda.
Nunca mude um endereço publicado. Se for inevitável, redirecionamento 301 do antigo para o novo e atualização de todos os links internos.
Uma forma só para cada endereço: sempre com ou sempre sem barra no fim, sempre https, sempre com ou sempre sem www (as outras formas redirecionam com 301).
Endereço que não existe responde 404 de verdade (não uma página "não encontrada" com status 200).
3. Dados de cada artigo
Todo artigo tem estes campos, guardados na fonte da verdade:

Campo	Regra
Grupo	Um dos grupos do site
Slug	Formato da seção 2, único no grupo
Título (H1)	As palavras que a pessoa digita na busca
Título da aba (<title>)	30 a 65 caracteres, único no site; o nome do site vai depois, ex.: "Título | Nome do site"
Descrição (meta description)	110 a 165 caracteres, única
Resposta rápida	30 a 80 palavras, responde a pergunta inteira
Publicado em	AAAA-MM-DD, nunca muda depois de publicado
Atualizado em	AAAA-MM-DD, muda só em revisão real; nunca antes da publicação
Passo a passo	Opcional: lista de passos quando o artigo ensina um procedimento
Seções	Cada uma com âncora única, título (H2), parágrafos e, se fizer sentido, lista, tabela, imagem, fontes e links de próximo passo
Perguntas frequentes	Pelo menos 1
Relacionados	Pelo menos 3 artigos que existem, nunca o próprio
Cada grupo tem: slug, nome curto (rodapé e breadcrumb), título (H1 do índice) e descrição.

4. Regras editoriais
Pauta
Uma pergunta real por artigo. Antes de escrever, procure no conteúdo existente: não repetir pauta nem disputar a mesma busca. Se já existe, melhore o existente.
De onde vêm as pautas: consultas com impressão e sem clique no Search Console, "As pessoas também perguntam" do Google, AI Performance do Bing, dúvidas reais de clientes, lançamentos e documentação oficial do setor.
Cada pauta precisa de uma entrega original: conta resolvida, tabela comparativa, exemplo com números, checklist, desenho próprio, passo a passo testado. Sem entrega original, não publique.
Não diga "mais buscado" ou "maior crescimento" sem dado de volume. Diga qual sinal motivou a pauta.
Escrita
Um H1 por página. Seções em H2, subseções em H3; nunca pular nível.
Resposta rápida logo abaixo do título, com o número principal quando houver.
Parágrafos curtos (2 a 4 frases), na linguagem do público; todo termo técnico explicado na primeira vez.
Tamanho: mínimo de 200 palavras; o comum é 600 a 1.200. Tamanho não é meta: pare quando a dúvida estiver resolvida.
Tabela para comparar, lista para passos e checklists.
Perguntas frequentes com o que a pessoa perguntaria depois de ler; respostas de 1 a 3 frases.
Fontes na seção que as usa, sempre https, de preferência primárias (fabricante, órgão oficial, norma, documentação). Anote a data de leitura no registro.
Nunca inventar número, preço, norma, estatística, depoimento ou citação. Sem fonte: diga que é estimativa e de onde vem, ou corte a frase.
Não atribuir ao produto o que ele não faz. Não prometer resultado de busca.
Chamada para o produto no fim e, no máximo, uma no meio, sempre útil para quem leu.
Links internos
Pelo menos 3 relacionados por artigo.
Links de próximo passo dentro das seções (ferramenta, artigo relacionado, índice do grupo).
Ao publicar artigos novos, ligue de 1 a 3 artigos antigos a cada novo, sem mudar a data de atualização dos antigos só por isso.
Texto do link descreve o destino ("tabela de medidas de guarda-roupa"), nunca "clique aqui".
Datas
A data de publicação nunca muda.
A data de atualização muda só quando conteúdo, números ou fontes mudam de verdade.
A data mostrada no artigo é a mesma do sitemap e dos dados estruturados.
Imagens
Formato WebP, na pasta das imagens editoriais, nome em minúsculas com hífen.
width e height no HTML iguais às medidas reais do arquivo.
alt descreve o que a imagem mostra; legenda (figcaption) explica o que ela ensina.
Desenhos e diagramas próprios, com o arquivo de origem guardado no projeto para refazer. Foto de banco de imagens só com licença e crédito.
5. Como o artigo é montado na página
Ordem fixa, igual em todos os artigos:

Breadcrumb: Início › Grupo, com links.
H1 e a linha "Por <Nome do site> · Atualizado em DD/MM/AAAA · N min de leitura", com link rel="author" para /sobre#conteudo.
Resposta rápida em destaque.
Ferramenta interativa (calculadora, simulador), se houver, logo depois da resposta.
Sumário "Nesta página" com links para as âncoras (quando houver 3 ou mais seções).
Passo a passo, se houver.
Seções: parágrafos, listas, tabelas com legenda, imagens com legenda, fontes e próximos passos.
Perguntas frequentes.
Leia também: os relacionados.
Chamada para o produto.
Acessibilidade: lang certo no <html>, áreas de toque de pelo menos 44 px, contraste suficiente, nada que só aparece passando o mouse.

6. Rodapé-diretório
Toda página pública (inicial, índices, artigos, sobre, termos) tem o mesmo rodapé:

Uma coluna por grupo: o nome do grupo (link para /<grupo>) e os 5 primeiros artigos (texto = título da aba), mais "Ver todos (N)" quando houver mais.
Embaixo: nome e descrição do site, Sobre e conteúdo, Termos de uso, Política de privacidade, entrar/contato e créditos de imagens.
Links comuns <a href>, visíveis no HTML; nada de menu que só aparece com JavaScript.
O rodapé ajuda três públicos: pessoas (navegação), buscadores (descoberta de páginas) e robôs de IA (mapa do site). Atualize sempre que um artigo entra ou sai.
7. Cabeçalho da página e dados estruturados
No <head> de cada artigo
<html lang="pt-BR">
<head>
  <title>Título da aba | Nome do site</title>
  <meta name="description" content="Descrição de 110 a 165 caracteres.">
  <link rel="canonical" href="https://exemplo.com/grupo/slug">
  <meta name="robots" content="index, follow, max-image-preview:large">

  <meta property="og:type" content="article">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:url" content="https://exemplo.com/grupo/slug">
  <meta property="og:title" content="Título do artigo">
  <meta property="og:description" content="Mesma descrição.">
  <meta property="og:image" content="https://exemplo.com/imagem-social.png">
  <meta property="article:published_time" content="2026-01-10">
  <meta property="article:modified_time" content="2026-02-03">
  <meta name="twitter:card" content="summary_large_image">
</head>
O canonical é o endereço absoluto do próprio artigo.
Páginas privadas (login, painel, área do cliente) levam <meta name="robots" content="noindex">.
Dados estruturados (JSON-LD)
Um bloco <script type="application/ld+json"> com @graph em cada página:

Página	O que vai no bloco
Inicial	Organization, WebSite, o produto ou negócio (SoftwareApplication, Product, LocalBusiness…) com preços reais em offers, e FAQPage se houver perguntas
Índice do grupo	Organization, CollectionPage ou ItemList, BreadcrumbList
Artigo	Organization, Article, BreadcrumbList, FAQPage e, se houver passo a passo, HowTo
Sobre	Organization, AboutPage
Exemplo de artigo:

{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://exemplo.com/#organization", "name": "Nome do site", "url": "https://exemplo.com/", "logo": "https://exemplo.com/logo-512.png" },
    {
      "@type": "Article",
      "headline": "Título do artigo",
      "description": "Mesma descrição.",
      "url": "https://exemplo.com/grupo/slug",
      "mainEntityOfPage": "https://exemplo.com/grupo/slug",
      "inLanguage": "pt-BR",
      "datePublished": "2026-01-10",
      "dateModified": "2026-02-03",
      "wordCount": 850,
      "image": ["https://exemplo.com/editorial/desenho.webp"],
      "author": { "@type": "Organization", "@id": "https://exemplo.com/#organization", "name": "Nome do site", "url": "https://exemplo.com/sobre#conteudo" },
      "publisher": { "@id": "https://exemplo.com/#organization" }
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://exemplo.com/" },
      { "@type": "ListItem", "position": 2, "name": "Grupo", "item": "https://exemplo.com/grupo" },
      { "@type": "ListItem", "position": 3, "name": "Título do artigo", "item": "https://exemplo.com/grupo/slug" }
    ] },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Pergunta?", "acceptedAnswer": { "@type": "Answer", "text": "Resposta curta." } }
    ] }
  ]
}
Regras: URLs sempre absolutas; o mesmo @id da organização em todo o site; datas iguais às mostradas na página; o texto do FAQ igual ao que aparece na página; nenhum < cru dentro do JSON (escreva <).

8. robots.txt
User-agent: *
Allow: /
Disallow: /login
Disallow: /painel
Disallow: /api/

User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Allow: /
Disallow: /login
Disallow: /painel
Disallow: /api/

Sitemap: https://exemplo.com/sitemap.xml
Bloqueie o que é privado: login, painel, área do cliente, APIs, páginas de teste, links curtos de campanha.
Não bloqueie CSS, JavaScript nem imagens: o Google precisa ver a página como as pessoas veem.
robots.txt não tira página do Google; para isso use noindex. Página com noindex não pode estar bloqueada no robots.txt, senão o robô nunca lê o noindex.
Quer ser citado por IA, mas não usado em treino? Bloqueie só os robôs de treino (GPTBot, Google-Extended, CCBot, Applebot-Extended) e mantenha os de busca (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot). É decisão do dono do site; anote qual foi.
Se o site tem uma camada de login que intercepta tudo, libere sem login: robots.txt, sitemap.xml, llms.txt, llms-full.txt, ícones, imagem social, imagens e o arquivo da chave do IndexNow.
9. sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://exemplo.com/grupo/slug</loc>
    <lastmod>2026-02-03</lastmod>
    <image:image><image:loc>https://exemplo.com/editorial/desenho.webp</image:loc></image:image>
  </url>
</urlset>
Endereço	lastmod
/	data da última mudança real da página inicial
/<grupo>	a data de atualização mais recente entre os artigos do grupo
/<grupo>/<slug>	a data de atualização do artigo, com as imagens dele
/sobre, /termos, /privacidade	data real da última mudança do texto
Só endereços canônicos, públicos, com status 200, indexáveis e sem parâmetros. Nada privado, nada que redireciona.
lastmod honesto: nunca "hoje" em tudo a cada publicação (o Google passa a ignorar).
Acima de 50.000 endereços, divida em vários sitemaps com um índice.
10. llms.txt e llms-full.txt
Seguem o formato de llmstxt.org, em texto puro UTF-8.

/llms.txt:

# Nome do site

> Descrição de uma linha.

Parágrafo sobre o negócio: o que é, para quem, como funciona, preço e como começar (com o endereço).

## Nome do grupo

- [Título do artigo](https://exemplo.com/grupo/slug): descrição do artigo

## Opcional

- [Todo o conteúdo em texto](https://exemplo.com/llms-full.txt)

## Sobre e contato

- [Sobre e conteúdo](https://exemplo.com/sobre): responsável, contato e correções.
/llms-full.txt: o mesmo começo e depois cada artigo inteiro em Markdown (endereço, datas, resposta rápida, passo a passo, seções com fontes, listas e tabelas, perguntas frequentes). O texto tem que ser o mesmo da página.

11. Página "Sobre e conteúdo"
/sobre, com a âncora #conteudo:

Quem é o responsável (empresa ou pessoa), o que faz e desde quando.
Como os artigos são feitos: pesquisa, fontes, revisão, datas; o que é exemplo e o que é recomendação.
Se usa IA para escrever, e quem revisa.
Contato e política de correções: como pedir, em quanto tempo, como a correção aparece.
Links para termos e privacidade.
Todo artigo aponta a autoria para essa página. Ela é a base de confiança (o que o Google chama de E-E-A-T).

12. Verificações antes de publicar
Se o projeto tem build ou testes, transforme cada item em verificação automática. Se é HTML puro, use um script simples (na linguagem que o projeto já usa) ou confira item por item:

 Nenhum endereço /<grupo>/<slug> repetido; todo grupo tem pelo menos um artigo.
 Slugs só com minúsculas, números e hífen.
 Pelo menos 3 relacionados por artigo, todos existentes, nenhum apontando para o próprio artigo.
 Título da aba com 30 a 65 caracteres e único; descrição com 110 a 165.
 Resposta rápida com 30 palavras ou mais; pelo menos 1 pergunta frequente; artigo com 200 palavras ou mais.
 Imagens em WebP com width/height iguais ao arquivo, alt e legenda descritivos.
 Âncoras de seção únicas na página.
 Datas no formato AAAA-MM-DD e atualização não anterior à publicação.
 Todo link interno aponta para uma página que existe; toda fonte é https.
 Sitemap, rodapé, índices dos grupos, llms.txt e llms-full.txt com o artigo novo.
13. Verificações do site no ar
Para cada endereço do sitemap, depois de publicar:

sitemap.xml e robots.txt respondem 200; o robots.txt aponta para o sitemap; o sitemap não tem endereços repetidos nem com parâmetros.
O endereço não está bloqueado no robots.txt.
Responde 200, sem redirecionar, sem noindex (nem na meta, nem no cabeçalho X-Robots-Tag).
Tem exatamente um canonical, igual ao próprio endereço.
<title> presente e diferente de todas as outras páginas; meta description presente; exatamente um <h1>.
og:url, quando houver, igual ao endereço; lang certo no <html>.
JSON-LD válido em toda página de conteúdo; no Article, url e mainEntityOfPage iguais ao endereço, publicação não posterior à atualização e BreadcrumbList junto.
Resultado esperado: "N de N páginas aprovadas" ou a lista do que corrigir, página por página. Também vale conferir algumas páginas no Teste de pesquisa aprimorada e no validador do Schema.org. Passar nessas verificações não garante indexação nem posição: garante que o site não atrapalha.

14. IndexNow (Bing, Yandex, Seznam, Naver)
Gere uma chave com 32 caracteres hexadecimais e publique o arquivo /<chave>.txt contendo só a chave.
Confira que https://<domínio>/<chave>.txt responde 200 com o texto exato, sem redirecionar para login.
Depois de cada publicação, envie só os endereços novos ou alterados:
POST https://api.indexnow.org/indexnow
Content-Type: application/json; charset=utf-8

{
  "host": "exemplo.com",
  "key": "<chave>",
  "keyLocation": "https://exemplo.com/<chave>.txt",
  "urlList": ["https://exemplo.com/grupo/slug"]
}
Antes de enviar, confira que cada endereço está no sitemap publicado e é canônico (sem parâmetros, sem #, do próprio domínio).
Resposta 200 = recebido; 202 = recebido, chave ainda em validação; outra = erro (leia a mensagem). Recebido não quer dizer indexado; não reenvie o mesmo lote só porque ainda não apareceu.
Se o site tem deploy automático, o envio pode virar um passo depois do deploy, com a lista de endereços que mudaram.
15. Fluxo de publicação
pauta → aprovação → artigo escrito → imagens → links dos antigos para os novos
  → verificações antes de publicar → publicar
  → verificações do site no ar → abrir as páginas novas no navegador
  → IndexNow (só os novos) → Google: sitemap + pedir indexação (só os novos)
  → Bing: sitemap + enviar URLs → registro datado
Registro do lote: tabela com artigo, sinal e fontes, entrega original; contagem de palavras; links criados; resultado das verificações; data da publicação; ações nos painéis com a confirmação vista; lista de fontes com data de leitura.

16. Configuração automática dos buscadores (IA no navegador)
Feita por um agente de IA que controla o navegador, já logado na conta Google e na conta Microsoft do dono. O prompt pronto está no apêndice.

Limites da IA
Para e chama a pessoa em: login, senha, verificação em duas etapas, captcha, aceitar termos, adicionar usuários ou permissões, DNS (a menos que autorizado), remover propriedade, remoção de URL, "Validar correção" em massa, qualquer pagamento.
Antes de cada ação que muda algo, diz o que vai fazer. Só conta como feito depois de ver a confirmação na tela.
Não repete pedidos de indexação nem reenvios em sequência; respeita a cota diária do Google (poucos endereços por dia, só os novos ou alterados).
No registro escreve só o que viu, com a data de atualização de cada relatório, separando o dado da interpretação.
Google Search Console (search.google.com/search-console)
Propriedade: preferir Domínio (cobre http, https e subdomínios). Verificação por registro TXT no DNS: a IA copia o valor, a pessoa cria o registro (ou a IA, se autorizada no painel do DNS) e a IA clica em "Verificar". Alternativas: propriedade por prefixo de URL com a meta tag google-site-verification ou o arquivo HTML de verificação na raiz do site.
Sitemaps → enviar sitemap.xml → conferir Processado e o número de páginas encontradas igual ao do sitemap.
Inspeção de URL na página inicial e em cada endereço novo → "Testar URL publicada" → se estiver tudo certo, Solicitar indexação → esperar "Indexação solicitada". Anotar o canonical escolhido pelo Google e o último rastreamento.
Páginas: anotar indexadas e não indexadas com cada motivo (rastreada sem indexação, detectada sem indexação, bloqueada pelo robots, 404, redirecionamento, canônica alternativa). Abrir exemplos de cada motivo e separar o que é esperado (páginas privadas, redirecionamentos certos) do que precisa de correção.
Desempenho: últimos 28 dias por página, consulta e dispositivo, comparando com os 28 anteriores. Consulta com muitas impressões e poucos cliques → ajustar título, descrição e resposta rápida. Consulta sem artigo → vira pauta.
Ações manuais e Problemas de segurança: conferir "Nenhum problema".
Validar correção só depois de uma correção publicada de verdade, e só para o motivo corrigido.
Bing Webmaster Tools (bing.com/webmasters)
Adicionar site: "Importar do Google Search Console" (traz a propriedade e os sitemaps). Sem Google: verificação por DNS (CNAME), meta tag msvalidate.01 ou arquivo BingSiteAuth.xml na raiz.
Sitemaps → enviar sitemap.xml → conferir Success, endereços descobertos, zero erros e avisos.
IndexNow: conferir que o painel mostra os envios feitos pelo site.
Inspeção de URL nos novos → Request indexing quando aparecer "Discovered but not crawled" ou "Not discovered".
Enviar URLs (Submit URLs) para os novos que ainda faltarem, dentro da cota diária.
Site Scan: criar uma varredura pelo sitemap (com a data no nome) e voltar depois para ler o resultado.
AI Performance: citações em respostas do Copilot e parceiros por página. As páginas mais citadas têm prioridade de revisão e de links internos.
Recomendações: anotar. Nunca comprar links nem contatar terceiros sem a pessoa decidir.
Outros (se fizer sentido)
Yandex Webmaster e Naver: recebem o IndexNow; cadastrar só se houver público nesses países.
Perfil da Empresa no Google: para negócio com endereço físico.
Registro de cada sessão
# <Google ou Bing> — <AAAA-MM-DD>

Propriedade: <...>. Relatórios atualizados em: <data mostrada no painel>.

## Números vistos
<período, cliques, impressões, CTR, posição; por página; por dispositivo>

## Ações (com a confirmação vista)
- Sitemap reenviado → "Processado", N páginas.
- /grupo/slug → "Indexação solicitada".

## Interpretação
<o que os dados sugerem, separado do que foi visto; o que não dá para concluir>

## Pendências
<o que ficou para a pessoa ou para a próxima sessão, e por quê>
17. Acompanhamento
Toda semana: verificações do site no ar, Search Console (Páginas e Desempenho), Bing (AI Performance), novas pautas.
Depois de cada publicação: comparar 28 dias antes e depois por endereço e dispositivo, junto do que importa para o negócio (cadastros, contatos, uso das ferramentas).
A cada 3 meses: revisar os artigos com mais impressões; atualizar números, fontes e a data de atualização.
Página que continua fora do Google depois de novo rastreamento: rever utilidade, duplicação e conteúdo. Não insistir em pedidos de indexação.
18. O que não fazer
Comprar ou trocar links; publicar texto gerado em massa sem revisão; páginas por cidade com o mesmo texto trocando o nome; mostrar uma coisa para o robô e outra para as pessoas; palavras escondidas.
Prometer posição, prazo de indexação ou citação por IA.