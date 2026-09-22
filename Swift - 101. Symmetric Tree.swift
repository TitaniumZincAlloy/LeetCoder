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
    func isSymmetric(_ root: TreeNode?) -> Bool {
        guard let root = root else {
            return true
        }
        
        return isSymmetricallyEqual(root.left, root.right)
    }
    
    func isSymmetricallyEqual(_ q: TreeNode?, _ p: TreeNode?) -> Bool {
        guard let q=q, let p=p else {
            return q?.val == p?.val
        }
        
        if (q.val != p.val) { return false }
        return isSymmetricallyEqual(q.left, p.right) && isSymmetricallyEqual(q.right, p.left)
    }
}

class SolutionTests: XCTestCase {
    func testCase1() { // Empty
        XCTAssertTrue(Solution().isSymmetric(nil))
    }
    
    func testCase2() {
        XCTAssertTrue(Solution().isSymmetric(TreeNode(1)))
    }
    
    func testCase3() {
        XCTAssertTrue(Solution().isSymmetric(
            TreeNode(1, TreeNode(2), TreeNode(2))))
    }
    
    func testCase4() {
        XCTAssertTrue(Solution().isSymmetric(
            TreeNode(1,
                     TreeNode(2, TreeNode(3), TreeNode(4)),
                     TreeNode(2, TreeNode(4), TreeNode(3))
                    )
        ))
    }
    
    func testCase5() {
        XCTAssertFalse(Solution().isSymmetric(
            TreeNode(1,
                     TreeNode(2, TreeNode(3), TreeNode(4)),
                     TreeNode(2, TreeNode(3), TreeNode(4))
                    )
        ))
    }
    
    func testCase6() { // Imbalanced
        XCTAssertFalse(Solution().isSymmetric(
            TreeNode(1,
                     TreeNode(2, TreeNode(3), TreeNode(4)),
                     TreeNode(2)
                    )
        ))
    }
}

SolutionTests.defaultTestSuite.run()
