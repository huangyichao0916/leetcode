/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    // let numColumns = Math.ceil(s.length / numRows);
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        arr.push([]);
    }
    console.log(arr);
    let [velocityX, velocityY, i, j] = [1, -1, 0, 0];
    // arr[0,0] = s[0];
    for (let q = 0; q < s.length; q++) {
        arr[i][j] = s[q];
        if (i === 0 || i === numRows - 1) {
            velocityX = velocityX === 0 ? 1 : 0;
            velocityY = - velocityY;
        }
        i += velocityY;
        j += velocityX;
    }
    console.log(arr);
    let resultArray = [];
    for (let g = 0; g < numRows; g++) {
        for (let f = 0; f <= j; f++) {
            if (arr[g][f] !== undefined) {
                resultArray.push(arr[g][f]);
            }
        }
    }
    return resultArray.join('');
};
let testString = "LEETCODEISHIRING";
let testNum = 4;
console.log(convert(testString,testNum))