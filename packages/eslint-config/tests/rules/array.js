module.exports = {
  valid: [
    '[]',
  ],
  invalid: [
    {
      code: '[0 ]',
      errors: [
        "There should be no space before ']'.",
      ],
    },
  ],
}
