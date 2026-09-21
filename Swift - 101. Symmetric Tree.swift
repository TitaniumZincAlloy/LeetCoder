//Runtime: 12 ms, faster than 74.49% of Swift online submissions for Symmetric Tree.

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
        guard let root=root else {
            return true
        }
        
        return self.areTreesSymmetric(root.left, root.right)
    }
    
    func areTreesSymmetric(_ left: TreeNode?, _ right: TreeNode?) -> Bool {
        guard let left=left, let right=right else {
            return left?.val==right?.val
        }
        
        if left.val != right.val {
            return false
        }
        
        let isOutterNodesSemmetrical = areTreesSymmetric(left.left, right.right)
        let isInnerNodesSemmetrical = areTreesSymmetric(left.right, right.left)
        return isOutterNodesSemmetrical && isInnerNodesSemmetrical
    }
}