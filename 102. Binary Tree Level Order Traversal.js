// Runtime: 76 ms, faster than 95.67% of JavaScript online submissions for Binary Tree Level Order Traversal.
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
var levelOrder = function (root) {
	if (!root) { return []; }

	let resultArr = []
	traverseLevel([root], resultArr);
	return resultArr;
};

var traverseLevel = function (nodesAtLevel, resultArr) {
	if(nodesAtLevel.length == 0) {
		return;
	}
	resultArr.push(getValuesOfNodes(nodesAtLevel));

	const childrenArr = getAllChildrenAtLevel(nodesAtLevel);
	traverseLevel(childrenArr, resultArr);	
}

var getAllChildrenAtLevel = function (nodesAtLevel) {
	let childrenArr = [];
	for (let i = 0; i < nodesAtLevel.length; i++) {
		const node = nodesAtLevel[i];

		if (node.left) {
			childrenArr.push(node.left);
		}
		if (node.right) {
			childrenArr.push(node.right);
		}
	}

	return childrenArr;
}

var getValuesOfNodes = function(nodes) {
	let vals = [];
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];
		vals.push(node.val);
	}

	return vals;
}