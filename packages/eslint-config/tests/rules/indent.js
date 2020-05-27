module.exports = {
  valid: [
    ` function f() {
        switch (0) {
        case 0: break
        case 1: break
        }

        const a = 0,
              b = 0
        const foo = {}
        foo
          .bar

        function func(a,
                      b) {
          foo
        }
        func(0,
             1,
        )

        const array = [1,
                       2,
        ]
        const array2 = [
          0,
          1,
        ]

        const array3 = [
          {
            a: 0,
          },
          { a: 1,
            b: 1,
          },
        ]

        const array4 = [{
          a: 0,
        }, { a: 1,
             b: 1,
        }]

      }
    `,
  ],
  invalid: [{
    code:
      ` function f() {
          switch (0) {
            case 0: break  // 1
            case 1: break  // 2
          }

          const a = 0,
            b = 0  // 3
          const foo = {}
          foo
          .bar  // 4

          function func(a,
            b) {  // 5
              foo // 6
          }

          func(0,
            1,  // 7
          )

          const array = [1,
            2, // 8
          ]
          const array2 = [
            0,
              1, // 9
          ]
          const array3 = [
            {
              a: 0,
            },
            { a: 1,
                b: 1,  // 10
            },
          ]

          const array4 = [{
            a: 0,
          }, { a: 1,
            b: 1, // 11
          }]
        }
      `,
    errors: [
      "Expected indentation of 2 spaces but found 4.", // 1
      "Expected indentation of 2 spaces but found 4.", // 2
      "Expected indentation of 8 spaces but found 4.", // 3
      "Expected indentation of 4 spaces but found 2.", // 4
      "Expected indentation of 16 spaces but found 4.", // 5
      "Expected indentation of 4 spaces but found 6.", // 6
      "Expected indentation of 7 spaces but found 4.", // 7
      "Expected indentation of 17 spaces but found 4.", // 8
      "Expected indentation of 4 spaces but found 6.", // 9
      "Expected indentation of 6 spaces but found 8.", // 10
      "Expected indentation of 7 spaces but found 4.", // 11
    ],
  }],
}
