# Histórico de versões do ClassAcervo

Segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/) (MAIOR.MENOR.CORREÇÃO). O número aparece no subtítulo do cabeçalho, no rodapé de créditos e no rodapé dos índices que o app gera; fica na constante `APP_VERSION` de `acervo.js` e no rodapé de `index.html`. Ao mudar a versão, altere os dois lugares e a data abaixo.

## 1.4.6 · 04/11/2026 · Manual Class atualizado

- O **Manual Class** descreve os interruptores do bloco Vídeo do ClassAtelier (1.15.0). O ClassAcervo em si não mudou.

## 1.4.5 · 04/11/2026 · Manual Class atualizado

- O **Manual Class** descreve o resumo do vídeo do ClassAtelier (1.14.0). O ClassAcervo em si não mudou.

## 1.4.4 · 04/11/2026 · Manual Class atualizado

- O **Manual Class** descreve a legenda sincronizada do bloco Vídeo (ClassAtelier 1.13.0). O ClassAcervo em si não mudou.

## 1.4.3 · 03/11/2026 · Manual Class atualizado

**Acrescentado**
- O **Manual Class** que o app guarda ganhou o alinhamento do texto do Parágrafo (ClassAtelier 1.12.0). O ClassAcervo em si não mudou; o número sobe para o app instalado guardar o manual novo.

## 1.4.2 · 03/11/2026 · Manual Class atualizado

**Acrescentado**
- O **Manual Class** que o app guarda (e que abre sem internet) ganhou as seções «Chaves de API próprias» e «Passar o ClassAuthor para outro professor» (ClassAuthor 1.12.0 e ClassAtelier 1.11.0). O ClassAcervo em si não mudou; o número sobe para o app instalado guardar o manual novo.

## 1.4.1 · 03/11/2026 · Manual Class atualizado

**Acrescentado**
- O **Manual Class** que o app guarda (e que abre sem internet) foi atualizado: descreve as miniaturas, o «Alterado há …», a situação do site, o «Testar links» e o «Relatório para o Moodle», além das novidades do ClassAuthor e do ClassAtelier. A versão do `sw.js` mudou para o app instalado trocar o manual antigo pelo novo.

## 1.4.0 · 03/11/2026 · Relatório para o Moodle

