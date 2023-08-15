// Longest Consecutive Sequence in an Array

// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let maxConsecutive = 1;

  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i] - 1)) continue;
    let nextValue = nums[i] + 1;
    let currentMax = 1;
    while (numsSet.has(nextValue) && i < nums.length) {
      currentMax += 1;
      nextValue = nums[i] + 1;
      i++;
    }
    if (currentMax > maxConsecutive) maxConsecutive = currentMax;
  }
  return maxConsecutive;
};

console.log(longestConsecutive([3, 8, 5, 7, 6]));
