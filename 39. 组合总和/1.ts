function combinationSum(candidates: number[], target: number): number[][] {
    let res:number[][] = [];
    // function sum(n:number[]):number {
    //     let res:number = 0;
    //     for (let i = 0; i < n.length; i++) {
    //         res += n[i];
    //     }
    //     return res;
    // }
    let sumNow:number = 0;

    function helper(start:number,nums:number[],path:number[]) {
        // console.log(path)
        if (sumNow === target) {
            res.push([...path]);
            return;
        }
        if (sumNow > target) {
            return;
        }
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            sumNow += nums[i];
            // const copyNums:number[] = [...nums];
            // copyNums.splice(i,1);
            // helper(copyNums,path);
            helper(i,nums,path);
            path.pop();
            sumNow -= nums[i];
        }
    }
    helper(0,candidates,[])

    return res;
};
// combinationSum([2,3,6,7],7)
console.log(combinationSum([2,3,6,7],7))