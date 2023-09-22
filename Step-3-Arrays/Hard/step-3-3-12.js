// 152. Maximum Product Subarray
// Refer - https://www.youtube.com/watch?v=tHNsZHXnYd4&t=689s

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let ans = nums[0],
    min = nums[0],
    max = nums[0];

  const numsLen = nums.length;

  function swap(num1, num2) {}

  for (let i = 1; i < numsLen; i++) {
    // swap if a negative number
    if (nums[i] < 0) {
      let temp = max;
      max = num2;
      min = temp;
    }
    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);

    ans = Math.max(ans, max);
  }
  return ans;
};

console.log(maxProduct([-2, 3, -4]));
