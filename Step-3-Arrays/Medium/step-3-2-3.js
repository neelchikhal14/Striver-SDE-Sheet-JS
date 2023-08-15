// 169. Majority Element
//leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ele = -1,
    count = 0;
  const numsLen = nums.length;

  // apply moore's voting algorithm
  for (let i = 0; i < numsLen; i++) {
    if (count === 0) {
      ele = nums[i];
      count++;
    } else if (nums[i] === ele) {
      count++;
    } else count--;
  }
  let majorityElementCount = 0;
  // calculate number of tuimes majority element occured
  for (let i = 0; i < numsLen; i++) {
    if (nums[i] === ele) majorityElementCount++;
  }

  return ele;
};
