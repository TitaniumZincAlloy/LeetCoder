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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null) return null

    let l = root.left
    let r = root.right

    root.left = invertTree(r)
    root.right = invertTree(l)

    return root
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe("invertTree", () => {
    it("should invert the tree", () => {
        let tree = new TreeNode(
            1, 
            new TreeNode(
                2, 
                new TreeNode(4), 
                new TreeNode(5)), 
            new TreeNode(
                3, 
                new TreeNode(6), 
                new TreeNode(7))
        )

        let result = invertTree(tree)

        assert.equal(result.val, 1)
        assert.equal(result.left.val, 3)
        assert.equal(result.left.left.val, 7)
        assert.equal(result.left.right.val,6)
        assert.equal(result.right.val, 2)
        assert.equal(result.right.left.val, 5)
        assert.equal(result.right.right.val, 4)
    })
})