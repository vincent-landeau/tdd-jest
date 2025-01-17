// Add the unit tests of the sum function here
const sum = require('../src/sum.js');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 1 + "2" return null', () => {
    expect(sum(1, "2")).toBe(null);
});
test('adds 1 + "IX" return 10', () => {
    expect(sum(1, "IX")).toBe(10);
});
test('adds 1 + "MCMXCIX" return 10', () => {
    expect(sum(1, "MCMXCIX")).toBe(2000);
});