/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    arr = arr.filter(i => i !== val);
    let node = new ListNode(0);
    let res = node;
    arr.forEach(i => {
        node.next = new ListNode(i);
        node = node.next
    });
    return res.next;
};