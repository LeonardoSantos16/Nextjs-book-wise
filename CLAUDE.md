# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão geral

BookWise: plataforma de avaliação de livros (desafio Ignite/Rocketseat). Next.js 13 com **Pages Router**, TypeScript, Prisma (PostgreSQL), NextAuth (Google + GitHub), Stitches, TanStack Query v4, React Hook Form + Zod. UI e mensagens em português.

## Comandos

```bash
npm install            # roda `prisma generate` no postinstall
npm run dev            # servidor de desenvolvimento
npm run build          # `prisma migrate deploy` + `next build` (exige DATABASE_URL válida)
npm run lint           # next lint (ESLint Rocketseat + Prettier)
npx prisma migrate dev # aplica/cria migrations localmente
npx prisma db seed     # popula o banco (tsx prisma/seeds/seed.ts) — apaga ratings/users/books/categorias antes
```

Não há suíte de testes. Para validar tipagem: `npx tsc --noEmit`.

Variáveis de ambiente: ver `.env.example` (`DATABASE_URL`, `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_ID/SECRET`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`).

## Arquitetura

### Convenção de extensões de página (importante)
`next.config.mjs` define `pageExtensions: ['page.tsx', 'api.ts', 'api.tsx']`. Logo:
- Páginas precisam terminar em `.page.tsx` (ex.: `src/pages/explorer/index.page.tsx`).
- Rotas de API precisam terminar em `.api.ts` (ex.: `src/pages/api/book/all.api.ts`).
- Qualquer outro arquivo dentro de `src/pages/` (ex.: `src/pages/explorer/BookCard/index.tsx`) **não** vira rota — é usado para componentes colocalizados com a página. Por isso, `getServerSideProps` exportado nesses arquivos (ex.: `CommentBox`, `CommentModal`) nunca é executado pelo Next.

### Layout e providers
`src/pages/_app.page.tsx` envolve tudo em `QueryClientProvider` + `SessionProvider` e aplica `MainLayout` (Sidebar + conteúdo) em todas as rotas exceto `/` e `/login`.

### Dados
- Frontend chama a API interna via `api` (axios com `baseURL: '/api'`, em `src/lib/axios.ts`), normalmente dentro de `useQuery` do TanStack Query.
- Rotas de API acessam o banco direto via `prisma` (`src/lib/prisma.ts`) e checam `req.method` manualmente, retornando 405 para métodos não suportados.
- Modelos (`prisma/schema.prisma`): `User`, `Book`, `Category`, `CategoriesOnBooks` (N:N livro↔categoria), `Rating` (usuário avalia livro), mais `Account`/`Session` do NextAuth. Colunas usam snake_case (`avatar_url`, `book_id`, `created_at`), mapeadas para tabelas no plural via `@@map`.
- Dados do seed ficam em `constants/` (fora de `src/`).

### Autenticação
- `src/pages/api/auth/[...nextauth].api.ts` exporta `buildNextAuthOptions(req, res)`, reutilizado com `getServerSession` em `getServerSideProps` das páginas.
- Adapter Prisma customizado em `src/lib/auth/prisma-adapter.ts` (mapeia para os campos snake_case do schema).
- Os callbacks `profile` dos providers retornam `{ id, name, avatar_url }`; o callback `session` expõe o `User` do banco inteiro em `session.user`. Tipagem estendida em `src/@types/next-auth.d.ts`.
- Domínios de imagens remotas permitidos (avatares Google/GitHub, Unsplash) estão em `next.config.mjs` → `images.domains`.

### Estilo
- Stitches: tokens/tema em `src/stitches.config.ts`, estilos globais em `src/styles/global.ts`.
- Cada componente tem `index.tsx` + `styles.ts` na mesma pasta.
- Alias de import `@/*` → `src/*`.
