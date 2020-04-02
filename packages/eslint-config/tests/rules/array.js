module.exports = {
  valid: [
    '[]',
    `[
       0,
     ]`,
    ,
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
