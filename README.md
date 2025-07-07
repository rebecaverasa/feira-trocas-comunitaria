# Feira de Trocas Comunitária

API para gerenciamento de usuários, itens e propostas de trocas, utilizando Node.js, Express e Prisma ORM com PostgreSQL.

## Pré-requisitos

- Node.js (v18 ou superior recomendado)
- npm
- PostgreSQL

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone <url-do-repositorio>
   cd feira-trocas-comunitaria
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um banco de dados PostgreSQL.
   - Copie o arquivo `.env.example` para `.env` e configure a variável `DATABASE_URL`:
     ```env
     DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
     ```

4. **Rode as migrações do Prisma:**
   ```sh
   npx prisma migrate dev
   ```

5. **Gere o Prisma Client:**
   ```sh
   npx prisma generate
   ```

6. **Inicie a aplicação:**
   ```sh
   npm start
   ```
   ou
   ```sh
   node src/server.js
   ```

## Endpoints principais

### Usuários
- `GET    /usuarios`           - Lista todos os usuários
- `GET    /usuarios/:id`       - Busca usuário por ID
- `POST   /usuarios`           - Cria um novo usuário
- `PUT    /usuarios/:id`       - Atualiza um usuário
- `DELETE /usuarios/:id`       - Remove um usuário

### Itens
- `GET    /itens`              - Lista todos os itens
- `GET    /itens/:id`          - Busca item por ID
- `POST   /itens`              - Cria um novo item
- `PUT    /itens/:id`          - Atualiza um item
- `DELETE /itens/:id`          - Remove um item

### Propostas
- `GET    /propostas`          - Lista todas as propostas
- `GET    /propostas/:id`      - Busca proposta por ID
- `POST   /propostas`          - Cria uma nova proposta
- `PUT    /propostas/:id`      - Atualiza uma proposta
- `DELETE /propostas/:id`      - Remove uma proposta

## Scripts úteis

- `npm run dev`   - Inicia o servidor em modo desenvolvimento (se usar nodemon)
- `npx prisma studio` - Abre o Prisma Studio para visualizar e editar dados

## Estrutura do Projeto

- `src/server.js`           - Arquivo principal do servidor
- `src/routes/index.js`     - Rotas da aplicação
- `src/controllers/`        - Controllers das entidades
- `prisma/schema.prisma`    - Definição do schema do banco de dados

## Observações
- Certifique-se de que o banco de dados está rodando antes de iniciar a aplicação.
- Para customizar as portas ou variáveis, edite o arquivo `.env`.

---

Feito com ❤️ para a comunidade!