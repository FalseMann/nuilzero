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
$ npm run dbs
```

Start Next.js in development mode:

```console
$ npm run dev
```

This will start the app up at: http://localhost:3000/

If you're using **Visual Studio Code**, make sure to open the
`nuilzero.code-workspace` file to automate parts of your local development
environment.

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
