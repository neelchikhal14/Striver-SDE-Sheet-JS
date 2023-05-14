// 78. Subsets
// https://leetcode.com/problems/subsets/description/
// https://www.youtube.com/watch?v=V0IgCltYgg4

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let index = 0,
    result = [],
    numsLength = nums.length,
    temp = [];

  function helper(index, result, temp, nums, numsLength) {
    //base case
    if (index >= numsLength) {
      return result.push([...temp]);
    }

    // exclude
    helper(index + 1, result, temp, nums, numsLength);

    //include
    temp.push(nums[index]);
    helper(index + 1, result, temp, nums, numsLength);
    // cleanup for back tracking
    temp.pop();
  }

  helper(index, result, temp, nums, numsLength);

  return result;
};

console.log(subsets([1, 2]));
