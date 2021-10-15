function romanToInt (integer) {
    let result = "";
    if (integer == null || !Number.isInteger(integer) || integer === 0) {
        return integer;
    }
    let symbols = new Map();
    symbols.set(1000, 'M');
    symbols.set(500, 'D');
    symbols.set(100, 'C');
    symbols.set(50, 'L');
    symbols.set(10, 'X');
    symbols.set(5, 'V');
    symbols.set(1, 'I');

    do {
        for (let [key, value] of symbols) {
            if(integer >= key)  {
                result += value;
                integer -= key;
                break;
            }
            let subSymbol = Math.ceil(key/10);
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