import UIKit
import XCTest

class Solution {
    func floodFill(_ image: [[Int]], _ sr: Int, _ sc: Int, _ color: Int) -> [[Int]] {
        var image = image
        let originalColor = image[sr][sc]
        guard originalColor != color else { return image }
                
        func fill(_ row: Int, _ col: Int) {
            guard image.indices.contains(row),
                  image[row].indices.contains(col),
                  image[row][col] == originalColor else { return }
            
            image[row][col] = color
            fill(row-1, col)
            fill(row+1, col)
            fill(row, col-1)
            fill(row, col+1)
        }
        
        fill(sr, sc)
        return image
    }
}

/* Start from image[sr, sc]
 * base case - if image[sr, sc] == color, return image
 * Iterative vs Recursive
 * If Recursive changes the same node, it's fine cause the end result is the same
 *
 */
class SolutionTests: XCTestCase {
    func testCase1() {
        let solution = Solution().floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)
        XCTAssertEqual(solution, [[2,2,2],[2,2,0],[2,0,1]])
    }
    
    func testCase2() {
        let solution = Solution().floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 1)
        XCTAssertEqual(solution, [[1,1,1],[1,1,0],[1,0,1]])
    }
    
}

SolutionTests.defaultTestSuite.run()
