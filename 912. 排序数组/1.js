/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let partition = function (nums, left, right) {
        if (left >= right) {
            return;
        }
        let [myLeft, myRight] = [left, right];
        let standardNum = nums[left];
        while (left < right) {
            //右指针开始工作
            while (nums[right] >= standardNum && left < right) {
                right--;
            }
            nums[left] = nums[right];

            //左指针开始工作
            while (nums[left] <= standardNum && left < right) {
                left++;
            }
            nums[right] = nums[left];
        }
        nums[left] = standardNum;

        partition(nums, myLeft, left - 1);
        partition(nums, left + 1, myRight);
    }
    partition(nums,0,nums.length - 1)
    return nums;
};