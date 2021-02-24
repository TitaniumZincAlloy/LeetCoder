//Runtime: 96 ms, faster than 77.81% of JavaScript online submissions for Reverse Integer.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x.toString();
    let reverseString = '';
    let sign = 1;

    // Check for negative
    if (num[0] == '-') {
        sign = -1;
        num.replace('-', '');
    }

    for (let i=num.length-1; i>=0 ; i--) {
        reverseString = reverseString + num[i]
    }

    const parsedInt = parseInt(reverseString) * sign;
    if (parsedInt > 2147483647 || parsedInt < -2147483648) {
        return 0;
    } else {
        return parsedInt;
    }
};

console.log(reverse(214748364));
console.log(reverse(2147483647));