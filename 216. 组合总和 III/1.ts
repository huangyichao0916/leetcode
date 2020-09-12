function combinationSum3(k: number, n: number): number[][] {
    const res:number[][] = [];

    const baseNums:number[] = [1,2,3,4,5,6,7,8,9];
    let sum:number = 0;
    function dfs(start:number,nums:number[],path:number[]) {
        if (path.length === 0 && start + k > nums.length) {
            return;
        }
        if (path.length) {
            if (sum > n) {
                return;
            }
            if (path.length === k) {
                if (sum === n) {
                    res.push(path.slice())
                    return;
                }
                return;
            }
        }

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            sum += nums[i]
            dfs(i + 1,nums,path)
            path.pop()
            sum -= nums[i]
        }
    }
    dfs(0,baseNums,[])
    return res;
};

console.log(combinationSum3(3,15))