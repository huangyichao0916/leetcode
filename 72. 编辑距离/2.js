/**
 * 
 * @param {string} word1 
 * @param {string} word2 
 * @return {number}
 */
var minDistance = function (word1, word2) {
    if (word1 === '' || word2 === '') {
        return Math.max(word1.length,word2.length);
    }
    let [word1Length, word2Length] = [word1.length, word2.length];
    let arr = [];
    // 初始化一个内容全为0的二维数组
    for (let i = 0; i < word1Length; i++) {
        arr[i] = [];
        for (let j = 0; j < word2Length; j++) {
            arr[i].push(0);
        }
    }
    // console.log(arr);
    
    if (arr[0] !== undefined) {
        //当2个单词的首字母相同时
        if (word1[0] === word2[0]) {
            arr[0][0] = 0;
            for (let i = 1; i < word2Length; i++) {
                arr[0][i] = arr[0][i - 1] + 1;
            }
            for (let i = 1; i < word1Length; i++) {
                arr[i][0] = arr[i - 1][0] + 1;
            }
        }
        //当2个单词的首字母不相同时
        else{
            arr[0][0] = 1;
            let i = 1;
            //给第一行赋值
            for (; i < word2Length; i++) {
                if (word2[i]===word1[0]) {
                    arr[0][i] = arr[0][i - 1];
                    break;
                }
                arr[0][i] = arr[0][i - 1] + 1;
            }
            for (let j = i+1; j < word2Length; j++) {
                arr[0][j] = arr[0][j - 1] + 1;
            }

            //给第一列赋值
            let q = 1;
            for (; q < word1Length; q++) {
                if (word1[q]===word2[0]) {
                    arr[q][0] = arr[q - 1][0];
                    break;
                }
                arr[q][0] = arr[q - 1][0] + 1;
            }
            for (let p = q+1; p < word1Length; p++) {
                arr[p][0] = arr[p - 1][0] + 1;
            }
        }
    }
    // console.log(arr);
    //开始填充二维数组
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
    // console.log(arr);
    if (arr[word1Length-1] !== undefined) {
        return arr[word1Length-1][word2Length-1];
    }
};
// console.log(minDistance("sea", "eat"));
console.log(minDistance("horse", "ros"));

// mad
// zas    1.mad  mas 
//         2.ad zas