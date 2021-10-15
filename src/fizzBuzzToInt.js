function fizzBuzzToInt (integer) {
    let result = "";
    if (integer == null || !Number.isInteger(integer)) {
        return integer;
    }
     if (integer % 3 === 0 || integer.toString().search('3') >= 0) {
        result += 'Fizz';
     }
     if (integer % 5 === 0 || integer.toString().search('5') >= 0) {
         result += 'Buzz';
     }
     if (integer % 3 > 0 && integer % 5 > 0) {
        result = integer;
    }
    return result;
}
module.exports = fizzBuzzToInt;