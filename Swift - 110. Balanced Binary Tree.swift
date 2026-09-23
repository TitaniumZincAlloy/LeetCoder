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
    func isBalanced(_ root: TreeNode?) -> Bool {
        return maxDepth(root) != -1
    }
    
    func maxDepth(_ root: TreeNode?) -> Int {
        guard let root else {
            return 0
        }
        
        let l = maxDepth(root.left)
        let r = maxDepth(root.right)
        
        if l == -1 || r == -1 {
            return -1
        }
            
        if abs(l-r) > 1 {
            return -1
        }
        
        return 1 + max(l, r)
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        XCTAssertTrue(Solution().isBalanced(TreeNode(1)))
    }
    
    func testCase2() {
        XCTAssertTrue(Solution().isBalanced(TreeNode(1, TreeNode(2), TreeNode(3))))
    }
    
    func testCase3() {
        XCTAssertTrue(Solution().isBalanced(TreeNode(1,
                                                     TreeNode(2),
                                                     TreeNode(3,
                                                              TreeNode(4),
                                                              TreeNode(5)))))
    }
    
    func testCase4() {
        XCTAssertTrue(Solution().isBalanced(TreeNode(1,
                                                     TreeNode(2),
                                                     nil)))
    }
    
    func testCase5() {
        XCTAssertTrue(Solution().isBalanced(TreeNode(1,
                                                      TreeNode(2),
                                                      TreeNode(3,
                                                               TreeNode(4),
                                                               nil))))
    }
    
    func testCase6() {
        XCTAssertFalse(Solution().isBalanced(TreeNode(1,
                                                      TreeNode(2,
                                                               TreeNode(3,
                                                                        TreeNode(4),
                                                                        TreeNode(4)),
                                                               TreeNode(3)),
                                                      TreeNode(2))))
    }
}

SolutionTests.defaultTestSuite.run()
