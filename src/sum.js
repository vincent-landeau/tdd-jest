// Implement the sum function here
const romanToInt = require('../src/romanToInt.js');
function sum(x, y) {
    x = romanToInt(x);
    y = romanToInt(y);
    if (Number.isInteger(x) && Number.isInteger(y)) {
        return x + y;
    } else {
        return null;
    }
}
module.exports = sum;