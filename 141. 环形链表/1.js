/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    if (!head.next) {
        return false;
    }
    let [slow,fast] = [head,head.next];
    while (slow && fast) {
        if (slow == fast) {
            return true;
        }else{
            slow = slow.next;
            if (!fast.next) {
                return false
            }else{
                fast = fast.next.next;
            }
        }
    }
    return false;
};