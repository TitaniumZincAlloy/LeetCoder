const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function maxDepth(root) {
        if (root == null) return 0

        let l = maxDepth(root.left)
        let r = maxDepth(root.right)

        if (l == -1 || r == -1) {
            return -1
        }
            
        if (Math.abs(l-r) > 1) {
            return -1
        }
        
        return 1 + Math.max(l, r)
    }

    return maxDepth(root) != -1
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe("isBalanced", () => {
    const testCases = [
        ["1", new TreeNode(1), true],
        ["1,2", new TreeNode(1, new TreeNode(2)), true],
        ["1,2,3", new TreeNode(1, new TreeNode(2), new TreeNode(3)), true],
        ["1,2,null,3,4", new TreeNode(1, 
            new TreeNode(2, 
                new TreeNode(3), 
                new TreeNode(4)), 
            null), false
        ]
    ]

    for (const [title, root, expectedResult] of testCases) {
        it(`${title} => ${expectedResult}`, () => {
            assert.equal(isBalanced(root), expectedResult)
        })
    }
})