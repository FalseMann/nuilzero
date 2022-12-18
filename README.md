# nuIlzero

> Source code for the website of everyone's favorite streamer

## Development

This is a [Next.js](https://nextjs.org) project deployed to
[Vercel](https://vercel.com/). Styling is primarily managed using
[TailwindCSS](https://tailwindcss.com/).

### Getting Started

Install all dependencies:

```console
$ npm install
```

Copy the sample env config to a local one:

```console
$ cp .env.sample .env
```

Start the project's databases using Docker:

```console
$ npm run db:up
```

Start Next.js in development mode:

```console
$ npm run dev
```

This will start the app up at: http://localhost:3000/

If you're using **Visual Studio Code**, make sure to open the
`nuilzero.code-workspace` file to automate parts of your local development
environment.

### Database Management

This application integrates with two databases:
[PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.com/). A
separate database instance exists in the three main environments: preview, dev,
and production.

To start up the databases locally using [Docker](https://www.docker.com/):

```console
$ npm run db:up
```

#### PostgreSQL

PostgreSQL is an advanced relational database. This project uses
[Prisma](https://www.prisma.io/) to interface with PostgreSQL.

Once Postgres is running locally, you'll need to run the db migration scripts to
setup the initial table structure:

```console
$ npm run db:migrate
```

Once provisioned, it can be seeded with test data:

```console
$ npm run db:seed
```

In order to make changes to the database schema, you'll need to edit the
`./prisma/schema.prisma` file. Once the changes are complete, a new migration
file will need to be generated:

```console
$ npm run db:create_migration
```

You'll also need to generate the Prisma db client in order to get TypeScript
type checking:

```console
$npm run db:client
```

#### Redis

Redis is a high-performance key-value store that runs exclusively in memory.
This project uses [ioredis](https://github.com/luin/ioredis) to interface with
Redis.

### Contributing

For any change, open up a Pull Request against this repository's `develop`
branch. All changes must produce a successful build.

### Coding Style

Code style consistency is managed by using [ESLint](https://eslint.org/) and
[Prettier](https://prettier.io/). All JavaScript and TypeScript code must follow
the [`semistandard`](https://github.com/standard/semistandard) style. All other
files are formatted using Prettier.

To lint all source files:

```console
$ npm run lint
```

To format all source files, which often fixes most linting errors:

```console
$ npm run format
```

### Deployments

This project is deployed to different environments based on branches:

- `develop`: https://dev.nuilzero.tv/
- `main`: https://nuilzero.tv/

All changes should be made against the `develop` branch. Once changes are ready
to be released, merge those changes into the `main` branch.
