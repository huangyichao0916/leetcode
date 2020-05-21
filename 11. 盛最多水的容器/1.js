/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [leftPoint,rightPoint,area] = [0,height.length - 1,0];
    let maxArea = (rightPoint - leftPoint) * Math.min(height[leftPoint],height[rightPoint]);
    while (leftPoint !== rightPoint) {
        if (height[leftPoint] <= height[rightPoint]) {
            leftPoint++;
            if (height[leftPoint] <= height[leftPoint - 1]) {
                continue;
            }
            area = (rightPoint - leftPoint) * Math.min(height[leftPoint],height[rightPoint]);
            if (maxArea < area) {
                maxArea = area;
            }
        }else{
            rightPoint--;
            if (height[rightPoint] <= height[rightPoint + 1]) {
                continue;
            }
            area = (rightPoint - leftPoint) * Math.min(height[leftPoint],height[rightPoint]);
            if (maxArea < area) {
                maxArea = area;
            }
        }
    }
    return maxArea;
};

let testArray = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(testArray));