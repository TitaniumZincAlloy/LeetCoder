const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let startingColor = image[sr][sc]
    if (color == startingColor) { return image }

    function fill(sr, sc) {
        if (
            sr < 0 || sr >= image.length ||
            sc < 0 || sc >= image[sr].length ||
            image[sr][sc] != startingColor) { return }

        image[sr][sc] = color
        fill(sr-1, sc)
        fill(sr+1, sc)
        fill(sr, sc-1)
        fill(sr, sc+1)
    }

    fill(sr, sc)
    return image
};

describe("floodFill", () => {
    it("should fill colors correctly", () => {
        assert.deepEqual(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2), [[2,2,2],[2,2,0],[2,0,1]])
    })

    it("should not fill colors if all colors are the same", () => {
        assert.deepEqual(floodFill([[0,0,0],[0,0,0]], 0, 0, 0), [[0,0,0],[0,0,0]])
    })
})
