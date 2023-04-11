# Built using Nest JS

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Swagger Documentation

```
localhost:3000/api
```

## Change Cassandra configuration

- Open up .env file
- Change the username and password

```
CASSANDRA_USERNAME=<cassandra-username> // leave blank if not set
CASSANDRA_PASSWORD=<my-supersecret-pw> // leave blank if not set
```
