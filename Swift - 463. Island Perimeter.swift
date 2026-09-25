import UIKit
import XCTest

class Solution {
    func islandPerimeter(_ grid: [[Int]]) -> Int {
        var grid = grid
        var islandBorders = 0
        
        for (i, row) in grid.enumerated() {
            for j in 0..<row.count {
                if grid[i][j] == 1 {
                    buildIsland(i, j)
                    
                    return islandBorders
                }
            }
        }
        
        func buildIsland(_ r: Int, _ c: Int) {
            if !grid.indices.contains(r) || !grid[r].indices.contains(c) {
                islandBorders += 1
                return
            }
            
            if grid[r][c] == 0 {
                islandBorders += 1
                return
            }
            
            if grid[r][c] == 1 {
                grid[r][c] = -1 // Mark visited
                
                buildIsland(r-1, c)
                buildIsland(r+1, c)
                buildIsland(r, c-1)
                buildIsland(r, c+1)
            }
        }
        
        return 0
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        let grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
        XCTAssertEqual(Solution().islandPerimeter(grid), 16)
    }
    
    func testCase2() {
        let grid = [[1]]
        XCTAssertEqual(Solution().islandPerimeter(grid), 4)
    }
}

SolutionTests.defaultTestSuite.run()
