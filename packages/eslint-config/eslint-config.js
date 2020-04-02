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
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
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
