function subsets(nums: number[]): number[][] {
    const resArr:number[][] = [];

    const len:number = nums.length;

    function dfs(start:number,path:number[]) {
        if (path.length <= len) {
            resArr.push(path.slice())
        }
        if (path.length > len) {
            return
        }

        for (let i = start; i < nums.length; i++) {
            const element = nums[i];
            path.push(element)
            dfs(i + 1,path)
            path.pop()
        }
    }

    dfs(0,[])

    return resArr;
};

console.log(subsets([1,2,3]))