//Runtime: 76 ms, faster than 95.21% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var longestPrefix = '';
    if(strs.length == 0) {
        return longestPrefix;
    }

    for(var i=0; i<strs[0].length; i++) { //Char index loop
        let currentChar = strs[0].charAt(i);
        for(j=1; j<strs.length; j++) { //String loop
            const tempStr = strs[j];

            if(!tempStr || tempStr.charAt(i) != currentChar) {
                return longestPrefix;
            }
        }
        longestPrefix += currentChar;
    }

    return longestPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));