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
    if (!head) {
        return null;
    }
    let newHead = new ListNode(0);
    let res = newHead;
    newHead.next = head;
    while (newHead) {
        if (!newHead.next) {
            break;
        }
        if (newHead.next.val === val) {
            newHead.next = newHead.next.next;
            // newHead = newHead.next;
        }else{
            newHead = newHead.next;
        }
    }
    return res.next;
};