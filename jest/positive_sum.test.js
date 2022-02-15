

const sum = require("./jest_02");

describe (
  "Перебираем массив",
  () => {
    const testCases = [
      {
        in: [0, 5, -6, 7, -10],
        out: 12
      },
      {
        in: [0, -5, 6, -7, 10],
        out: 16
      },
      {
        in: [-3, -5, -6, -7, -10],
        out: 0
      },
      {
        in: [0, 0, 0, 0, 0],
        out: 0
      },
    ];

    testCases.forEach(test => {
      it(
        `in: ${test.in} out: ${test.out}`,
        () => {
          const res = sum(test.in);
          expect(res).toEqual(test.out);
        }
      );
    });
  }
);
