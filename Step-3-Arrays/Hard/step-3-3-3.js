// 15. 3Sum
// see neetcode explanation

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const numsLen = nums.length;
  const result = [];
  // sort the input array
  nums.sort((a, b) => a - b);

  for (let i = 0; i < numsLen; i++) {
    if (nums[i] === nums[i - 1] && i > 0) continue;

    let leftPtr = i + 1,
      rightPtr = numsLen - 1;

    while (leftPtr < rightPtr) {
      if (nums[i] + nums[leftPtr] + nums[rightPtr] < 0) {
        leftPtr++;
      } else if (nums[i] + nums[leftPtr] + nums[rightPtr] > 0) {
        rightPtr--;
      } else {
        result.push([nums[i], nums[leftPtr], nums[rightPtr]]);
        // it will go in infinite loop if you dont do this
        leftPtr++;
        while (nums[leftPtr] === nums[leftPtr - 1] && leftPtr < rightPtr) {
          leftPtr++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
