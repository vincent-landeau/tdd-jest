function romanToInt (integer) {
    if (integer == null || !Number.isInteger(integer) || integer === 0) {
        return null;
    }
    let symbols = new Map();
    symbols.set(1000, 'M');
    symbols.set(500, 'D');
    symbols.set(100, 'C');
    symbols.set(50, 'L');
    symbols.set(10, 'X');
    symbols.set(5, 'V');
    symbols.set(1, 'I');

    let result = "";
    do {
        for (let [key, value] of symbols) {
            if(integer >= key)  {
                result += value;
                integer -= key;
                break;
            }
            let subSymbol = Math.ceil(key/(key.toString()[0] == '1' ? 10 : 5));
            if(integer >= key-subSymbol) {
                result += symbols.get(subSymbol)+value;
                integer -= key-subSymbol;
                break;
            }
        }
    }while(integer > 0);
    return result;
}
module.exports = romanToInt;