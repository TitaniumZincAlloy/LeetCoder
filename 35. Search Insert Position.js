// Runtime: 72 ms, faster than 94.23% of JavaScript online submissions for Search Insert Position.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums, target);
};

function binarySearch(nums, target) {
    let leftI = 0;
    let rightI = nums.length-1;

    while (rightI >= leftI) {
        const midI = Math.floor((rightI+leftI)/2);
        const numAtMidPoint = nums[midI];

        if(numAtMidPoint == target) {
            return midI;
        }

        if(target > numAtMidPoint) {
            leftI = midI+1;
        } else if (target < numAtMidPoint) {
            rightI = midI-1;
        }
    }

    return leftI;
}

console.log(binarySearch([2, 3, 4, 5, 8], 1));