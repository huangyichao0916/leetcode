function combinationSum2(candidates, target) {
    const resArr = [];
    candidates = candidates.sort((a,b) => a - b)
    console.log(candidates)

    let sum = 0;
    function dfs(start,path) {
        console.log(path)
        if (sum >= target) {
            if (sum === target) {
                resArr.push(path.slice())
                return;
            }else{
                return;
            }
        }
        
        const obj = {};
        // const arr = start > 1 ? candidates.slice(0,start - 1) : []

        for (let i = start; i < candidates.length; i++) {
            if (obj[candidates[i]]) {
                continue;
            }
            // if (arr.findIndex(item => item === candidates[i]) != -1) {
            //     continue;
            // }
            obj[candidates[i]] = true
            path.push(candidates[i]);
            sum += candidates[i];
            dfs(i+1,path);
            path.pop();
            sum -= candidates[i];
        }
    }
    dfs(0,[])

    return resArr;
};

const testArr = [3,1,3,5,1,1]
const target = 8;

console.log(combinationSum2(testArr,target))