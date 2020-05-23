/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    let helper = function(node){
        if (!node) {
            return;
        }
        [node.left, node.right] = [node.right, node.left];
        helper(node.left);
        helper(node.right);
    }
    helper(root);
    return root;
};