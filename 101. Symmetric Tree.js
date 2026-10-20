"use strict";
const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function isSymmetric(root) {
    if (root == null) {
        return true;
    }
    function isSymmetricallyEqual(r, l) {
        if (r === null || l === null) {
            return r?.val == l?.val;
        }
        return (r?.val === l?.val &&
            isSymmetricallyEqual(r.right, l.left) &&
            isSymmetricallyEqual(r.left, l.right));
    }
    return isSymmetricallyEqual(root.right, root.left);
}
;
class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
describe("isSymmetric tests", () => {
    const cases = [
        ["null", null, true],
        ["1", new TreeNode(1), true],
        ["123", new TreeNode(1, new TreeNode(2), new TreeNode(3)), false],
        ["122", new TreeNode(1, new TreeNode(2), new TreeNode(2)), true],
        ["1223434", new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4))), false],
        ["1223443", new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3))), true]
    ];
    for (const [title, p, expected] of cases) {
        it(`${title}-> ${expected}`, () => {
            assert.equal(isSymmetric(p), expected);
        });
    }
});
