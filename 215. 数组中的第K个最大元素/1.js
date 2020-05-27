/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let partition = function (myNums, left, right) {
        // console.log('partition')
        if (left >= right) {
            return[];
        }
        let [myLeft, myRight] = [left, right];
        let standardNum = myNums[left];
        while (left < right) {
            //右指针开始工作
            while (myNums[right] <= standardNum && left < right) {
                right--;
            }
            myNums[left] = myNums[right];

            //左指针开始工作
            while (myNums[left] >= standardNum && left < right) {
                left++;
            }
            myNums[right] = myNums[left];
        }
        myNums[left] = standardNum;
        return [left, myLeft, myRight];
    }

    let boundary = [0, nums.length-1];
    let index;
    while (true) {
        let arr = partition(nums, ...boundary);
        console.log(arr);
        index = arr[0];
        if (k < index + 1) {
            boundary = [arr[1] , index - 1];
        }else if (k = index + 1) {
            k = nums[index];
            break;
        }else{
            boundary = [index + 1 , arr[2]];
        }
    }
    return k;
};
let testArr = [3,2,1,5,6,4]
let testK = 2
console.log(findKthLargest(testArr , testK));

// 6 5 4 3 2 1