function romanToInt (string) {
    let result = 0;
    if (string == null || !isNaN(Number(string))) {
        return string;
    }
    let myMap = new Map();
    myMap.set('I', 1);
    myMap.set('V', 5);
    myMap.set('X', 10);
    myMap.set('L', 50);
    myMap.set('C', 100);
    myMap.set('D', 500);
    myMap.set('M', 1000);

    let length = string.length;
    for (let i = 0; i < length; i++) {
        if (myMap.get(string.charAt(i)) < myMap.get(string.charAt(i + 1))) {
            result -= myMap.get(string.charAt(i))
        } else {
            result += myMap.get(string.charAt(i))
        }
    }
    return result;
}
module.exports = romanToInt;