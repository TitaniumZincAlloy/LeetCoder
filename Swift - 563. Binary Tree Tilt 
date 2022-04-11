// Runtime: 156 ms, faster than 33.33% of Swift online submissions for Binary Tree Tilt.

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
    func findTilt(_ root: TreeNode?) -> Int {
        guard let root=root else {
            return 0
        }
        return tilt(root) + findTilt(root.right) + findTilt(root.left)
    }
    
    func tilt(_ root: TreeNode) -> Int {
        let lSum = sum(root.left)
        let rSum = sum(root.right)
        
        let tilt = abs(lSum-rSum)
        
        return tilt
    }
    
    func sum(_ root: TreeNode?) -> Int {
        guard let root=root else {
            return 0
        }
        
        let l = sum(root.left)
        let r = sum(root.right)
        
        return root.val + l + r
    }
}
