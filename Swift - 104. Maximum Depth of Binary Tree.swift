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
    func maxDepth(_ root: TreeNode?) -> Int {
        guard let root else {
            return 0
        }
        
        let depth = 1
        return max(maxDepth(root.right), maxDepth(root.left)) + depth
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        XCTAssertEqual(Solution().maxDepth(nil), 0)
    }
    
    func testCase2() {
        XCTAssertEqual(Solution().maxDepth(TreeNode(1)), 1)
    }
    
    func testCase3() {
        XCTAssertEqual(Solution().maxDepth(TreeNode(1, TreeNode(2), TreeNode(3))), 2)
    }
    
    func testCase4() {
        XCTAssertEqual(Solution().maxDepth(TreeNode(1, nil,
                                                    TreeNode(2, nil,
                                                             TreeNode(3, nil,
                                                                      TreeNode(4))))), 4)
    }
    
    func testCase5() {
        XCTAssertEqual(Solution().maxDepth(TreeNode(1, nil,
                                                    TreeNode(2,
                                                             TreeNode(3, TreeNode(4), TreeNode(5)),
                                                             TreeNode(6, TreeNode(7), TreeNode(8))))), 4)
    }
}

SolutionTests.defaultTestSuite.run()
