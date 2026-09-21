import UIKit
import XCTest

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        // Declare dictionary
        var numDict: [Int: Int] = [:]
        
        // Loop through nums
        for (i, num) in nums.enumerated() {
            if let targetIndex = numDict[target-num] {
                // Found target
                return [targetIndex, i]
            }
            
            // No need to worry about duplicate numbers into dictionary
            if numDict[num] == nil {
                numDict[num] = i
            }
        }
        
        return [] // Base case return nothing if solution not found
    }
}

print(Solution().twoSum([1,2,3,4,5], 9))

class SolutionTests: XCTestCase {
    func testTwoSum() {
        let result1 = Solution().twoSum([1,2,3,4,5], 9)
        XCTAssertEqual(result1, [3, 4])
        
        let result2 = Solution().twoSum([2,7,11,15], 9)
        XCTAssertEqual(result2, [0, 1])
        
        let result3 = Solution().twoSum([3, 2, 4], 9)
        XCTAssertEqual(result3, [])
        
        let result4 = Solution().twoSum([3, 3], 6)
        XCTAssertEqual(result4, [0, 1])
    }
}

SolutionTests.defaultTestSuite.run()
