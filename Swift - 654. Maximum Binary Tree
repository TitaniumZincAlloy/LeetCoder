// Runtime: 104 ms, faster than 77.27% of Swift online submissions for Maximum Binary Tree.

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
    func constructMaximumBinaryTree(_ nums: [Int]) -> TreeNode? {
        return constructTreeNode(nums, 0, nums.count-1)
    }
    
    func constructTreeNode(_ nums: [Int], _ startI: Int, _ endI: Int) -> TreeNode?  {
        if startI > endI {
            return nil
        }
        
        let maxIndex = getMaxIndex(nums, startI, endI)
        let root = TreeNode(nums[maxIndex])
        root.left = constructTreeNode(nums, startI, maxIndex-1)
        root.right = constructTreeNode(nums, maxIndex+1, endI)
        
        return root
    }
    
    func getMaxIndex(_ nums: [Int], _ startI: Int, _ endI: Int) -> Int {
        var maxI = startI
        
        for i in startI...endI {
            if nums[i] > nums[maxI] {
                maxI = i
            }
        }
        
        return maxI
    }
}