# @pianoforte/eslint-config

Pianofore style eslint config for typescript.

## Install

```
npm install @pianoforte/eslint-config-typescript
```

Then install required eslint plugins

```
npm install --save-dev \
  @typescript-eslint/eslint-plugin @typescript-eslint/eslint-parser \
  eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

## Configure

Add it to your .eslintrc

```.eslintrc
module.exports = {
  extends: ['@pianoforte/typescript']
}
```
