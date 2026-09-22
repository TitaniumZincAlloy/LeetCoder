import UIKit
import XCTest

public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func zigzagLevelOrder(_ root: TreeNode?) -> [[Int]] {
        guard let root = root else {
            return []
        }

        var result: [[Int]] = []
        var reverse = false
        
        var currentLevel = [root]
        
        while !currentLevel.isEmpty {
            if reverse {
                result.append(currentLevel.reversed().map(\.val))
            } else {
                result.append(currentLevel.map(\.val))
            }
            
            
            currentLevel = currentLevel.flatMap({ [$0.left, $0.right].compactMap({$0})})
            reverse = !reverse
        }
        
        return result
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        XCTAssertEqual(Solution().zigzagLevelOrder(TreeNode(1)), [[1]])
    }
    
    func testCase2() {
        XCTAssertEqual(Solution().zigzagLevelOrder(TreeNode(1,
                                                            TreeNode(2),
                                                            TreeNode(3))),
                       [[1], [3,2]])
    }
    
    func testCase3() {
        XCTAssertEqual(Solution().zigzagLevelOrder(TreeNode(1,
                                                            TreeNode(2, TreeNode(4), TreeNode(5)),
                                                            TreeNode(3))),
                       [[1], [3,2], [4,5]])
    }
    
    func testCase4() {
        XCTAssertEqual(Solution().zigzagLevelOrder(nil), [])
    }
}

SolutionTests.defaultTestSuite.run()
