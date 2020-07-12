/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) {
        return null;
    }
    let res = new ListNode(0);
    let arr = [];
    while (head) {
        // res.next = head.val;
        arr.unshift(head.val);
        head = head.next;
    }
    let resres = res;
    arr.forEach(item => {
        res.next = new ListNode(item)
        res = res.next;
    });
    return resres.next;
};