const { describe, it } = require("node:test")
const assert = require("node:assert/strict");

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let order = []
    let prerecMap = createMap(prerequisites)

    // 0 = unvisited, 1 = visiting, 2 = visited
    let states = Array(numCourses).fill(0)

    /**
     * @param {*} i 
     * @return (false if cycle, true if not cycle)
     */
    function dfs(i) {
        if (states[i] == 1) {
            return false // cycle detected
        } else if (states[i] == 2) {
            return true // Visiting an already good node
        }

        states[i] = 1 // Visiting

        for (const nextI of (prerecMap.get(i) ?? [])) {
            if (!dfs(nextI)) {
                return false
            }
        }

        states[i] = 2 // Visited
        order.push(i)
        return true
    }

    for (let i=0; i<numCourses; i++) {
        if (!dfs(i)) {
            return []
        }
    }

    return order
};

function createMap(prerequisites) {
    var map = new Map()

    for (const [to, from] of prerequisites) {
        if(!map.has(to)) {
            map.set(to, [])
        }
        map.get(to).push(from)
    }

    return map
}

describe("findOrder", () => {
    function arrayEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    it("single class should return 0", () => {
        assert.deepEqual(arrayEqual(findOrder(1, []), [0]), true)
    })

    it("2 courses", () => {
        assert.deepEqual(arrayEqual(findOrder(2, [[1, 0]]), [0, 1]), true)
    })

    it("2 courses flipped", () => {
        assert.deepEqual(arrayEqual(findOrder(2, [[0, 1]]), [1, 0]), true)
    })

    it("3 courses", () => {
        let result = findOrder(4, [[1,0],[2,0],[3,1],[3,2]])
        assert.equal(arrayEqual(result, [0,2,1,3]) || arrayEqual(result, [0,1,2,3]), true)
    })

    it("returns empty if there is a cycle", () => {
        let result = findOrder(3, [[1,0],[2,1],[0,2]])
        assert.deepEqual(result, [])
    })
})
