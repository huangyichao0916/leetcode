/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let arr = [];
    let helper = function(node){
        if (node === null) {
            return;
        }
        arr.push(node.val);
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return arr;
};