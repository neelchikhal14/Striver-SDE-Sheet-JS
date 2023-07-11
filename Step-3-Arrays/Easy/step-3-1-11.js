// 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    currentMax = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax += 1;
    } else {
      // reset currentMax
      currentMax = 0;
    }

    if (currentMax >= max) {
      max = currentMax;
    }
  }
  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));
