// https://leetcode.com/problems/subsets-ii/

//https://www.youtube.com/watch?v=RIn3gOkbhQE&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=55

var subsetsWithoutDup = function (nums) {
  const final = [],
    temp = [],
    numsLen = nums.length,
    idx = 0;

  //sort the array
  nums.sort((a, b) => a - b);

  function helper(final, temp, numsLen, idx) {
    final.push([...temp]);
    for (let i = idx; i < numsLen; i++) {
      // do not pick element
      if (idx !== i && nums[i] === nums[i - 1]) continue;
      // pick the element
      temp.push(nums[i]);
      // loop in at same level
      helper(final, temp, numsLen, i + 1);
      // backtracking
      temp.pop();
    }
  }

  helper(final, temp, numsLen, idx);
  return final;
};

console.log(subsetsWithoutDup([2, 2, 1]));
