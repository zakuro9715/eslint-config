/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    /* eslint-disable quote-props */
    'import/no-unresolved': 'off',

    // array
    'array-callback-return': ['error'],
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',

    'no-debugger': 'warn',
    'no-console': 'warn',
    'no-extra-boolean-cast': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'space-before-function-paren': 'off',
    /* eslint-enable */
  },
}
