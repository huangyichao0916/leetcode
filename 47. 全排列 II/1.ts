function permuteUnique(nums: number[]): number[][] {
    const resArr:number[][] = [];
    const len = nums.length

    function dfs(n:number[],path:number[]) {
        console.log(path)
        if (path.length === len) {
            resArr.push(path.slice())
            return;
        }

        const obj:any = {};

        for (let i = 0; i < n.length; i++) {
            if (obj[n[i]]) {
                // console.log(path)
                continue;
            }
            obj[n[i]] = true
            path.push(n[i])
            const copyN:number[] = [...n]
            copyN.splice(i,1)
            dfs(copyN,path)
            path.pop()
        }
    }

    dfs(nums,[])

    return resArr;
};

const testArr:number[] = [1,1,2];
console.log(permuteUnique(testArr))