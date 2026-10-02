# BookWise

Plataforma de avaliações de livros desenvolvida como desafio técnico da trilha Ignite da Rocketseat. O projeto é uma aplicação Full Stack que gerencia autenticação, relacionamentos complexos de banco de dados e fluxos de avaliação de usuários.

## Tech Stack

* **Framework:** Next.js (Pages Router)
* **Linguagem:** TypeScript
* **ORM:** Prisma
* **Banco de Dados:** PostgreSQL
* **Autenticação:** NextAuth.js (Google e GitHub)
* **Estilização:** Stitches (CSS-in-JS)
* **Estado e Fetching:** TanStack Query (React Query) e Axios
* **Formulários:** React Hook Form + Zod
* **Ícones:** Phosphor React

## Implementação Técnica
* **Autenticação OAuth:** Login com Google e GitHub via NextAuth, persistindo sessões e contas diretamente no banco de dados.
* **Modelagem de Dados:** Estrutura relacional envolvendo Usuários, Livros, Categorias e Avaliações (Ratings).
* **Lógica de Rating:** Implementação de cálculos de média de avaliações e validação de comentários por usuário.
* **Consumo de API:** Arquitetura de API Routes do Next.js para processar requisições do lado do servidor.

## Estrutura do Projeto

* `prisma/`: Schema, migrations e scripts de seed para popular o banco.
* `constants/`: Dados usados pelo seed (livros, categorias, usuários e avaliações).
* `src/components/`: Componentes de interface (Sidebar, Star Rating, Cards).
* `src/layouts/`: Wrappers de estrutura de página.
* `src/lib/`: Configurações de clientes (Prisma, Axios, React Query) e adapter do NextAuth.
* `src/pages/api/`: Endpoints backend para processamento de dados.

## Figma
[Figma Bookwise](https://www.figma.com/community/file/1215328197733881367)

## 🚀 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LeonardoSantos16/Nextjs-book-wise
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:** copie o `.env.example` para `.env` e preencha `DATABASE_URL` (PostgreSQL), as credenciais OAuth do Google e do GitHub, `NEXTAUTH_SECRET` e `NEXTAUTH_URL`.
   ```bash
   cp .env.example .env
   ```
4. **Configure o banco de dados:**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```
5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
