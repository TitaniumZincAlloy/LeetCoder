// Runtime: 4 ms, faster than 94.59% of Swift online submissions for Binary Tree Paths.

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
    func binaryTreePaths(_ root: TreeNode?) -> [String] {
        guard let root=root else {
            return [String]()
        }
        
        let rightPaths = binaryTreePaths(root.right)
        let leftPaths = binaryTreePaths(root.left)
        
        var combinedArr = rightPaths + leftPaths
        if combinedArr.count == 0 {
            return ["\(root.val)"]
        }
        
        for i in 0..<combinedArr.count {
            combinedArr[i] = "\(root.val)->\(combinedArr[i])"
        }
        
        return combinedArr
    }
}