/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1]) {
            return A[i];
        }
    }
    if (A[0] === A[2] || A[0] === A[3]) {
        return A[0];
    }
    if (A[1] === A[3]) {
        return A[1];
    }
};

let testArr = [9,5,6,9]
console.log(repeatedNTimes(testArr));

