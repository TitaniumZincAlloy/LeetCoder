// Runtime: 72 ms, faster than 91.61% of JavaScript online submissions for Length of Last Word.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0;
    for (let i=s.length-1; i>=0; i--) {
        if (s[i] != ' ') {
            len++;
        } else if (len > 0) {
            return len;
        }
    }
    return len;
};