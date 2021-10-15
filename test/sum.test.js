// Add the unit tests of the sum function here
const sum = require('../src/sum.js');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 1 + "2" return null', () => {
    expect(sum(1, "2")).toBe(null);
});