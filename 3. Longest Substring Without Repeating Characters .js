//Runtime: 100 ms, faster than 72.03% of JavaScript online submissions for Longest Substring Without Repeating Characters.

/**
 * @param {*} arr1 
 * @param {*} arr2 
 * @return first arr when same length
 */
var getLonger = function(arr1, arr2) {
    var length1 = arr1[1]-arr1[0];
    var length2 = arr2[1]-arr2[0];

    if(length1 >= length2) {
        return arr1;
    } else {
        return arr2;
    }
}

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var startIndex = 0;
    var charHash = new Object();

    var longestString = [0, 0];

    var i;
    for(i=0; i<s.length; i++) {
        var char = s.charAt(i);

        var index = charHash[char];
        if(index != undefined) {
            longestString = getLonger(longestString, [startIndex, i]);
            //Remove from charHash
            var j;
            for(j=startIndex; j<=index; j++) {
                var tempChar = s.charAt(j);
                delete charHash[tempChar];
            }
            //reset startIndex
            startIndex = index+1;
        }

        charHash[char] = i;
    }

    //Check last index
    longestString = getLonger(longestString, [startIndex, s.length]);
    return longestString[1]-longestString[0];
};

console.log(lengthOfLongestSubstring("abcabcbb"));