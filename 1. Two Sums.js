//Runtime: 56 ms, faster than 86.16% of JavaScript online submissions for Two Sum.

var twoSum = function(nums, target) {
    var dict = new Object();
    
    var i;
    for(i=0; i<nums.length; i++) {
        var curNum = nums[i];
        var diff = target - curNum;

        if(dict[diff]) {
            var iDiff = dict[diff][0];
            if(i<=iDiff) {
                return [i, iDiff];
            }
            return [iDiff, i];
        }

        if(dict[curNum]) {
            dict[curNum].push(i);
        } else {
            dict[curNum] = [i];
        }
    }

    return [];
};

console.log(twoSum([2, 2, 7, 11, 15], 9));
console.log(twoSum([5, 5], 10));