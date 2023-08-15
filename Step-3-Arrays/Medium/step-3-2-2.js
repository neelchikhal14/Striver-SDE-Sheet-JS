// Sort an array of 0s, 1s and 2s
// Dutch National Flag Problem
// 75. Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      // swap low and mid
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;

      // increase low and mid
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // swap mid and high
      // swap low and mid
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;

      // decrease high
      high--;
    }
  }
};
