/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 0;
    let maxDepth = 0;
    function helper(node) {
        if(!node){
            return;
        }
        depth ++;
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        helper(node.left)
        helper(node.right)
        depth --;
    }
    helper(root)
    return maxDepth;
};