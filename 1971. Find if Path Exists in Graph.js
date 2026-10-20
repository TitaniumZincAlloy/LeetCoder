const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let edgeMap = buildMap(edges)
    let visitedEdges = new Set()

    function dfs(node) {
        if (node == destination) {
            return true
        }

        if (visitedEdges.has(node)) { return false }
        visitedEdges.add(node)

        for (const next of edgeMap.get(node) ?? []) {
            if (dfs(next)) return true
        }
        return false
    }

    return dfs(source)
};

function buildMap(edges) {
    let map = new Map()

    function add(from, to) {
        if (!map.has(from)) {
            map.set(from, [])
        }

        map.get(from).push(to)
    }

    for (const [a, b] of edges) {
        add(a, b)
        add(b, a)
    }

    return map
}

/**
 * build map of destination -> source
 */

describe("validPath", () => {
    const cases = [
        [3, [[0,1],[1,2],[2,0]], 0, 2, true],
        [6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5, false]
    ]

    for (const [n, edges, source, destination, expected] of cases) {
        it(`${JSON.stringify(edges)}, source: ${source}, destination: ${destination} => ${expected}`, () => {
            assert.equal(validPath(n, edges, source, destination), expected)
        })
    }
})