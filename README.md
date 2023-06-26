<h1 align="center">
    <img alt="Shopping List" src=".docs/shopping-list.png" height="120px" />
</h1>

<p align="center">
  <img alt="node v18.16.0" src="https://img.shields.io/badge/node-v18.16.0-blue"/>
  <img alt="npm 9.5.1" src="https://img.shields.io/badge/npm-9.5.1-blue"/>
  <img alt="posgreSQL 15.0" src="https://img.shields.io/badge/postgreSQL-15.0-blue"/>
</p>

---

## Instalação

Crie o arquivo na raiz do projeto .env e configure os parametros abaixo incluindo seu banco PostgreSQL

```
DATABASE_URL=postgres://<user>:<password>@<host>/<database>?pgbouncer=true&connect_timeout=10
DIRECT_URL=postgres://<user>:<password>@<host>/<database>?connect_timeout=10
SHADOW_DATABASE_URL=postgres://<user>:<password>@<host>/<database>?pgbouncer=true&connect_timeout=10
PORT= 3284
```

Instale o **nodemon** globalmente

```
npm install -g nodemon
```

Fazer o clone do repositório

```
https://github.com/ananiasc/shopping-list-api.git
```

Instalar os pacotes

```
npm install
```

Build do servidor

```
npm run build
```

Rodar o servidor

```
npm run start
```

Rodar o servidor em desenvolvimento

```
npm run dev
```

## Documentação

A documentação criada com Swagger pode ser acessada através da rota [localhost:3284/api-docs](http://localhost:3284/api-docs)