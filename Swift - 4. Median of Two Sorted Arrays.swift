import UIKit
import XCTest

class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        // Base cases
        if nums1.count + nums2.count == 0 {
            return 0.0
        }
        
        if nums1.count + nums2.count == 1 {
            return Double(nums1.count == 1 ? nums1[0] : nums2[0])
        }
        
        let isEven = (nums1.count + nums2.count)%2 == 0
        // The +1 to always have it round up
        let medIndex = (nums1.count + nums2.count + 1)/2 - 1 + (isEven ? 1 : 0)
        
        var i = 0
        var j = 0
        var a = -1
        var b = -1
        
        for index in 0...medIndex {
            b = a
            
            if j >= nums2.count {
                a = nums1[i]
                i+=1
            } else if (i >= nums1.count) {
                a = nums2[j]
                j+=1
            }else if nums1[i] <= nums2[j] {
                a = nums1[i]
                i+=1
            } else {
                a = nums2[j]
                j+=1
            }
        }
        
        if isEven {
            return Double(a+b)/2
        } else {
            return Double(a)
        }
    }
}

/*
 i indexes nums1
 j indexes nums2
 
 medianIndex = (nums1.count + nums2.count)/2
 a, b
 Loop to medianIndex
    b=a
    if nums[i] <= nums[j], i++, a=nums1[i]
    else j++, a=nums2[j]
 
 get highestNumber
 if even, get next highestNumber
    return average of the w
 else
    return highestNumber
 */

class SolutionTests: XCTestCase {
    func testCase1() {
        let result = Solution().findMedianSortedArrays([1], [1])
        XCTAssertEqual(result, 1)
    }
    
    func testCase2() {
        let result = Solution().findMedianSortedArrays([1,2,3], [4,5,6])
        XCTAssertEqual(result, 3.5)
    }
    
    func testCase3() {
        let result = Solution().findMedianSortedArrays([1,2,3], [5,6])
        XCTAssertEqual(result, 3)
    }
    
    func testCase4() {
        let result = Solution().findMedianSortedArrays([2], [])
        XCTAssertEqual(result, 2)
    }
}

SolutionTests.defaultTestSuite.run()
