function countNumbersWithUniqueDigits(n: number): number {
    let res:number = 0;

    const baseNums:number[] = [0,1,2,3,4,5,6,7,8,9];

    function dfs(nums:number[],path:number[]) {
        if (path.length) {
            if (path[0] === 0) {
                return;
            }
            if (path.length < n) {
                res ++;
            }
            if (path.length === n) {
                res ++;
                return
            }
        }

        for (let i = 0; i < nums.length; i++) {
            const copyNums = [...nums];
            copyNums.splice(i,1);
            path.push(nums[i])
            dfs(copyNums,path);
            path.pop();
        }
    }
    dfs(baseNums,[])
    return res + 1;
};
console.log(countNumbersWithUniqueDigits(2))
