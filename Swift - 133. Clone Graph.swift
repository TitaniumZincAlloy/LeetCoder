import UIKit
import XCTest

public class Node {
    public var val: Int
    public var neighbors: [Node?]
    public init(_ val: Int) {
        self.val = val
        self.neighbors = []
    }
}

/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var neighbors: [Node?]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.neighbors = []
 *     }
 * }
 */

class Solution {
    func cloneGraph(_ node: Node?) -> Node? {
        guard let node else {
            return nil
        }
        var visitedNodes: [Int:Node] = [:]
        
        func cloneNode(_ node: Node) -> Node {
            if let existingNode = visitedNodes[node.val] {
                return existingNode
            }
            
            var newNode = Node(node.val)
            visitedNodes[node.val] = newNode

            for case let neighbor? in node.neighbors {
                newNode.neighbors.append(cloneNode(neighbor))
            }
            
            return newNode
        }
        
        return cloneNode(node)
    }
}

class SolutionTests: XCTestCase {
    func assertClone(_ clone: Node?, of original: Node?, file: StaticString = #filePath, line: UInt = #line) {
        guard let original else {
            XCTAssertNil(clone, file: file, line: line)
            return
        }
        guard let clone else {
            XCTFail("Expected a cloned graph", file: file, line: line)
            return
        }
        var clones: [Int: Node] = [:]
        var pending: [(Node, Node)] = [(original, clone)]
        while let (node, copied) = pending.popLast() {
            if let existing = clones[node.val] {
                XCTAssertIdentical(existing, copied, file: file, line: line)
                continue
            }
            clones[node.val] = copied
            XCTAssertEqual(copied.val, node.val, file: file, line: line)
            XCTAssertNotIdentical(copied, node, file: file, line: line)
            let originalNeighbors = node.neighbors.compactMap { $0 }.sorted { $0.val < $1.val }
            let clonedNeighbors = copied.neighbors.compactMap { $0 }.sorted { $0.val < $1.val }
            XCTAssertEqual(originalNeighbors.map(\.val), clonedNeighbors.map(\.val), file: file, line: line)
            for (originalNeighbor, clonedNeighbor) in zip(originalNeighbors, clonedNeighbors) {
                XCTAssertNotIdentical(clonedNeighbor, originalNeighbor, file: file, line: line)
                pending.append((originalNeighbor, clonedNeighbor))
            }
        }
    }
    func testCase1() {
        var node1 = Node(1)
        var node2 = Node(2)
        var node3 = Node(3)
        var node4 = Node(4)
        
        node1.neighbors = [node2, node4]
        node2.neighbors = [node1, node3]
        node3.neighbors = [node2, node4]
        node4.neighbors = [node1, node3]
        
        assertClone(Solution().cloneGraph(node1), of: node1)
    }

    func testCase2() {
        XCTAssertNil(Solution().cloneGraph(nil))
    }
}

SolutionTests.defaultTestSuite.run()
