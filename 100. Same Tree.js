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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null || q === null) {
        return p === q;
    }

    return (
        p.val === q.val && 
        isSameTree(p.left, q.left) && 
        isSameTree(p.right, q.right)
    )
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

describe("tests", () => {
    describe("given 123 and 123", () => {
        it("should return true", () => {
            let node1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
            let node2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

            assert.equal(isSameTree(node1, node2), true)
        });
    });

    describe("given 123 and 132", () => {
        it("should return false", () => {
            let node1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
            let node2 = new TreeNode(1, new TreeNode(3), new TreeNode(2))

            assert.equal(isSameTree(node1, node2), false)
        });
    });

    describe("given 1 and 123", () => {
        it("should return false", () => {
            let node1 = new TreeNode(1)
            let node2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

            assert.equal(isSameTree(node1, node2), false)
        });
    });

    describe("given 1 and 1", () => {
        it("should return true", () => {
            let node1 = new TreeNode(1)
            let node2 = new TreeNode(1)

            assert.equal(isSameTree(node1, node2), true)
        });
    });

    describe("given 1_3 and 1_3", () => {
        it("should return true", () => {
            let node1 = new TreeNode(1, null, new TreeNode(3))
            let node2 = new TreeNode(1, null, new TreeNode(3))

            assert.equal(isSameTree(node1, node2), true)
        });
    });

    describe("given 123 and 12__3", () => {
        it("should return false", () => {
            let node1 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
            let node2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), null)

            assert.equal(isSameTree(node1, node2), false)
        });
    });
});