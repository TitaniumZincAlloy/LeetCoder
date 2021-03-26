// Runtime: 80 ms, faster than 89.33% of JavaScript online submissions for Maximum Subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largetSumObj;

    for(let i=0; i<nums.length; i++) {
        const largestSumAtIndex = findLargestSubarrayStartingAtIndex(nums, i);

        if(largetSumObj == undefined) {
            largetSumObj = largestSumAtIndex;
        } else if(largestSumAtIndex.largetsNumber > largetSumObj.largetsNumber) {
            largetSumObj = largestSumAtIndex;
        }

        if(largestSumAtIndex.lastIndexChecked) {
            i = largestSumAtIndex.lastIndexChecked
        }
    }

    return largetSumObj.largetsNumber;
    // return nums.slice(largetSumObj.startIndex, largetSumObj.endIndex+1);
}

function findLargestSubarrayStartingAtIndex(nums, index) {
    let largestNumber = nums[index];
    let endIndex = index;

    let sum = 0;
    for(let i=index; i<nums.length; i++) {
        sum += nums[i];

        if(sum > largestNumber) {
            largestNumber = sum;
            endIndex = i;
        }

        if(sum < 0) { 
            return {
                largetsNumber: largestNumber,
                startIndex: index,
                endIndex: endIndex,
                lastIndexChecked: i
            };
        } // Optimization to return as soon as it becomes negative as it would be better to start after this point
    }

    return {
        largetsNumber: largestNumber,
        startIndex: index,
        endIndex: endIndex
    }
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));