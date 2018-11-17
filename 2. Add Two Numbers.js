//Runtime: 112 ms, faster than 98.53% of JavaScript online submissions for Add Two Numbers.

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

var addTwoNumbers = function(l1, l2) {
    var node1 = l1;
    var node2 = l2;

    var overflow = 0;
    var resultNode;
    var rootNode;
    while(node1 || node2) {
        var digit1 = 0;
        var digit2 = 0;

        if(node1) {
            digit1 = node1.val;
            node1 = node1.next;
        }
        if(node2) {
            digit2 = node2.val;
            node2 = node2.next;
        }

        var resDigit = digit1 + digit2 + overflow;
        overflow = 0;
        if(resDigit > 9) {
            overflow = 1;
            resDigit = resDigit - 10;
        }

        var node = new ListNode(resDigit);        
        if(!rootNode) {
            rootNode =  node;
            resultNode = node;
        } else {
            resultNode.next = node;
            resultNode = node;
        }
    }

    if(overflow > 0) {
        var node = new ListNode(overflow); 
        if(!rootNode) {
            rootNode =  node;
            resultNode = node;
        } else {
            resultNode.next = node;
            resultNode = node;
        }
    }

    return rootNode;
};

console.log(addTwoNumbers(build342(), build465()));
console.log(addTwoNumbers(build5(), build5()));