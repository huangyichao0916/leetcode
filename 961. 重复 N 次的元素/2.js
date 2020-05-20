/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let obj = {};
    let len = A.length;
    for (let i = 0; i <= len/2 + 1; i++) {
        if (obj[A[i]] === true) {
            return A[i];
        }
        obj[A[i]] = true;
    }
    console.log(obj);
};

let testArr = [1,2,3,3]
console.log(repeatedNTimes(testArr));