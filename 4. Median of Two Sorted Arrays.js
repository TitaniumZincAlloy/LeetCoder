//Runtime: 104 ms, faster than 99.68% of JavaScript online submissions for Median of Two Sorted Arrays.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var length = nums1.length + nums2.length;
    var odd = length%2 != 0;
    var medianIndex;
    if(odd) {
        medianIndex = Math.floor(length/2);
    } else {
        medianIndex = (length/2);
    }

    var lowerEven;
    var i=0, j=0, index = 0;
    for(index=0; index <= medianIndex; index++) {
        var num;
        if(i>=nums1.length) {
            num = nums2[j++];
        } else if(j>=nums2.length) {
            num = nums1[i++];
        } else {
            var num1 = nums1[i];
            var num2 = nums2[j];

            if(num1 <= num2) {
                num = num1;
                ++i;
            } else {
                num = num2;
                ++j;
            }
        }

        if(!odd && index == medianIndex-1) {
            lowerEven = num;
        } else if(!odd && index == medianIndex) {
            return (lowerEven + num)/2.0;
        } else if(odd && index == medianIndex) {
            return num;
        }
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));