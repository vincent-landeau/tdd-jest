// Add the unit tests of the sum function here
const intToRoman = require('../src/intToRoman.js');
test('convert 9 return "IX"', () => {
    expect(intToRoman(9)).toBe('IX');
});
test('convert 502 return "DII"', () => {
    expect(intToRoman(502)).toBe('DII');
});
test('convert 2021 return "MMXXI"', () => {
    expect(intToRoman(2021)).toBe('MMXXI');
});
test('convert 1999 return "MCMXCIX"', () => {
    expect(intToRoman(1999)).toBe('MCMXCIX');
});