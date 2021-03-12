// Runtime: 76 ms, faster than 85.63% of JavaScript online submissions for Remove Element.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var replacementIndex = 0;

    for (var i=0; i<nums.length; i++) {
      var num = nums[i];

      if(num != val) {
        nums[replacementIndex++] = num;
      }
    }

    //Problem does not require splicing but splcing makes the ending array cleaner
    //nums.splice(replacementIndex);
    
    return replacementIndex;
};

removeElement([3, 2, 2, 3], 3);