import UIKit
import XCTest

class Solution {
    func numIslands(_ grid: [[Character]]) -> Int {
        if grid.isEmpty { return 0 }
        var grid = grid
        var islandCount = 0
        
        for (i, row) in grid.enumerated() {
            for j in 0..<row.count {
                if grid[i][j] == "1" {
                    markIsland(i, j)
                    islandCount += 1
                }
            }
        }
        
        func markIsland(_ r: Int, _ c: Int) {
            guard
                grid.indices.contains(r),
                grid[r].indices.contains(c),
                grid[r][c] == "1" else {
                return
            }
            
            grid[r][c] = "v"
            
            markIsland(r-1, c)
            markIsland(r+1, c)
            markIsland(r, c-1)
            markIsland(r, c+1)
        }
        
        return islandCount
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        let grid: [[Character]]  = [
          ["1","1","1","1","0"],
          ["1","1","0","1","0"],
          ["1","1","0","0","0"],
          ["0","0","0","0","0"]
        ]
        let solution = Solution().numIslands(grid)
        XCTAssertEqual(solution, 1)
    }
    
    func testCase2() {
        let grid: [[Character]]  = [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ]
        let solution = Solution().numIslands(grid)
        XCTAssertEqual(solution, 3)
    }
    
    func testCase3() {
        let grid: [[Character]]  = []
        let solution = Solution().numIslands(grid)
        XCTAssertEqual(solution, 0)
    }
}

SolutionTests.defaultTestSuite.run()
