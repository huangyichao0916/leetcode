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
var deleteNode = function(head, val) {
    let realHead = new ListNode('a');
    realHead.next = head;
    let pointer = realHead;
    // point = point.next;
    while (pointer) {
        if (pointer.next) {
            if (pointer.next.val = val) {
                pointer.next = pointer.next.next;
                break;
            }
        }
        pointer = pointer.next;
    }
    return realHead.next;
};