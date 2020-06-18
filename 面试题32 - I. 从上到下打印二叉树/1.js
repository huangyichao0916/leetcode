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
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];
    while (queue.length) {
        let arr = queue;
        queue = [];
        for (const item of arr) {
            result.push(item.val);
            if (item.left) {
                queue.push(item.left);
            }
            if (item.right) {
                queue.push(item.right);
            }
        }
    }
    return result;
};

