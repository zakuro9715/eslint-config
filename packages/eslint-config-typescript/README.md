<h1>
  @pianoforte/eslint-config
  <a href="https://badge.fury.io/js/%40pianoforte%2Feslint-config-typescript"><img src="https://badge.fury.io/js/%40pianoforte%2Feslint-config-typescript.svg" alt="npm version" height="18"></a>
  <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License: GPL v3"></a>
</h1>

Pianofore style eslint config for typescript.

## Install

Install config with required plugins

```sh
npm install --save-dev \
npm install @pianoforte/eslint-config-typescript
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-plugin-promise eslint-plugin-import
```

## Configure

Add it to your .eslintrc

```.eslintrc
{
  "extends": ["@pianoforte/typescript"]
}
```

Then create tsconfig.eslint.json

```tsconfig.eslint.json
{
  "extends": "tsconfig.json"
  "include": {
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    ".eslintrc.js",
    // And lint target files like .eslintrc.js babel.config.js, postcss.js
  }
}
```
