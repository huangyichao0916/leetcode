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
    let queue = [root];
    // let flag = queue.some(item => item !== null);
    while (queue.length) {
        let arr = queue;
        let numArr = [];
        queue = [];
        for (const item of arr) {
            if (item) {
                if (item.left) {
                    numArr.push(item.left.val);
                    queue.push(item.left);
                }else{
                    numArr.push(null)
                }
                if (item.right) {
                    numArr.push(item.right.val);
                    queue.push(item.right);
                }else{
                    numArr.push(null)
                }
            }
        }
        let numArrCopy = [...numArr];
        numArr.reverse();
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] !== numArrCopy[i]) {
                return false;
            }
        }
    }
    return true;
};