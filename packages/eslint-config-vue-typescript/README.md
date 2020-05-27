# @pianoforte/eslint-config

Pianofore style eslint config for vue with typescript.

## Install

Install config with required plugins.

```sh
npm install --save-dev \
npm install @pianoforte/eslint-config-vue-typescript
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-plugin-vue eslint-plugin-promise eslint-plugin-import
```

## Configure

Add it to your .eslintrc

```.eslintrc
{
  "extends": ["@pianoforte/vue-typescript"]
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
