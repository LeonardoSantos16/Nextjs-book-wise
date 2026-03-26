# BookWise

Plataforma de avaliações de livros desenvolvida como desafio técnico da trilha Ignite da Rocketseat. O projeto é uma aplicação Full Stack que gerencia autenticação, relacionamentos complexos de banco de dados e fluxos de avaliação de usuários.

## Tech Stack

* **Framework:** Next.js (Pages Router)
* **Linguagem:** TypeScript
* **ORM:** Prisma
* **Banco de Dados:** SQLite (Dev)
* **Autenticação:** NextAuth.js (Google Provider)
* **Estilização:** Stitches (CSS-in-JS)
* **Estado e Fetching:** TanStack Query (React Query) e Axios
* **Formulários:** React Hook Form + Zod
* **Ícones:** Phosphor React

## Implementação Técnica
* **Autenticação OAuth:** Integração com Google Login e github via NextAuth, persistindo sessões e contas diretamente no banco de dados.
* **Modelagem de Dados:** Estrutura relacional envolvendo Usuários, Livros, Categorias e Avaliações (Ratings).
* **Lógica de Rating:** Implementação de cálculos de média de avaliações e validação de comentários por usuário.
* **Consumo de API:** Arquitetura de API Routes do Next.js para processar requisições do lado do servidor.
* **SEO e UX:** Uso de `next-seo` para gerenciamento de meta tags e esqueletos de carregamento para melhor experiência do usuário.

## Estrutura do Projeto

* `prisma/`: Schemas, migrations e scripts de seed para popular o banco.
* `src/components/`: Componentes de interface (Sidebar, Star Rating, Cards).
* `src/layouts/`: Wrappers de estrutura de página.
* `src/lib/`: Configurações de clientes (Prisma, Axios, Google APIs).
* `src/pages/api/`: Endpoints backend para processamento de dados.

## Figma
[Figma Bookwise](https://www.figma.com/community/file/1215328197733881367)

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LeonardoSantos16/Nextjs-book-wise
2. **Intalar as dependências:**
   ```bash
   npm install
3. **Configure o Banco de Dados:**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
4. Inicie o servidor de desenvolvimento:
      ```bash
   npm run dev
