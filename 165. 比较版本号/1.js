/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let [v1,v2] = [version1.split('.'),version2.split('.')];
    // console.log(v1,v2)
    for (let i = 0; i < Math.max(v1.length,v2.length) + 1; i++) {
        if (v1[i] === undefined && v2[i] === undefined) {
            return 0;
        }

        let [a,b] = [v1[i] === undefined ? 0 : parseInt(v1[i]),
        v2[i] === undefined ? 0 : parseInt(v2[i])];

        console.log(a,b);

        if (a === b) {
            continue;
        }else{
            if (a > b) {
                return 1;
            }else{
                return -1
            }
        }
    }
};

const version1 = "01", version2 = "1"
console.log(compareVersion(version1,version2));