const opposite = require("./jest_05");

test("the opposite number",
    () => {
    expect(opposite(7)).toBe(-7);
    expect(opposite(2)).toBe(-2);
    expect(opposite(0)).toBe(-0);
    expect(opposite(-1)).toBe(1);
    expect(opposite(-3)).toBe(3);
    expect(opposite(10)).toBe(-10);    
  });
