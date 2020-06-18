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
        let first = queue.shift();
        result.push(first.val);
        first.left && queue.push(first.left);
        first.right && queue.push(first.right);
    }
    return result;
};

