module.exports = {
  extends: [
    'eslint:recommended',
    '@zakuro9715',
  ],
  overrides: [
    {
      files: ['*.(ts|tsx)'],
      extends: ['@zakuro9715/eslint-config-typescript/ts']
    },
  ],
}
