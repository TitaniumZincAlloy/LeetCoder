import UIKit
import XCTest

public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil; }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
}
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var curNode1 = l1
        var curNode2 = l2
        var remainder = 0
        var dummyHead = ListNode(0, nil)
        var curResultNode = dummyHead
        
        while curNode1 != nil || curNode2 != nil || remainder != 0 {
            var value1 = curNode1?.val ?? 0
            var value2 = curNode2?.val ?? 0
            
            var sum = value1 + value2 + remainder
            remainder = sum/10
            sum = sum%10
            
            curResultNode.next = ListNode(sum, nil)
            curResultNode = curResultNode.next!
            
            curNode1 = curNode1?.next
            curNode2 = curNode2?.next
        }
        
        return dummyHead.next
    }
}

func create345() -> ListNode {
    return ListNode(3, ListNode(4,ListNode(5, nil)))
}

func create987() -> ListNode {
    return ListNode(9, ListNode(8, ListNode(7, nil)))
}

func isNumber(_ rootNode: ListNode, _ number: [Int]) -> Bool {
    var curNode: ListNode? = rootNode
    for num in number {
        if num != curNode?.val {
            return false
        }
        curNode = curNode?.next
    }
    
    if curNode != nil {
        return false
    }
    
    return true
}

class SolutionTests: XCTestCase {
    func testIsNumber() {
        XCTAssertTrue(isNumber(create345(), [3,4,5]))
        XCTAssertTrue(isNumber(create987(), [9,8,7]))
        XCTAssertFalse(isNumber(create345(), [9,8,7]))
        XCTAssertFalse(isNumber(create987(), [3,4,5]))
    }

    func testAdd() {
        let result1 = Solution().addTwoNumbers(create345(), create987())
        XCTAssertNotNil(result1)
        XCTAssertTrue(isNumber(result1!, [2,3,3,1]))
    }
}

SolutionTests.defaultTestSuite.run()