// Runtime: 76 ms, faster than 81.52% of JavaScript online submissions for Plus One.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let carryOver = 1;
    for(let i=digits.length-1; i>=0; i--){
        digits[i] += carryOver;

        if (digits[i] < 10) {
            return digits;
        } 

        digits[i] = 0;
    }

    // If it exits the loop, add one to the beginning
    digits.splice(0, 0, 1);
    return digits;
};

console.log(plusOne([1,9]));
console.log(plusOne([9,9]));
console.log(plusOne([1,0,0,0,1]));