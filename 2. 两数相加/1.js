/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // if (!l1) {
    //     return l2;
    // }
    // if (!l2) {
    //     return l1;
    // }
    let cur = new ListNode(0);
    let res = cur;
    let [p , q] = [l1 , l2];
    let isCarry = false;
    while (p || q) {
        let pVal = p ? p.val : 0;
        let qVal = q ? q.val : 0;
        let num = isCarry?1:0;
        let sum = pVal + qVal + num;
        // console.log(pVal,qVal,sum)
        isCarry = sum >= 10;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
        if (p) {
            p = p.next;
        }
        if (q) {
            q = q.next;
        }
    }
    if (isCarry) {
        cur.next = new ListNode(1);
    }
    return res.next;
};