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

function hasPathSum(root: TreeNode | null, sum: number): boolean {
    let res:boolean = false;
    let shouldGoOn:boolean = true;

    let mySum:number = 0;

    function dfs(node:TreeNode | null) {
        if (!shouldGoOn) {
            return
        }
        if (!node) {
            return;
        }
        mySum += node.val;
        if (mySum === sum) {
            if (!node.left && !node.right) {
                res = true;
                shouldGoOn = false;
                return;
            }
        }
        dfs(node.left)
        dfs(node.right)
        mySum -= node.val;
    }
    dfs(root)
    return res;
};