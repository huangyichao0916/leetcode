/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    K = K.toString().split('').map(item => parseInt(item));//现在A和K都是整数数组
    let minLength = function (a, b) {
        if (a.length > b.length) {
            return [a , b];
        } else if (a.length < b.length) {
            return [b , a];
        } else {
            return 0;
        }
    }
    if (minLength(A , K) !== 0) {
        [A , K] = minLength(A , K);
        // console.log(A,K);
        let different = A.length - K.length;
        for (let i = 0; i < different; i++) {
            K.unshift(0);
        }
        // console.log(A,K);
    }
    for (let i = 0; i < A.length; i++) {
        A[i] += K[i];
    }
    console.log(A);
    let j;
    for (j = A.length - 1; j >= 1; j--) {
        if (A[j] >= 10) {
            A[j] = A[j] % 10;
            A[j - 1]++; 
        }
    }
    if (A[j] >= 10) {
        A[j] = A[j] % 10;
        A.unshift(1);
    }
    return A;
};

console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));
//预期结果[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

// addToArrayForm([1,2,3],12324);