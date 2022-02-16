const { TestWatcher } = require("jest");
const repeat = require("./jest_07");

test("repeat some string",
    () => {
    expect(repeat(3, "*")).toBe("***");
    expect(repeat(5, "#")).toBe("#####");
    expect(repeat(6, "hi")).toBe("hihihihihihi");
    expect(repeat(3, "wow ")).toBe("wow wow wow ");
    });
