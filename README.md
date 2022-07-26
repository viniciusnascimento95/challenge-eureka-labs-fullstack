### challenge-eureka-labs-fullstack

## About project

Elaborar uma aplicação para ajudar um usuário a fazer a consulta de um CEP. Onde ao
informar um CEP a tela apresentará informações de endereço como bairro, município e
logradouro. Para tal crie uma um api rest com integração com o serviço ViaCEP e uma
aplicação web.

No backend deverá ser feito um cache das consultas realizadas pelo usuário. Após
uma consulta ser feita na api do viaCEP, as informações de endereço devem ser
armazenadas em um banco de dado e nas consultas subsequentes do mesmo CEP,
estas informações devem ser retornadas com o que foi salvo no banco de dados sem
buscar novamente no serviço viaCEP.

O frontend deve possuir uma tela com um campo para informar o CEP, um botão para
realizar a busca, e após clicar no botão deverá ser apresentado as informações do
endereço.

## Tech Stack

**Client:** React, Chakra ui, Yup, Axios, Cypress

**Server:** Nest.js, PostgreSQL, Typeorm, Docker, Jest.js,

## Installation

Clone the project

```bash
  git clone https://github.com/viniciusnascimento95/challenge-eureka-labs-fullstack.git

  cd challenge-eureka-labs-fullstack
```

# Backend

### Directory project backend

    .
    ├── backend                 # Aplication server
    ├── frontend                # Aplication client
    └── README.md

Go to the project directory

```bash
  cd backend
```

Install dependencies NPM

```bash
  npm install
```

## Docker

Start database PostgreSQL

```bash
  docker-compose up
```

Run migrations api backend

```bash
  npm run typeorm migration:run
```

Start backend

```bash
  npm run start:dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Screenshots backend test unit

![Screenshot](./backend/images/screen-test.png)

## API docs run in http://localhost:3333/api

![Screenshot](./backend/images/swagger-docs-api.png)

## Frontend

Go to the project directory

```bash
  cd frontend
```

Install dependencies NPM

```bash
  npm install
```

Start web server Local: http://localhost:3000

```bash
  npm start
```

## Screenshots frontend

![Screenshot](./frontend/images/home.png)

## Result test e2e with Cypress

![Screenshot](./frontend/images/test-e2e.png)

### Obrigatório

- [x] Um banco de dados de sua preferência para armazenar os dados de consulta,
      pode ser um banco SQL ou NOSQL;
- [x] Um Readme com visão geral do projeto, que explique como rodar o projeto e testes
      se possuir;
- [x] Incluir prints da tela do teste

### Desejável

- [x] Utilize uma arquitetura para o projeto que ache adequado para demonstrar seus
      conhecimentos.
- [x] Boa experiência para o usuário usando a aplicação web;
- [x] Testes;

## Authors

[@viniciusnascimento95](https://www.github.com/viniciusnascimento95)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vin%C3%ADcius-nascimento-027507159/)
