# @zakuro9715/eslint-config-vue-typescript

[![npm version](https://badge.fury.io/js/%40zakuro9715%2Feslint-config-vue-typescript.svg)](https://badge.fury.io/js/%40zakuro9715%2Feslint-config-vue-typescript)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

zakuro's eslint config for vue with typescript.

## Install

Install config with required plugins.

```sh
npm install --save-dev \
npm install @zakuro9715/eslint-config-vue-typescript
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-plugin-vue eslint-plugin-promise eslint-plugin-import
```

## Configure

Add it to your .eslintrc

```.eslintrc
{
  "extends": ["@zakuro9715/vue-typescript"]
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
    "src/**/*.vue",
    ".eslintrc.js",
    // And lint target files like .eslintrc.js babel.config.js, postcss.js
  }
}
```
