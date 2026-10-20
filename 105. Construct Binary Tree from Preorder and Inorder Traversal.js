const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

/**
 * Loop through preorder. First element is always a root
 * get index of element in inorder array
 * seperate the inorder array into left and right
 * 
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder == null || preorder.length == 0) { return null }

    let rootValue = preorder[0]
    let midIndex = inorder.lastIndexOf(rootValue)

    let newNode = new TreeNode(rootValue)
    newNode.left = buildTree(preorder.slice(1, midIndex+1), inorder.slice(0, midIndex))
    newNode.right = buildTree(preorder.slice(midIndex+1), inorder.slice(midIndex+1))

    return newNode
};

function levelOrder(root) {
    if (root == null) return null
    const result = []
    let level = [root]
    while (level.some(node => node != null)) {
        result.push(...level.map(node => (node == null ? null : node.val)))
        level = level.flatMap(node => (node == null ? [] : [node.left, node.right]))
    }
    while (result.at(-1) == null) result.pop()
    return result
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe("buildTree", () => {
    const testCases = [
        [
            [3,9,20,15,7], [9,3,15,20,7], [3,9,20,null,null,15,7]
        ],
        [[1], [1], [1]],
        [null, null, null]
    ]

    for (const [preorder, inorder, expectedResult] of testCases) {
        it(`preorder: ${preorder}, inorder: ${inorder} => ${JSON.stringify(expectedResult)}`, () => {
            assert.deepEqual(levelOrder(buildTree(preorder, inorder)), expectedResult)
        })
    }
})