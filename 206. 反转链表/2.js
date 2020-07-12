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
    const arr = [];
    const helper = function(node){
        if (!node) {
            return;
        }
        arr.unshift(node.val);
        helper(node.next);
    }
    helper(head);
    console.log(arr);
    const res = new ListNode(0);
    let resres = res;
    arr.forEach(item => {
        resres.next = new ListNode(item);
        resres = resres.next;
    })
    return res.next;
};