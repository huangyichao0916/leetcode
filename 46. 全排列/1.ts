var permute = function(nums:Array<number>):Array<Array<number>> {
    let myLen:number = nums.length;
    let res:Array<Array<number>> = []
    function backTrack(nums:Array<number>,path:Array<number> = []) {
        if (path.length === myLen) {
            res.push([...path]);
        }
        // for (const n of nums) {
        //     path.push(n);
        //     backTrack(nums,path);
        //     path.pop();
        // }
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i])
            let copyNums:Array<number> = [...nums];
            copyNums.splice(i,1);
            backTrack(copyNums,path);
            path.pop();
        }
    }
    backTrack(nums)

    return res;
};

console.log(permute([1,2,3]))