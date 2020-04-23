/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@pianoforte',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
  },

  overrides:[
    {
      files: ['*ts', '*tsx'],
      rules: [
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpression: true }],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dup-class-members': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      ],
    }
  ]
}
