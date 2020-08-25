function singleNumber(nums: number[]): number {
    let obj:any = {};
    for (const item of nums) {
        if (obj[item]) {
            obj[item] ++;
        }else{
            obj[item] = 1;
        }
    }
    for (const key in obj) {
        if (obj[key] === 1) {
            return parseInt(key);
        }
    }
};

const nums = [9,1,7,9,7,9,7]
console.log(singleNumber(nums))