**Acrescentado**
- Botão **Relatório para o Moodle…** na lista de cursos: escolha um ou vários cursos e o ClassAcervo reúne, de uma vez, os **links de todas as aulas** (para criar os Recursos URL) e os **fóruns** que as aulas trazem.
- Os fóruns são lidos de dentro das aulas publicadas (o projeto vai embutido no arquivo da aula). Cada um aparece como **Já criado** (com o endereço que foi colado no bloco) ou **A criar no Moodle** (bloco sem endereço, ou com o «https://» de modelo). Para os que faltam, o relatório traz o **nome e a descrição** (pergunta, prazos, regras e critérios) prontos para copiar.
- Botões para **copiar** os links das aulas e a lista de fóruns a criar, e para **baixar** o relatório em **.txt** ou **.csv** (planilha, com acentos corretos no Excel).

**Observação**
- Só lê o repositório; não altera nada. Páginas que não são aulas do ClassAtelier aparecem como «sem leitura» (não têm lista de fóruns). Aula publicada antes de o bloco de fórum receber o endereço mostra o fórum como «A criar» até ser publicada de novo.

## 1.3.0 · 03/11/2026 · Ver o que está publicado

**Acrescentado**
- **Miniatura** de cada curso no cartão: uma prévia reduzida da página real do curso no GitHub Pages (clicar abre o site). O botão **Miniaturas: sim/não** liga e desliga; a escolha fica neste navegador.
- Chip **Alterado há …** em cada curso: data do último commit que mexeu na pasta (o texto do commit aparece ao pousar o mouse).
- Chip de situação do site no topo da lista: **Site em dia**, **Publicando…**, **Site um pouco atrás do repositório** ou **Última publicação falhou**, lido do último build do GitHub Pages.
- **Testar links** em cada curso e **Testar todos os links** no topo: abre a página do curso e cada aula e marca **No ar**, **Não encontrada** (404), **Sem resposta** ou **Erro NNN**, com o resumo «2 de 3 links no ar». Ao pousar o mouse no «No ar» aparece a data da versão publicada.

**Observação**
- O teste só lê (pedido `HEAD`); não altera nada. Em site privado ou sem conexão o resultado é «Sem resposta».

## 1.2.1 · 03/11/2026 · Manual Class dentro do app

**Acrescentado**
- Botão **Manual ↗** no cabeçalho: abre o Manual Class numa aba nova, direto no capítulo do ClassAcervo. O manual fica na pasta `manual/` do repositório e o app instalado também o guarda, então ele abre sem internet.

**Mudou**
- O título da aba do navegador segue o padrão dos três apps: «ClassAcervo - Cursos publicados».

## 1.2.0 · 29/10/2026 · instalável e sem dados do autor na tela

**Acrescentado**
- **Instalar app**: o ClassAcervo pode ser instalado como aplicativo no computador (Chrome e Edge), no tablet e no celular (Android: Chrome/Edge/Samsung Internet; iPhone e iPad: Safari, em «Adicionar à Tela de Início»; Mac: Safari, «Adicionar ao Dock»). O botão **Instalar app** do cabeçalho abre o instalador do navegador quando ele oferece, ou mostra o passo a passo do aparelho; some quando o app já está instalado.
- Manifesto completo (ícones 192 e 512, comuns e *maskable*, categorias, idioma) e *service worker* (`sw.js`) que guarda só a «casca» do app: abre mesmo sem conexão, mas para trabalhar continua precisando de internet e do token. As chamadas ao GitHub nunca passam por ele nem ficam guardadas.

**Mudou**
- Os campos de conexão começam **vazios** e os exemplos dentro deles são neutros («sua-conta», «seu-repositorio»); nenhuma conta, repositório ou pasta do autor aparece como valor ou como exemplo (o mesmo vale para os exemplos nas mensagens e no índice gerado). Ficam apenas os créditos de autoria do rodapé.
- **Lembrar** agora guarda conta, repositório **e** token, só se a pessoa marcar a caixa. Sem marcar, nada é gravado no navegador: os dados valem só enquanto a aba estiver aberta (antes, conta e repositório eram sempre lembrados).

## 1.1.0 · 29/10/2026 · endereço próprio

O ClassAcervo ganhou repositório e endereço próprios: **https://rgbittencourt.github.io/classacervo/** (antes: `…/classatelier/acervo/`).

- Nenhuma função mudou. O que mudou foi a casa: este repositório traz o app com as marcas, as fontes e o manifesto de que ele precisa, sem depender das pastas do ClassAtelier.
- O botão **ClassAtelier ↗** agora aponta para `https://rgbittencourt.github.io/classatelier/`.
- **Não exige ação:** o endereço novo está na mesma origem (`rgbittencourt.github.io`), então o repositório lembrado e, se você marcou, o token continuam salvos no navegador. Quem instalou o app a partir do endereço antigo precisa instalar de novo a partir do novo.
- No ClassAtelier, `…/classatelier/acervo/` passou a redirecionar para cá, então links antigos continuam funcionando.

## 1.0.0 · 29/10/2026 · primeira versão de produção

Administra os cursos publicados no GitHub Pages direto do navegador, falando com a API do GitHub (sem servidor).

- Conexão por conta, repositório, branch e token do GitHub (o token fica só no navegador).
- Abas **Cursos** e **Todos os arquivos**; links das aulas e **Copiar todos os links (lista para o Moodle)**.
- **Renomear/mover**, **Duplicar**, **Excluir** (com confirmação digitando o nome, e exclusão em lote), cada operação em um único commit.
- **Gerar índice do site** em qualquer pasta e **Consertar links do índice** de cursos renomeados.
- Chip do GitHub Pages (liga o Pages se estiver desligado); botão **ClassAtelier ↗**; instalável como aplicativo.

**Ainda não verificado:** as operações foram testadas contra uma simulação da API do GitHub, não contra o repositório real.
