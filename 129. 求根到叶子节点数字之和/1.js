/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumNumbers(root) {
    let sum = 0;
    let path = [];
    function helper(node) {
        if (!node) {
            return;
        }
        path.push(node.val);
        if (!node.left && !node.right) {
            sum += parseInt(path.join(''))
            path.pop();
            return;
        }
        helper(node.left)
        helper(node.right)
        path.pop()
    }
    helper(root)
    return sum;
};