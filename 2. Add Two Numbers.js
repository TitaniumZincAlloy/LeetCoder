const { describe, it } = require("node:test")
const assert = require("node:assert/strict")

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function build342() {
    var two = new ListNode(2);
    var four = new ListNode(4);
    var three = new ListNode(3);
    two.next = four;
    four.next = three;
    return two;
}

function build465() {
    var five = new ListNode(5);
    var six = new ListNode(6);
    var four = new ListNode(4);
    five.next = six;
    six.next = four;
    return five;
}

function build5() {
    var five = new ListNode(5);
    return five;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummy = new ListNode(0)
    var last = dummy
    var carry = 0

    while (l1 || l2 || carry) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = Math.floor(sum/10)
        last.next = new ListNode(sum%10)
        last = last.next

        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }

    return dummy.next
};

describe("Add Two Numbers Tests", () => {
    it("should add 343 and 465 correctly into 608", () => {
        let result = addTwoNumbers(build342(), build465())
        assert.deepEqual(result.val, 7)
        assert.deepEqual(result.next.val, 0)
        assert.deepEqual(result.next.next.val, 8)
    });

    it("should add 5 and 5 into 01", () => {
        let result = addTwoNumbers(build5(), build5())
        assert.deepEqual(result.val, 0)
        assert.deepEqual(result.next.val, 1)
    });
})

console.log(addTwoNumbers(build342(), build465()));
console.log(addTwoNumbers(build5(), build5()));