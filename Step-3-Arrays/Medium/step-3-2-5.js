// Longest Subarray With Sum K
// using Kadane's Algo

var maxSubArray = function (nums) {
  const numsLen = nums.length;
  let max = -Infinity,
    currentSum = 0;
  let startTemp = -1,
    start = -1,
    end = -1;

  for (let i = 0; i < numsLen; i++) {
    // if current sum is 0 then we are starting to build the array
    if (currentSum === 0) startTemp = i;
    // add current item to sum
    currentSum += nums[i];
    // compare currentSum and max
    if (currentSum > max) {
      max = currentSum;
      // when currentSum is greater than max we know we have got our end index
      start = startTemp;
      end = i;
    }
    //if currentSUm is negative , make currentSUm as 0
    if (currentSum < 0) currentSum = 0;
  }
  console.log(start, end, max);
};

maxSubArray([1, 2, -3, -5, 8, 9, 1, -1, 3, 4, 5]);
