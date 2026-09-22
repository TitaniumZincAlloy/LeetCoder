import UIKit
import XCTest

class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        if x < 0 { return false }
        return reverse(x) == x
    }
    
    func reverse(_ x: Int) -> Int {
        var r = 0 // Reversed Integer
        var x = x
        
        while x != 0 {
            r = r * 10
            r = r + (x % 10)
            x /= 10
        }
        
        return (r < Int32.min || r > Int32.max) ? 0 : r
    }
}

class SolutionTests: XCTestCase {
    func test() {
        XCTAssertTrue(Solution().isPalindrome(121))
        XCTAssertTrue(Solution().isPalindrome(1221))
        XCTAssertFalse(Solution().isPalindrome(-121))
        XCTAssertFalse(Solution().isPalindrome(10))
    }
}

SolutionTests.defaultTestSuite.run()
