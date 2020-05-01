/**
 * 
 * @param {string} word1 
 * @param {string} word2 
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let [word1Length, word2Length, minTime] = [word1.length, word2.length, Infinity];

    let fnc = function(m,n,time){
        if (m === word1Length || n === word2Length) {
            if (m === word1Length) {
                time += word2Length - n;
            }
            else{
                time += word1Length -m;
            }
            if (time < minTime) {
                minTime = time;
            }
        }
        if (word1[m] === word2[n]) {
            fnc(m+1,n+1,time);
        }
        if (word1[m] !== word2[n]) {
            fnc(m+1,n,time+1);
            fnc(m,n+1,time+1);
            fnc(m+1,n+1,time+1);
        }
    }
    fnc(0,0,0);
    return minTime;
};
console.log(minDistance('horse','ros'));//预计输出3

// mad
// zas    1.mad  mas 
//         2.ad zas