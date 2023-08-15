// Kadane’s Algorithm : Maximum Subarray Sum in an Array
// 53. Maximum Subarray
//Maximum Subarray and its sum
// Refer strivers video on Kandane

var maxSubArray = function (nums) {
  const numsLen = nums.length;
  let max = -Infinity,
    currentSum = 0;

  for (let i = 0; i < numsLen; i++) {
    // add current item to sum
    currentSum += nums[i];
    // compare currentSum and max
    if (currentSum > max) {
      max = currentSum;
    }
    //if currentSUm is negative , make currentSUm as 0
    if (currentSum < 0) currentSum = 0;
  }

  return max;
};
