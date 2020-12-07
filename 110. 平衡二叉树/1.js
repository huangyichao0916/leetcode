/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true;
    const helper = node => {
        console.log('权佳欣')
        if(!node){
            return;
        }
        //递
        helper(node.left)
        helper(node.right)
        //归
        const leftHeight = node.left ? node.left.val : 0;
        const rightHeight = node.right ? node.right.val : 0;
        node.val = Math.max(leftHeight,rightHeight) + 1;
        const dif = leftHeight - rightHeight;//差值
        if(!(dif <= 1 && dif >= -1)){
            flag = false;
        }
    }
    helper(root)
    return flag
};