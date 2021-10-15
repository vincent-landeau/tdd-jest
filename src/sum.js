// Implement the sum function here
function sum(x, y) {
    if (Number.isInteger(x + y)) {
        return x + y;
    } else {
        return null;
    }
}
module.exports = sum;