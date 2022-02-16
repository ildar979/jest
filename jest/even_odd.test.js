const evenOrOdd = require("./jest_04");

test("check a number is even or odd",
    () => {
    expect(evenOrOdd(7)).toBe("Odd");
    expect(evenOrOdd(2)).toBe("Even");
    expect(evenOrOdd(0)).toBe("Even");
    expect(evenOrOdd(1)).toBe("Odd");
    expect(evenOrOdd(3)).toBe("Odd");
    expect(evenOrOdd(10)).toBe("Even");
    expect(evenOrOdd(-400)).toBe("Even");
    expect(evenOrOdd(-399)).toBe("Odd");
  });

