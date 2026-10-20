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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) { return 0 }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe("maxDepth", () => {
    let testCases = [
        [" ", null, 0],
        ["1", new TreeNode(1), 1],
        ["1,2", new TreeNode(1, new TreeNode(2)), 2],
        ["1,2,3", new TreeNode(1, new TreeNode(2), new TreeNode(3)), 2],
        ["1,2,3,null,null,4,5", new TreeNode(1, 
            new TreeNode(2), 
            new TreeNode(3, 
                new TreeNode(4), 
                new TreeNode(5))
            ), 
        3]
    ]

    for (const [title, root, expectedResult] of testCases) {
        it(`${title} => ${expectedResult}`, () => {
            assert.equal(maxDepth(root), expectedResult)
        })
    }
})