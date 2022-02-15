
const reversString = require("./jest_01");

test(
  "Проверяем реверс строки",
  () => {
    expect(reversString("Hello world!")).toBe("!dlrow olleH");
  }
);


describe(
     "Моя проверка",
     () => {
     const testCases = [
       {
         inString: "hello",
         outString: "olleh"
       },
       {
        inString: "elbrus",
        outString: "surble"
      },
      {
        inString: "Visual Studio Code",
        outString: "edoC oidutS lausiV"
      },
     ];
     testCases.forEach(test => {
       it (
         `Входящая строка: ${test.inString} ожидаемая строка: ${test.outString}`,
          () => {
            const res = reversString(test.inString);
            expect(res).toBe(test.outString);
          }
         );
     })
    }
     );
