function intersect(nums1: number[], nums2: number[]): number[] {
    let obj:any = {};
    for (const item of nums1) {
        if (obj[item]) {
            obj[item] ++;
        }else{
            obj[item] = 1;
        }
    }
    let res:Array<number> = [];
    for (const item2 of nums2) {
        if (obj[item2]) {
            res.push(item2);
            if (obj[item2] > 0) {
                obj[item2] --;
            }
        }
    }
    return res;
};

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4]

console.log(intersect(nums1,nums2))