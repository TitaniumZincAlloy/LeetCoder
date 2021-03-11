// Runtime: 96 ms, faster than 69.58% of JavaScript online submissions for Remove Duplicates from Sorted Array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var existingNums = {};
  
  var nonDuplicateIndex = 0;
  for (let i=0; i<nums.length; i++) {
    const num = nums[i];

    if (!existingNums[num]) {
      nums[nonDuplicateIndex++] = num
      existingNums[num] = true;
    }
  }

  if(nonDuplicateIndex <= nums.length) {
    nums.splice(nonDuplicateIndex);
  }

  return nums.length;
};

removeDuplicates([0, 0, 1, 2, 3, 5, 6, 6])