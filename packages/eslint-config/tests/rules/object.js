module.exports = {
  valid: [
    ' ({})',
    ' ({ a: 0, b: 0 })',
    ' ({ a: { a: 0 }})',
    ` ({ a: 0,
         b: 0,
      })
    `,
    ` ({
        a: 0,
        b: 0,
      })
    `,
    ` ({
        abc: 0,
        a  : 0,
      })
    `,
    ` ({
        abc: 0,
        a  : 0,
      })
    `,
    ` [{
        a: 0,
      }, {
        b: 0,
      }]
    `,
    ` [{ a: 0,
         b: 0,
      }, {
        b: 0,
      }]`,
  ],
  invalid: [{
    code: '({ a: { a: 0 } })',
    errors: [
      'There should be no space before \'}\'.',
    ],
  }],
}
