<div>
    <p align="center">
        <img src="https://github.com/joggrdocs/eslint-config-joggr/blob/main/.github/assets/logo.png" align="center" width="500" />
    </p>
    <hr>
</div>

> ESLint configuration for Joggr projects.

<p align="center">
  <a href="https://badge.fury.io/js/@joggr%2Ftempo">
    <img src="https://badge.fury.io/js/@joggr%2Ftempo.svg" alt="npm version">
  </a>
  <a href="https://github.com/joggrdocs/eslint-config-joggr/actions/workflows/github-code-scanning/codeql">
    <img alt="CodeQL" src="https://github.com/joggrdocs/eslint-config-joggr/actions/workflows/github-code-scanning/codeql/badge.svg">
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-joggr">
    <img alt="Publish to npm" src="https://github.com/joggrdocs/eslint-config-joggr/actions/workflows/npm-publish.yaml/badge.svg">
  </a>
  <a href="https://github.com/joggrdocs/eslint-config-joggr/actions/workflows/ci.yaml">
    <img alt="CI" src="https://github.com/joggrdocs/eslint-config-joggr/actions/workflows/ci.yaml/badge.svg">
  </a>
  <br/>
  <a href="https://github.com/standard/semistandard">
    <img alt="JS Semi-standard Style" src="https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img alt="Prettier Style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>


## Installation

### Yarn

```bash
$ cd <root>
$ yarn add -D @joggr/eslint-config
```

### npm

```bash
$ cd <root>
$ npm install --save-dev @joggr/eslint-config
```

## Usage

`.eslintrc.cjs`
```js
module.exports = {
  root: true,
  extends: ["@joggr/eslint-config"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
```

### Adding Import Order Groups

You can add import order groups by extending the `joggr` config and overriding the `import/order` rule.

[View File](.eslintrc.js)

```js
module.exports = {
  root: true,
  extends: ['@joggr/eslint-config'],
  overrides: [
    {
      files: ['*'],
      rules: {
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: '@lint/*',
                group: 'internal',
                position: 'before',
              },
            ],
          },
        ],
      },
    },
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
```


## Available Configs

| Config | Description | Extends
|-----|------|------|
| core | The core config that can be used across any vanilla TypeScript project | `@joggr/eslint-config` or `@joggr/eslint-config/core`
| react | The react config that can be used across any TypeScript+React project | `@joggr/eslint-config/react`
| node | The core config that can be used across any TypeScript+Node.js project | `@joggr/eslint-config/node`

## License

Licensed under MIT.

<br>
<hr>
<h2 align="center">
    Want to sign up for Joggr?
</h2>
<p align="center">
    We'd love to have you join, but we are in closed beta. <br> You can join our waitlist below.
</p>
<p align="center">
    <a href="https://www.joggr.io/closed-beta-waitlist?utm_source=github&utm_medium=org-readme&utm_campaign=static-docs" alt="Join the Waitlist">
        <img src="https://storage.googleapis.com/joggr-public-assets/github/badges/join-waitlist-badge.svg" width="250px" />
    </a>
</p>
