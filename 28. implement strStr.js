// Runtime: 76 ms, faster than 87.28% of JavaScript online submissions for Implement strStr().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == "" || haystack == needle) {
        return 0;
    }

    for(let i=0; i<haystack.length; i++) {
        if (haystack[i] == needle.charAt(0)) {
            if(needle.length == 1) { return i; } //Nothing else to check
            if(i+needle.length > haystack.length) { return -1; } //If need length exceeds what's left in the haystack
            for (let j=1; j<needle.length; j++) {
                if (haystack.charAt(i+j) != needle.charAt(j)) {
                    break;
                }
                if(j == needle.length-1) {
                    return i;
                }
            }
        }
    }

    return -1;
};

console.log(strStr("abc", "c"));