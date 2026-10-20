const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0

    function markIslandAt(i, j) {
        if (
            i < 0 || i >= grid.length || 
            j < 0 || j >= grid[i].length || 
            grid[i][j] !== "1"
        ) { 
                return 
        }

        grid[i][j] = "2"

        markIslandAt(i-1, j)
        markIslandAt(i+1, j)
        markIslandAt(i, j-1)
        markIslandAt(i, j+1)
    }

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === "1") {
                islandCount++
                markIslandAt(i, j)
            }
        }
    }

    return islandCount
};

/**
 * When hitting swap to -1 and flip all 1s next to it into -1
 * Increment island count by 1
 * This will change the entire island to -1
 * continue loop until next 1 is seen and repeat
 */

describe("numIslands", () => {
    it("when 1 island should return 1 island", () => {
        let grid = [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
        ]
        assert.equal(numIslands(grid), 1)
    })

    it("when 3 island should return 3 island", () => {
        let grid = [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ]
        assert.equal(numIslands(grid), 3)
    })
})