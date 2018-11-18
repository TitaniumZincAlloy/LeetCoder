//Runtime: 100 ms, faster than 89.68% of JavaScript online submissions for Longest Palindromic Substring.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var longest = "";
    var l=0, r=0;
    
    while (l < s.length) {
        var pali = longestPalindromeFromCenter(s, l, r);
        if(pali.length > longest.length) {
            longest = pali;
        }

        if(l==r) {
            ++r
        } else  {
            ++l;
        }
    }

    return longest;
};

/**
 * 
 * @param {string} s 
 * @param {*} index 
 */
var longestPalindromeFromCenter = function(s, l, r) {
    //primary check
    if(s[l] != s[r]) {
        return "";
    }

    while (l>0 && r<s.length-1 && s[l-1] == s[r+1]) {
        --l; ++r;
    }
    
    return s.substring(l,r+1);
}

console.log(longestPalindrome("abbc"));