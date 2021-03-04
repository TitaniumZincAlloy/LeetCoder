// Runtime: 156 ms, faster than 91.46% of JavaScript online submissions for Roman to Integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    s = s.replace('IV', 'a');
    s = s.replace('IX', 'b');
    s = s.replace('XL', 'c');
    s = s.replace('XC', 'd');
    s = s.replace('CD', 'e');
    s = s.replace('CM', 'f');

    var total = 0;
    for(let i=0; i<s.length; i++) {
        total += RomanNumeralDigit[s.charAt(i)];
    }

    return total;
};

const RomanNumeralDigit = {
    0: 0,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    a: 4,
    b: 9,
    c: 40,
    d: 90,
    e: 400,
    f: 900
};
