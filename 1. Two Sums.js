const { describe, it } = require("node:test");
const assert = require("node:assert/strict");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var previousNums = new Map()

    for (var i=0; i<nums.length; i++) {
        let num = nums[i]
        let diff = target - num

        if (previousNums.has(diff)) {
            console.log('Found Match ' + num + " + " + diff)
            return [previousNums.get(diff), i]
        }

        previousNums.set(num, i)
    }
    return []
};

describe("twoSum", () => {
  it("finds the pair", () => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
  it("handles duplicates", () => {
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  });
});

console.log(twoSum([2, 2, 7, 11, 15], 9));
console.log(twoSum([5, 5], 10));