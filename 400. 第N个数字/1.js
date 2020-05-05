/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n<=9) {
        return n;
    }
    let [sum, i] = [0, 1];
    for (; sum < n; i++) {
        sum += 9 * Math.pow(10, i - 1) * i;
    }
    i--;
    // console.log(sum,i);
    // console.log(sum);
    let num = Math.pow(10, i) - 1;
    // console.log(num,i);
    for (; sum - i >= n; num--) {
        sum -= i;
    }
    let differentValue = sum - n;
    // console.log(differentValue);
    let result = Math.floor(num / (Math.pow(10,differentValue))) % 10;
    return result;
};





console.log(findNthDigit(17));