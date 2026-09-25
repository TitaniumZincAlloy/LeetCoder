import UIKit
import XCTest

class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        if source == destination {
            return true
        }
        var graphDic = buildGraphDictionary(edges)
        var seen: Set<Int> = Set()
        
        func dfs(i: Int) -> Bool{
            if i==destination {
                return true
            }
            
            guard let connectedNodes = graphDic[i] else {
                return false
            }
            
            for connectedNode in connectedNodes {
                if !seen.contains(connectedNode) {
                    seen.insert(connectedNode)
                    if dfs(i: connectedNode) == true { return true }
                }
                
            }
            
            return false
        }
        
        return dfs(i: source)
    }
    
    func buildGraphDictionary(_ edges: [[Int]]) -> [Int: [Int]] {
        // Build node dictionary
        var edgeDic: [Int: [Int]] = [:]
        
        for edge in edges {
            if edgeDic[edge[0]] == nil {
                edgeDic[edge[0]] = []
            }
            
            if edgeDic[edge[1]] == nil {
                edgeDic[edge[1]] = []
            }
            
            edgeDic[edge[0]]?.append(edge[1])
            edgeDic[edge[1]]?.append(edge[0])
        }
        return edgeDic
    }
}

class SolutionTests: XCTestCase {
    func testCase1() {
        var result = Solution().validPath(3, [[0,1],[1,2],[2,0]], 0, 2)
        XCTAssertTrue(result)
    }
    
    func testCase2() {
        var result = Solution().validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)
        XCTAssertFalse(result)
    }
    
    func testCase3() {
        var result = Solution().validPath(0, [], 0, 0)
        XCTAssertFalse(false)
    }
}

SolutionTests.defaultTestSuite.run()
