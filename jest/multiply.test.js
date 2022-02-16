const multiply = require("./jest_03");

test("should return multyple of two values", 
    () => {
      expect(multiply(2, 3)).toBe(6)
      expect(multiply(0, 5)).toBe(0)
      expect(multiply(-4, 4)).toBe(-16)
      expect(multiply(-1, -3)).toBe(3)
    });
    
test ("should return values correctly compairing to other values",
    () => {
      expect(multiply(2, 3)).toBeGreaterThan(5);
      expect(multiply(7, 8)).toBeLessThan(57);
      expect(multiply(6, 3)).toBeGreaterThanOrEqual(18);
      expect(multiply(7, 5)).toBeLessThanOrEqual(35);
    });

