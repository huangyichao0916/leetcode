/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let result = [];
    let shouldReverse = true;
    while (queue.length) {
        shouldReverse = !shouldReverse;
        let arr = queue;
        queue = [];
        let buffer = [];
        for (const item of arr) {
            buffer.push(item.val);
            item.left && queue.push(item.left);
            item.right && queue.push(item.right);
        }
        if (shouldReverse) {
            buffer.reverse();
        }
        result.push(buffer);
    }
    return result;
};