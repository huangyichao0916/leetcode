class Solution {
    nums: Array<number>;
    originalNums: Array<number>;
    constructor(nums: number[]) {
        this.nums = nums;
        this.originalNums = [...nums];
    }

    reset(): number[] {
        this.nums = [...this.originalNums]
        return this.nums;
    }

    shuffle(): number[] {
        const len:number = this.nums.length;
        for (let i = 0; i < len - 1; i++) {
            const randomNum:number = Math.floor(Math.random()*(len - i) + i);
            [this.nums[i],this.nums[randomNum]] = [this.nums[randomNum],this.nums[i]];
        }
        return this.nums;
    }
}

let obj:Solution = new Solution([1,2,3,4,5]);
let arr = [0,0,0,0,0];
for (let i = 0; i < 1000; i++) {
    let [a,b,c,d,e] = obj.shuffle();
    let ooo:Array<number> = [a,b,c,d,e];
    for (let j = 0; j < arr.length; j++) {
        arr[j] += ooo[j];
    }
    obj.reset();
}
console.log(arr)