/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.filter(item => item % 2 === 0).concat(A.filter(item => item % 2 !== 0));
};

console.log(sortArrayByParity([3,1,2,4]));