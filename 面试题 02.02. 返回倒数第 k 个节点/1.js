/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    let point1 = point2 = head;
    for (let i = 0; i < k; i++) {
        point2 = point2.next;
    }
    while (point2) {
        point1 = point1.next;
        point2 = point2.next;
    }
    return point1.val;
};