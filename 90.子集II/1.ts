function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a,b) => a - b)
    const resArr:number[][] = [];
    resArr.push([])

    function dfs(start:number,path:number[]) {
        if (path.length <= nums.length && path.length) {
            if (path.length === nums.length) {
                resArr.push(path.slice())
                return;
            }else{
                resArr.push(path.slice())
            }
        }
        const obj:any = {};
        for (let i = start; i < nums.length; i++) {
            if (obj[nums[i]]) {
                continue;
            }
            obj[nums[i]] = true;
            path.push(nums[i])
            dfs(i + 1,path)
            path.pop()
        }
    }
    dfs(0,[])
    return resArr;
};

console.log(subsetsWithDup([1,2,2]))