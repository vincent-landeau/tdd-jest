// Add the unit tests of the sum function here
const fizzBuzzToInt = require('../src/fizzBuzzToInt.js');
test('convert 3 return "Fizz"', () => {
    expect(fizzBuzzToInt(3)).toBe('Fizz');
});
test('convert 5 return "Buzz"', () => {
    expect(fizzBuzzToInt(5)).toBe('Buzz');
});
test('convert 15 return "Buzz"', () => {
    expect(fizzBuzzToInt(15)).toBe('FizzBuzz');
});
test('convert 35 return "FizzBuzz"', () => {
    expect(fizzBuzzToInt(35)).toBe('FizzBuzz');
});
test('convert "9" return NaN', () => {
    expect(fizzBuzzToInt('9')).toBe('9');
});