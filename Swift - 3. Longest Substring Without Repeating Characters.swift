import UIKit
import XCTest

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var lastSeen: [Character:Int] = [:]
        var startIndex = 0
        var longestLength = 0
        
        for (i, char) in s.enumerated() {
            if let existingCharIndex = lastSeen[char], existingCharIndex >= startIndex {
                startIndex = existingCharIndex + 1
            }
            lastSeen[char] = i
            longestLength = max(longestLength, i-startIndex+1)
        }
        
        return longestLength
    }
}


class SolutionsTests: XCTestCase {
    func testLength1() {
        let result = Solution().lengthOfLongestSubstring("abcabcbb")
        XCTAssertEqual(result, 3)
    }
    
    func testLength2() {
        let result = Solution().lengthOfLongestSubstring("bb")
        XCTAssertEqual(result, 1)
    }
    
    func testLength3() {
        let result = Solution().lengthOfLongestSubstring("b")
        XCTAssertEqual(result, 1)
    }
    
    func testLength4() {
        let result = Solution().lengthOfLongestSubstring("ccbbcc")
        XCTAssertEqual(result, 2)
    }

}

SolutionsTests.defaultTestSuite.run()
