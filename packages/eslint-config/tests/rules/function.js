module.exports = {
  valid: [
    ` function f() {
        const f1 = async (v) => v
        const f2 = (v) => {
          f1(v)
          return v
        }
        const f3 = function (v) { return f2(v) }
        const f4 = (v) => { f3(v) }
        f4(0)
      }
    `,
  ],
  invalid: [{
    code:
      ` const f = function f () {
          const f1 = async(v) => v
          const f2 = v => {
            return v
          }
          f2 (0)
        }
    `,
    errors: [
      "Unexpected named function 'f'.",
      'Unexpected space before function parentheses.',
      'Missing space before function parentheses.',
      'Expected parentheses around arrow function argument.',
      'Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.',
      'Unexpected newline between function name and paren.',
    ],
  }],
}
