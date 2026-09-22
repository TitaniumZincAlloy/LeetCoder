import UIKit
import XCTest

class Solution {
    func isValid(_ s: String) -> Bool {
        var stack: [Character] = []
        var key: [Character:Character] = [
            ")":"(",
            "]":"[",
            "}":"{"
        ]
        
        for (i, char) in s.enumerated() {
            if let opener = key[char] {
                guard stack.popLast() == opener else { return false }
            } else {
                stack.append(char)
            }
        }

        return stack.isEmpty
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        XCTAssertTrue(Solution().isValid("()"))
    }
    
    func testCase2() {
        XCTAssertFalse(Solution().isValid("(]"))
    }
    
    func testCase3() {
        XCTAssertTrue(Solution().isValid("([])"))
    }
    
    func testCase4() {
        XCTAssertFalse(Solution().isValid("([)]"))
    }
    
    func testCase5() {
        XCTAssertTrue(Solution().isValid("()[]{}"))
    }
    
    func testCase6() {
        XCTAssertFalse(Solution().isValid("("))
    }
    
    func testCase7() {
        XCTAssertFalse(Solution().isValid("))"))
    }
    
    func testCase8() {
        XCTAssertFalse(Solution().isValid("]"))
    }
}

SolutionTests.defaultTestSuite.run()
