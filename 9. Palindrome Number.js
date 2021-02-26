// Runtime: 208 ms, faster than 88.12% of JavaScript online submissions for Palindrome Number.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }

    let numStr = x.toString();

    for (let i=0; i<numStr.length/2; i++) {
        if(numStr[i] != numStr[numStr.length-1-i]) {
            return false;
        }
    }

    return true;
};