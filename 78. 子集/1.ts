function subsets(nums: number[]): number[][] {
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

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1,path)
            path.pop()
        }
    }
    dfs(0,[])
    return resArr;
};

console.log(subsets([1,2,3]))