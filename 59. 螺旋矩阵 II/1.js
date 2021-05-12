/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
    const resArr = [];
    for (let i = 0; i < n; i++) {
        const arr = [];
        resArr.push(arr);
    }
    const obj = {
        x: 1,
        y: 0,
    };
    const willImpact = (row, column) => {
        row += obj.y;
        column += obj.x;
        if (
            row >= n ||
            row < 0 ||
            column >= n ||
            column < 0 ||
            resArr[row][column] !== undefined
        ) {
            return true;
        }
        return false;
    };
    const handleImpact = () => {
        const { x, y } = obj;
        let newX, newY;
        if (x !== 0) {
            [newX, newY] = [y, x];
        } else {
            [newX, newY] = [-y, -x];
        }
        obj.x = newX;
        obj.y = newY;
    };
    let row = 0;
    let column = 0;
    for (let i = 1; i <= n * n; i++) {
        resArr[row][column] = i;
        if (willImpact(row, column)) {
            handleImpact();
        }
        column += obj.x;
        row += obj.y;
    }
    return resArr;
};
console.log(generateMatrix(6));
