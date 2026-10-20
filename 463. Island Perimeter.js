const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let edgeCount = 0

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] == 1) {
                edgeCount += 4

                if (i > 0 && grid[i-1][j] == 1) { edgeCount -= 2 }
                if (j > 0 && grid[i][j-1] == 1) { edgeCount -= 2}
            }
        }
    }

    return edgeCount
};

describe("islandPerimeter", () => {
    const cases = [
        [[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]], 16],
        [[[1]], 4],
        [[[1,0]],4]
    ]

    for (const [grid, expectedResult] of cases) {
        it(`${JSON.stringify(grid)} => ${expectedResult}`, () => {
            assert.equal(islandPerimeter(grid), expectedResult)
        })
    }
})