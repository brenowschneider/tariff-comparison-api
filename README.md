## Description

Tariff Comparison API made with [Nest](https://github.com/nestjs/nest) framework and TypeScript.

## Installation

```bash
$ git clone https://github.com/brenowschneider/tariff-comparison-api

$ cd tariff-comparison-api

$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

By default, the application will run on port 3000 (http://localhost:3000/)

## Unit Tests

The cases/examples described in the API requirement can also be verified through unit tests,
which can be executed by running the command.


```bash
$ npm run test
```

## Routes available

There is only one available route for the API, which is the comparison between products based on an annual consumption (in kWh)

Considering that the application is run locally, the comparison can be achieved through the following route:

```bash
$ GET http://localhost/products/compare/3500
$ GET http://localhost/products/compare/4500
$ GET http://localhost/products/compare/6000
```

The application accepts any number greater or equal than zero for executing the comparison
