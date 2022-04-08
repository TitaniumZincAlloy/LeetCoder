// Runtime: 44 ms, faster than 72.77% of Swift online submissions for Balanced Binary Tree.

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
        guard let root=root else {
            return 0
        }
        
        let l = maxDepth(root.left)
        let r = maxDepth(root.right)
        
        if l == -1 || r == -1 {
            return -1 // Bubbling up unbalanced flag
        }
        
        if abs(l-r) > 1 { // means not balanced, will bubble up
            return -1
        } 
        
        return 1 + max(l, r)
    }
}