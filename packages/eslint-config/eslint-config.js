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
  },
  rules: {
    /* eslint-disable quote-props */
    'import/no-unresolved': 0,
    'no-debugger': 1,
    'no-console': 1,
    'no-extra-boolean-cast': 0,
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'space-before-function-paren': 0,
    /* eslint-enable */
  },
}
