# @pianoforte/eslint-config

Pianofore style eslint config for typescript.

## Install

```sh
npm install @pianoforte/eslint-config-typescript
```

Then install required eslint plugins

```sh
npm install --save-dev \
  @typescript-eslint/eslint-plugin @typescript-eslint/parser \
  eslint-plugin-promise eslint-plugin-import
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

Create tsconfig.eslint.json

```
{
  "extends": "tsconfig.json"
}
```

See also [@typescript/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration)
