module.exports = {
  valid: [
    ' []',
    ' [1, 2, 3]',
    ` [ 0,
        1,
        2,
      ]`,
    ` [ 0,
        1,
      ]`,
    ` [ 0, 1,
        2, 3 ]`,
    ' [ 0, 1, 2 ]',
    ' [].map((v) => v)',
  ],
  invalid: [{
    code: '[].map((v) => { })',
    errors: [
      'Expected to return a value in arrow function.',
    ],
  }],
}
