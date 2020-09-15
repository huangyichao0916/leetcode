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

function pathSum(root: TreeNode | null, sum: number): number[][] {
    const resArr:number[][] = [];
    let mySum:number = 0;
    const path:number[] = [];

    function dfs(node:TreeNode | null) {
        if (!node) {
            return
        }

        mySum += node.val;
        path.push(node.val)
        if (mySum === sum) {
            if (!node.left && !node.right) {
                resArr.push(path.slice())
                mySum -= node.val;
                path.pop()
                return;
            }else{
                mySum -= node.val;
                path.pop()
                return;
            }
        }
        dfs(node.left)
        dfs(node.right)
        mySum -= node.val;
        path.pop()
    }

    dfs(root)

    return resArr;
};