const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (node == null) { return null }
    var copiedNodes = new Map()

    function clone(node) {
        // Null case is not possible
        if(copiedNodes.has(node.val)) {
            return copiedNodes.get(node.val)
        }

        let copy = new Node(node.val)
        copiedNodes.set(node.val, copy)
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(clone(neighbor))
        }

        return copy
    }

    return clone(node)
};

 function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 };

 describe("cloneGraph", () => {
    it("should copy nodes", () => {
        let node1 = new Node(1)
        let node2 = new Node(2)
        let node3 = new Node(3)
        let node4 = new Node(4)

        node1.neighbors = [node2, node4]
        node2.neighbors = [node1, node3]
        node3.neighbors = [node2, node4]
        node4.neighbors = [node1, node3]

        let result = cloneGraph(node1)
        assert.equal(result != node1, true)
        assert.equal(result.val, node1.val)
    })
 })
