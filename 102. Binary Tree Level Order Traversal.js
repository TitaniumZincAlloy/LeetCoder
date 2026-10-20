const { describe, it } = require("node:test")
const assert = require("node:assert/strict");

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (root == null) {
		return []
	}
	let result = []
    let nodesOfCurLevel = [root]

	while (nodesOfCurLevel.length > 0) {
		result.push(nodesOfCurLevel.flatMap(node => node.val))
		nodesOfCurLevel = nodesOfCurLevel.flatMap(node => 
			[node.left, node.right].filter(node => node != null)
		)
	}

	return result
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

describe("levelOrder", () => {
	const testCases = [
		[
			"1,2,3,4,5,6,7", 
			new TreeNode(1, 
				new TreeNode(2, 
					new TreeNode(4), 
					new TreeNode(5)), 
				new TreeNode(3, 
					new TreeNode(6), 
					new TreeNode(7)
				)
			),
			[[1],[2,3],[4,5,6,7]]
		],
		[
			"3,9,20,null,null,15,7", 
			new TreeNode(3, 
				new TreeNode(9), 
				new TreeNode(20, 
					new TreeNode(15), 
					new TreeNode(7)
				)
			),
			[[3],[9,20],[15,7]]
		],
		["1", new TreeNode(1), [[1]]],
		[" ", null, []]
	]

	for (const [title, root, expectedResult] of testCases) {
		it(`${title} => ${JSON.stringify(expectedResult)}`, () => {
			assert.deepEqual(levelOrder(root), expectedResult)
		})
	}
})