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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (root == null) { return []}
    if (root.left == null && root.right == null) return [`${root.val}`]

    let leftPaths = binaryTreePaths(root.left)
    let rightPaths = binaryTreePaths(root.right)
    return [...leftPaths, ...rightPaths].map(path => root.val + "->" + path)
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe("binaryTreePaths", () => {
    const cases = [
        [
            "1,2,3,null,5",
            new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3)),
            ["1->2->5","1->3"]
        ]
    ]

    for (const [title, root, expected] of cases) {
        it(`${title} => ${expected}`, () => {
            assert.deepEqual(binaryTreePaths(root), expected)
        })
    }
})