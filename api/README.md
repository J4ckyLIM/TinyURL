## Installation

```bash
$ yarn install
```

## Running the app

Make sure to run the database first and change your .env file according to your settings

```bash
# database
$ yarn run init

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Generate migrations for the database

After creating or updating an entity, a migration is mandatory to update our database to the latest version.

```bash

# to generate a migration

$ migrationName=YourMigrationName yarn migration:generate

# example: migrationName=CreateTableUser yarn migration:generate
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
