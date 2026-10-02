# Spec: Responsividade

## Contexto

Hoje o layout só funciona bem perto de 1436px de largura. Os principais problemas são:
- **Tamanhos fixos:** sidebar `23rem × 98rem`, `ContentHome` com altura `85rem`, listas com `55rem`/`70rem` e rolagem interna, `CommentModal` com `66rem`, busca do Explorar com `43.3rem` e card de perfil com `30.8rem`.
- **Sem breakpoints:** não há nenhum `@media`, e o `stitches.config.ts` não define `media`.
- **Grid fixo:** o grid do Explorar tem sempre 3 colunas.

**Objetivo:** a aplicação deve funcionar de **320px** até telas largas, com foco em mobile, sem scroll horizontal em nenhuma largura.

## Decisões

| Tema | Decisão |
|---|---|
| Abordagem | Mobile-first. Os estilos base são os do mobile, e os breakpoints usam `min-width` |
| Breakpoints | 3 faixas: base (< 768px), `md` (≥ 768px), `lg` (≥ 1024px) |
| Largura mínima | 320px sem quebra de layout nem scroll horizontal |
| Navegação mobile | Header no topo (logo + avatar/login) e bottom tab bar fixa (Início, Explorar, Perfil) |
| Navegação tablet | Sidebar estreita, só com ícones e avatar |
| Navegação desktop | Sidebar completa, como hoje |
| Scroll | A página inteira rola em todas as faixas. Sem alturas fixas nem scroll interno nas listas |
| Home: livros populares | No mobile/tablet, carrossel horizontal acima do feed. No desktop, coluna lateral `sticky` |
| Explorar: grid | 1 / 2 / 3 colunas, com `repeat(auto-fill, minmax(…, 1fr))` |
| Perfil: estatísticas | No mobile/tablet, ficam no topo em formato compacto (avatar, nome, grid 2×2). No desktop, coluna lateral `sticky` |
| Painel do livro (`CommentModal`) | Tela cheia no mobile, com botão de fechar no topo. Drawer lateral a partir de `md` |
| Login | Imagem escondida no mobile, só conteúdo centralizado. Imagem volta a partir de `md` |
| Entrega | Em 3 fases, um commit por fase |

## Especificação técnica

### 1. Breakpoints no Stitches

Adicionar ao `createStitches` em `src/stitches.config.ts`:

```ts
media: {
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
},
```

Uso: `'@md': { … }`, `'@lg': { … }`. Não usar `@media` cru nos `styles.ts`.

### 2. Regras gerais

- **Root:** manter `:root { font-size: 10px }` (1rem = 10px), para não mudar as escalas existentes.
- **Larguras fixas:** trocar `width` fixo por `width: 100%` + `maxWidth` quando o elemento precisar de limite.
- **Alturas fixas:** remover `height` fixo de containers de conteúdo (`ContentHome`, `SectionContent`, `BooksListProfile`, `ContainerProfile`, `ContainerSidebar`). Só controles podem ter altura fixa.
- **Imagens:** capas e imagens do `next/image` precisam de `maxWidth: 100%` e `height: auto` (ou tamanho controlado pelo container).
- **Toque:** áreas clicáveis com no mínimo 4.4rem (44px), principalmente na tab bar, nas tags e nas estrelas do `Rating`.
- **Espaçamento:** gutter lateral de `1.6rem` no mobile, `2.4rem` no `md` e `3.2rem` no `lg`.
- **Barra inferior:** com a tab bar fixa, o `main` precisa de `paddingBottom` igual à altura dela + `env(safe-area-inset-bottom)`.
- **Tags:** as tags de categoria do Explorar rolam na horizontal no mobile, sem quebrar em várias linhas.

### 3. Layout e navegação (`MainLayout`, `Sidebar`)

- Tirar os estilos inline de `src/layouts/MainLayout.tsx` e levar para um `styles.ts`.
- **Mobile (< md):**
  - a sidebar fica oculta;
  - mostrar um `MobileHeader` (logo à esquerda; à direita o avatar logado ou um botão "Fazer login");
  - mostrar uma `BottomNav` fixa com Início, Explorar e Perfil, onde Perfil só aparece para quem está logado;
  - o item ativo é destacado com a mesma cor e indicador do desktop.
- **Tablet (md):**
  - sidebar estreita (~8rem), com logo reduzido, ícones sem texto e avatar ou ícone de login no rodapé;
  - `height: calc(100vh - 4rem)` e `position: sticky`.
- **Desktop (lg):**
  - sidebar completa, como hoje, mas com altura `calc(100vh - 4rem)` e `sticky` em vez de `98rem`;
  - o `MainLayout` mantém `maxWidth: 144rem`.
- Os itens de menu deixam de usar `position: absolute` (hoje em `ItemMenu`) e passam a seguir o fluxo normal.

### 4. Home

