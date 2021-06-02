// Runtime: 76 ms, faster than 95.49% of JavaScript online submissions for Reverse Linked List.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let node = head;
    let currentHead = null;
    while (node) {
        const currentNode = node;
        const nextNode = node.next;

        currentNode.next = currentHead; // Make current node the head of the new list
        currentHead = currentNode;

        node = nextNode;
    }

    return currentHead;
};