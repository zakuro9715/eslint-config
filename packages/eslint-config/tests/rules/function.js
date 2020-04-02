module.exports = {
  valid: [
    '(v) => v',
    'function f() {}',
    'const f = function() {}',
  ],
  invalid: [
    {
      code: 'v => { return v }',
      errors: [
        'Expected parentheses around arrow function argument.',
        'Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.',
      ],
    }, {
      code: 'const f = function f() {}',
      errors: [
        "Unexpected named function 'f'.",
      ],
    },
  ],
}
