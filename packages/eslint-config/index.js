/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'import',
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  globals: {
    window: true,
    document: true,
  },
  rules: {
    'import/no-unresolved': 0,
    'no-debugger': 1,
    'no-console': 1,
    'no-extra-boolean-cast': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'space-before-function-paren': 0,
  },
}
