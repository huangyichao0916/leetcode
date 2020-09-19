function combinationSum4(nums: number[], target: number): number {
    const arr:Array<number> = [1];
    for (let i = 1; i <= target; i++) {
        arr[i] = 0;
    }
    nums.sort((a,b) => a - b)
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            const element = nums[j];
            if (element > i) {
                break;
            }
            arr[i] += arr[i - element]
        }
    }
    console.log(arr)
    return arr[target];
};

console.log(combinationSum4([1, 2, 3],4))