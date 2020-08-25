function singleNumber(nums: number[]): number {
    nums.sort((a:number,b:number) => a - b);
    let i:number = 0;
    while ((i + 2) < nums.length) {
        const arr:number[] = nums.slice(i , i+3);
        if (arr[0] === arr[1] && arr[1] === arr[2]) {
            i = i + 3;
            continue;
        }else{
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};

const nums = [9,1,7,9,7,9,7]
console.log(singleNumber(nums))