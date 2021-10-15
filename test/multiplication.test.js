// Add the unit tests of the sum function here
const multiplication = require('../src/multiplication.js');
test('adds 4 x 2 to equal 8', () => {
    expect(multiplication(4, 2)).toBe(8);
});
test('adds 4 x "2" return null', () => {
    expect(multiplication(4, "2")).toBe(null);
});