function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a: number, b: number) => a - b);
    nums2.sort((a: number, b: number) => a - b);

    let point1: number = 0;
    let point2: number = 0;

    let res:Array<number> = [];

    while (point1 < nums1.length && point2 < nums2.length) {
        if (nums1[point1] > nums2[point2]) {
            point2 ++;
        }else if (nums1[point1] < nums2[point2]) {
            point1 ++;
        }else{
            res.push(nums2[point2])
            point2 ++;
            point1 ++;
        }
    }

    return res;
};