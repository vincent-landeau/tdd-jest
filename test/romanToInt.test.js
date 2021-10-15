// Add the unit tests of the sum function here
const romanToInt = require('../src/romanToInt.js');
test('convert IX return 9', () => {
    expect(romanToInt('IX')).toBe(9);
});
test('convert 9 return NaN', () => {
    expect(romanToInt('9')).toBe('9');
});