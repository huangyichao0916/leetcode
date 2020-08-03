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
var isPalindrome = function(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    let arr2 = [...arr];
    arr2.reverse();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};