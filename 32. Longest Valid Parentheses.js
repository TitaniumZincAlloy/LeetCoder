/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var longestLength = 0;

    for (var i=0; i<s.length; i++) {
        if (s[i] == '(') {
            var longestValidLengthFromIndex = getValidParenthesisStatementLength(s, i)
            if (longestValidLengthFromIndex > longestLength) {
                longestLength = longestValidLengthFromIndex
            }
            i = i+longestValidLengthFromIndex
        }
    }

    return longestLength
};

var getValidParenthesisStatementLength = function(s, startIndex) {
    openingParenCount = 1
    longestValidLength = 0

    for(var i=startIndex+1; i<s.length; i++) {
        if (s[i] == '(') {
            ++openingParenCount
        } else if (s[i] == ')') {
            --openingParenCount
            if(openingParenCount == 0) {
                longestValidLength = (i+1)-startIndex
            } else if (openingParenCount < 0) {
                return longestValidLength
            }
        }
    }

    return longestValidLength
}

console.log(longestValidParentheses("()"))
console.log(longestValidParentheses(")()())"))
console.log(longestValidParentheses("(())))(())))(())))"))
console.log(longestValidParentheses("((())(())(()))"))