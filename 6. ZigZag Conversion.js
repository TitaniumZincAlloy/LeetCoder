/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var resultStr = ''
    var cycleLen = numRows*2-2
    if(cycleLen == 0) { cycleLen = 1 }
    // console.log('DEBUG: Cycle Length: ', cycleLen)

    for(i=0; i<numRows; i++) {
        // console.log('DEBUG: Row Num: ', i)
        for(var j=i; j<s.length; j+=cycleLen) {
            // console.log("DEBUG: J: ", j)
            resultStr += s[j]
            if(i != 0 && i != numRows-1) { //If not tips of the N
                var newIndex = j + cycleLen - (i*2)
                
                if(newIndex < s.length) {
                    // console.log('Index: ', newIndex)
                    // console.log('char: ', s[newIndex])
                    resultStr += s[newIndex]
                }
            }
        }
    }

    return resultStr
}

console.log(convert("P", 1))
console.log(convert("PAYPALISHIRING", 3))
console.log(convert("PAYPALISHIRING", 4))
console.log(convert("0123456789ABCDEFGHIJK", 5))
