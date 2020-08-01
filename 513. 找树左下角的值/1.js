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
var findBottomLeftValue = function(root) {
    let queue = [root];
    let buffer = [];
    while (queue.length) {
        buffer = [...queue];
        queue = [];
        for (const item of buffer) {
            item.left && queue.push(item.left);
            item.right && queue.push(item.right);
        }
    }
    return buffer[0].val;
};