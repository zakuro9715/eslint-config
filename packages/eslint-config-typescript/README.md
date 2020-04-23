# @pianoforte/eslint-config

Pianofore style eslint config for typescript.

## Install

```sh
npm install @pianoforte/eslint-config-typescript
```

Then install required eslint plugins

```sh
npm install --save-dev \
  @typescript-eslint/eslint-plugin @typescript-eslint/eslint-parser \
  eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

## Configure

Add it to your .eslintrc

```json
{
  "extends": ["@pianoforte/typescript"],
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

See also [@typescript/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)
