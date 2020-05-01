/**
 * 
 * @param {number} n 
 * @return {number}
 */
var integerReplacement = function (n) {
    let minTime = Infinity;

    let fnc = function (num, time) {

        if (num <= 1) {
            if (num === 0) {
                time++;
            }
            if (time < minTime) {
                minTime = time;
            }
            return;
        }//递归终止条件

        if (num % 2 === 0) {
            fnc(num / 2, time + 1);
        }
        else {
            fnc(num - 1, time + 1);
            fnc(num + 1, time + 1);
        }
    }
    fnc(n, 0);

    return minTime;
};