# Histórico de versões do ClassAcervo

Segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/) (MAIOR.MENOR.CORREÇÃO). O número aparece no subtítulo do cabeçalho, no rodapé de créditos e no rodapé dos índices que o app gera; fica na constante `APP_VERSION` de `acervo.js` e no rodapé de `index.html`. Ao mudar a versão, altere os dois lugares e a data abaixo.

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
