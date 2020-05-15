/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let obj = {};
    widths.forEach((item,index) => {
        obj[String.fromCodePoint(index + 97)] = item;
    })
    // console.log(obj);
    let sumHundred = 0;
    let rest = 0;
    S = S.split('');
    for (let i = 0; i < S.length; i++) {
        if (rest + obj[S[i]] > 100) {
            sumHundred++;
            rest = 0;
            i--;
            continue;
        }
        rest += obj[S[i]];
    }
    return [sumHundred + 1,rest];
};

console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    "bbbcccdddaaa")
    );  //预期结果[2,4]