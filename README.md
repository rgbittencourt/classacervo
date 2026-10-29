# ClassAcervo

Ferramenta gráfica para cuidar dos **cursos publicados no GitHub Pages**: ver, renomear, mover, duplicar e excluir pastas e arquivos, gerar o índice do site e copiar a lista de links para o Moodle. Faz parte do ecossistema **ClassAuthor** (planeja e escreve a disciplina) e **ClassAtelier** (dá o acabamento e publica). Desenvolvido por Prof. Rogério G. Bittencourt, INOVALAB, IFSC (Câmpus Florianópolis–Continente).

- **Endereço:** https://rgbittencourt.github.io/classacervo/
- **Versão atual:** **1.2.0** (Versionamento Semântico). Histórico em [`CHANGELOG.md`](CHANGELOG.md).
- Página estática, sem servidor: o navegador fala direto com a API do GitHub.

## Como usar

Abra o endereço acima, informe **conta, repositório, branch e token** do GitHub e use:

- **Cursos**: cartões com os cursos encontrados (pasta com `index.html` e `aula-NN.html`), link do site, link de cada aula e botão para copiar todos os links para o Moodle;
- **Todos os arquivos**: árvore de pastas e arquivos, com tamanho, link no site e pré-visualização;
- **Renomear/mover, duplicar e excluir**, sempre em um único commit (o histórico do GitHub guarda o anterior); excluir pede para digitar o nome;
- **Gerar índice do site**: cria um `index.html` listando os cursos (na raiz ou em qualquer pasta), marcado como gerado pela ferramenta; **Consertar links do índice** depois de renomear um curso;
- **Ligar o GitHub Pages**, quando estiver desligado.

O token vai direto do navegador ao GitHub. Os campos começam vazios; conta, repositório e token ficam só na aba, ou neste navegador se você marcar «lembrar».

## Instalar como aplicativo

Use o botão **Instalar app** do cabeçalho. No Chrome/Edge (computador e Android) abre o instalador do navegador; no iPhone/iPad, use Compartilhar → **Adicionar à Tela de Início** (Safari); no Mac, Safari → Arquivo → **Adicionar ao Dock**. O app instalado abre em janela própria; continua precisando de internet e do token. O token precisa de permissão de escrita no repositório dos cursos (conteúdo; para ligar o Pages, também administração do Pages).

## Estrutura deste repositório

| Caminho | O que é |
|---|---|
| `index.html`, `acervo.js`, `acervo.css` | o aplicativo |
| `sw.js` | service worker mínimo (guarda só a casca do app; instalação) |
| `assets/` | marca, ícones (`assets/icons/`), manifesto e imagens de crédito |
| `fonts/` | fontes variáveis usadas pela identidade visual (Newsreader, Geist, JetBrains Mono, Bricolage Grotesque) |
| `.nojekyll` | pede ao GitHub Pages que publique os arquivos como estão |

Publicação: GitHub Pages, branch `main`, pasta raiz (`/`).

## Relação com o ClassAtelier

O ClassAtelier tem o botão **Abrir o ClassAcervo** que leva a este endereço, e o endereço antigo (`…/classatelier/acervo/`) redireciona para cá. Este app não depende de nenhum arquivo do ClassAtelier para abrir.

## Ainda não verificado

As operações foram testadas contra uma simulação da API do GitHub, não contra o repositório real dos cursos.
