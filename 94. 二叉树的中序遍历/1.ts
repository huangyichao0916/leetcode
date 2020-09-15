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

function inorderTraversal(root: TreeNode | null): number[] {
    const resArr:number[] = [];

    function dfs(node:TreeNode | null) {
        if (!node) {
            return;
        }
        dfs(node.left)
        resArr.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    
    return resArr;
};