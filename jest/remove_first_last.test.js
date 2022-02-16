
const removeChar = require("./jest_06");

test ("get a word without the first and last character",
       () => {
    expect(removeChar('eloquent')).toBe('loquen');
    expect(removeChar('country')).toBe('ountr');
    expect(removeChar('person')).toBe('erso');
    expect(removeChar('place')).toBe('lac');
    expect(removeChar('ooopsss')).toBe('oopss');
    expect(removeChar('hello')).toBe('ell');
})
