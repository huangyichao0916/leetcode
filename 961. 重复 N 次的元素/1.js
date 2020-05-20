/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let len = A.length;
    for (let i = 0; i <= len/2; i++) {
        let arr = A.slice(i + 1 , i + 1 + len/2 + 1);
        if (arr.includes(A[i])) {
            return A[i];
        }
    }
};


console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));