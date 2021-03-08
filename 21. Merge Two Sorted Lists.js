// Runtime: 88 ms, faster than 83.40% of JavaScript online submissions for Merge Two Sorted Lists.

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
var mergeTwoLists = function(l1, l2) {
    if (!l1) { return l2; }
    if( !l2) { return l1; }

    var node1 = l1;
    var node2 = l2;

    var startingNode;
    var currentNode;

    if(node1.val < node2.val) {
        startingNode = node1;
        currentNode = node1;
        node1 = node1.next;
    } else {
        startingNode = node2;
        currentNode = node2;
        node2 = node2.next;
    }

    while (node1 && node2) {
        if(node1.val < node2.val) {
            currentNode.next = node1;
            currentNode = currentNode.next;
            node1 = node1.next;
        } else {
            currentNode.next = node2;
            currentNode = currentNode.next;
            node2 = node2.next;
        }
    }

    if (node1) {
        currentNode.next = node1;
    } else if (node2) {
        currentNode.next = node2
    }

    return startingNode;
};