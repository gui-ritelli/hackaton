# Portal de Estágios - Backend

API REST desenvolvida em Node.js, Express, Prisma e MySQL.

## Tecnologias

- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL
- Zod

## Instalação

```bash
npm install
```

## Configuração

Criar arquivo `.env`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/portal_estagios"
```

## Executar projeto

```bash
npm run dev
```

Servidor:

```text
http://localhost:3000
```

## Rotas

### Alunos

POST /alunos

GET /alunos

GET /alunos/:id

### Empresas

POST /empresas

GET /empresas

GET /empresas/:id

PATCH /empresas/:id/aprovar

### Vagas

POST /vagas

GET /vagas

GET /vagas/:id

### Candidaturas

POST /candidaturas

GET /candidaturas

PATCH /candidaturas/:id

## Funcionalidades

- Cadastro de alunos
- Cadastro de empresas
- Cadastro de vagas
- Candidatura em vagas
- Aprovação de empresas
- Aprovação/Reprovação de candidaturas
- Validação de dados com Zod
