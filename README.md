## React Components Modules' template

### Before starting

After installing dependencies, execute a command below for turning up `git` hooks on your machine
```sh
npm run prepare
```

### File system

Module's files should be placed in `/src/module`. All essences, which must be exported from module, should be reexported from `src/module/index.ts`

By default, there are `Counter` and `Footer` components and additional essences for them in module as an example of the file system organization

### Static files

`svg` icons should be in `/src/module/icons` for importing as React components.
Urls for static files such as images, files, etc., which should be downloaded from server, should be passed down into module as parameters.
For serving static files while development, such files should be placed in `dev/assets`, where they'll be acceptable by relative links.
Fonts should be added to the page on the host side, where this module will be integrated. For development mode, fonts may be placed in `dev/assets/fonts` and be declared in `dev/assets/styles/fonts.css`.

### Development

For development mode and emulating a host application, there is a React application in this template, which can be launched with a command below
```sh
npm run dev
```
Exported from module components should be inserted in `src/App.tsx`. Webpack dev-server is reloaded immediately in case the module changes.

### Building

A command for building module is below. A bundle of module is placed in `dist`
```sh
npm run build
```

### Unit testing

There is `jest` for writing unit tests in project. Tests should be placed in `tests`

A command for starting tests
```sh
npm run test
```

### Linting and formatting

There are `eslint` and `prettier` for linting and formatting of a codebase

A command for printing errors and warnings
```sh
npm run lint
```
A command for fixing errors automatically
```sh
npm run lint:fix
```

### Git hooks

Before committing, `git pre-commit hook` launches automatically. This hook includes tests, linting and formatting checks. If there are errors, committing will be cancelled
