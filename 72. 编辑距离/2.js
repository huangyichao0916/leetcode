/**
 * 
 * @param {string} word1 
 * @param {string} word2 
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let [word1Length, word2Length] = [word1.length, word2.length];
    let arr = [];
    arr[0] = [];
    // 初始化一个内容全为0的二维数组
    for (let i = 0; i < word1Length; i++) {
        arr[i] = [];
        for (let j = 0; j < word2Length; j++) {
            arr[i].push(0);
        }
    }
    // let a = arr[0];
    //给二维数组的第1行赋值
    arr[0][0] = (word1[0] === word2[0] ? 0 : 1);
    for (let i = 1; i < word2Length; i++) {
        arr[0][i] = arr[0][i - 1] + 1;
    }
    //给二维数组的第1列赋值
    for (let i = 1; i < word1Length; i++) {
        arr[i][0] = arr[i - 1][0] + 1;
    }
    for (let i = 1; i < word1Length; i++) {
        for (let j = 1; j < word2Length; j++) {
            if (word1[i] === word2[j]) {
                arr[i][j] = Math.min(arr[i - 1][j] + 1,
                                     arr[i][j - 1] + 1,
                                     arr[i - 1][j - 1]);
            }
            else {
                arr[i][j] = Math.min(arr[i - 1][j] + 1,
                                     arr[i][j - 1] + 1,
                                     arr[i - 1][j - 1] + 1);
            }
        }
    }
    return arr[word1Length-1][word2Length-1];
};
console.log(minDistance("intention", "execution"));//预计输出5

// mad
// zas    1.mad  mas 
//         2.ad zas