- **Mobile/tablet:**
  - ordem: título, `CardBeginVisitor`/última leitura, carrossel "Livros populares" e depois "Avaliações mais recentes";
  - o carrossel usa `display: flex`, `overflowX: auto`, `scrollSnapType: 'x mandatory'` e cards com largura ~28rem;
  - a barra de rolagem do carrossel fica oculta.
- **Desktop:** duas colunas como hoje; a coluna de populares fica `sticky`.
- O feed usa o scroll da página, sem `height: 55rem`.

### 5. Explorar

- `ExplorerHeader`: no mobile, título e busca ficam empilhados, com a busca em `width: 100%`. A partir de `md`, voltam a ficar lado a lado, com a busca em `maxWidth: 43.3rem`.
- `SectionTags`: no mobile, uma linha com scroll horizontal. A partir de `md`, `flexWrap: wrap`.
- `SectionBooks`: `gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 30rem), 1fr))'`, verificando que o resultado é 1/2/3 colunas nas faixas.
- `BookCard`: a capa encolhe proporcionalmente e o texto quebra sem estourar o card.

### 6. Painel do livro (`CommentModal`, `ReviewBook`, `CommentBox`, `ModalLogin`)

- **Mobile:**
  - `width: 100%` e `height: 100dvh`, com padding reduzido (`2.4rem 1.6rem`);
  - botão de fechar fixo no topo, com área de toque ≥ 4.4rem;
  - o `body` não rola enquanto o painel está aberto (`overflow: hidden`).
- **md+:** drawer lateral com `width: min(66rem, 100%)`.
- **`ReviewBook`:** no mobile, a capa fica acima das informações e os metadados (páginas, categoria) ficam empilhados.
- **`CommentBox`:** o textarea ocupa 100% da largura, e as ações (cancelar/enviar) não devem quebrar.
- **`ModalLogin`:** os dois modais de login (`src/components/ModalLogin` e `src/pages/explorer/ModalLogin`) ocupam `width: calc(100% - 3.2rem)` com `maxWidth` atual, centralizados.

### 7. Perfil

- **Mobile/tablet:**
  - `ProfileMain` vira coluna;
  - o `Profile` (estatísticas) vai para o topo, com avatar + nome em linha e estatísticas em grid 2×2;
  - sem `borderLeft`, com divisor horizontal.
- **Desktop:** duas colunas como hoje, com a coluna de estatísticas `sticky`.
- `BooksListProfile` usa o scroll da página, sem `height: 70rem`.
- `ButtonBack` precisa de área de toque ≥ 4.4rem.

### 8. Login (`/` e `/login`)

- **Mobile:**
  - imagem oculta, conteúdo centralizado na vertical e na horizontal;
  - `LoginContent` com `width: 100%`, `maxWidth: 37.2rem` e sem altura fixa;
  - `ContainerLogin` com `minHeight: 100dvh`, não `height: 100vh`.
- **md+:** imagem visível, com altura limitada a `calc(100dvh - 4rem)` e `object-fit: cover`.

## Fases de entrega

1. **Base e navegação:** breakpoints no Stitches, `MainLayout` com styled components, `MobileHeader`, `BottomNav`, sidebar responsiva (ícones/completa) e login.
2. **Home e Explorar:** carrossel de populares, remoção das alturas fixas, header/tags/grid do Explorar e `BookCard`.
3. **Perfil e painel do livro:** layout do perfil, `CommentModal` em tela cheia, `ReviewBook`, `CommentBox` e modais de login.

Cada fase termina com `npm run lint` e `npx tsc --noEmit` sem erros, e com uma checagem visual nas larguras abaixo.

## Critérios de aceite

- **Sem scroll horizontal:** em 320, 360, 390, 768, 1024, 1280 e 1440px, em todas as rotas (`/`, `/login`, `/home`, `/explorer`, `/profile`) e com o painel do livro aberto.
- **Desktop igual a hoje:** em 1440px o visual continua equivalente ao atual, salvo as melhorias de altura e `sticky`.
- **Rolagem única:** nenhuma lista tem scroll interno. Só existem a rolagem da página e a do carrossel/tags.
- **Navegação:** a tab bar (mobile) e a sidebar de ícones (tablet) levam a todas as rotas, e o item ativo fica destacado.
- **Painel do livro no mobile:** abre em tela cheia, fecha pelo botão do topo e bloqueia o scroll do fundo.
- **Toque:** todos os alvos de toque têm ≥ 44px no mobile.
- **Conteúdo não escondido:** nenhum texto ou imagem fica cortado ou coberto pela tab bar, incluindo a safe area do iOS.

## Fora de escopo

- Mudanças de identidade visual, cores ou tipografia.
- Gestos (swipe para fechar, bottom sheet arrastável).
- Modo paisagem otimizado em celulares (só precisa não quebrar).
- Testes automatizados de regressão visual.
