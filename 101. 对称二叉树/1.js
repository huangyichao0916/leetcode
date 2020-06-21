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
var isSymmetric = function(root) {
    let res = [];
    let helper = function(node){
        if (node === null) {
            res.push(0);
            return;
        }else{
            res.push(node.val);
            helper(node.left);
            helper(node.right);
        }
    }
    // console.log(res);
    let flip = function(node){
        if (node === null) {
            return;
        }else{
            [node.left , node.right] = [node.right , node.left];
            flip(node.left);
            flip(node.right);
        }
    }
    helper(root);
    flip(root);
    let resCopy = [...res];
    res = [];
    helper(root);
    let flag = true
    res.forEach((item,index) => {
        if (item !== resCopy[index]) {
            flag = false;
        }
    })
    return flag;
};