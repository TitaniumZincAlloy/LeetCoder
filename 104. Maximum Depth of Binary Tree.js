// Runtime: 84 ms, faster than 83.06% of JavaScript online submissions for Maximum Depth of Binary Tree.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return diveDepth(root, 1);
};

var diveDepth = function(node, currentLevel) {
    if(!node) { return currentLevel-1; }
    
    const leftDive = diveDepth(node.left, currentLevel+1);
    const rightDive = diveDepth(node.right, currentLevel+1);

    return Math.max(leftDive, rightDive);
}