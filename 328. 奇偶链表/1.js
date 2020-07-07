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
var oddEvenList = function(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    if (!head.next.next) {
        return head;
    }
    let oddListHead = {val:head.val , next:null};
    let evenListHead = {val:head.next.val , next:null};
    let currentOdd = oddListHead;
    let currentEven = evenListHead;
    let current = head.next;
    while (current.next) {
        current = current.next;
        currentOdd.next = {val:current.val , next:null};
        currentOdd = currentOdd.next;

        if (current.next) {
            current = current.next;
            currentEven.next = {val:current.val , next:null};
            currentEven = currentEven.next;
        }else{
            break;
        }
    }
    currentOdd.next = evenListHead;
    return oddListHead;
};