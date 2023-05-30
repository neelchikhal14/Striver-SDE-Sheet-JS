// leetcode.com/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let theArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let idx = 0,
    allSubsets = [],
    current = [],
    target = n;

  function helper(theArray, idx, allSubsets, current, target) {
    // back tracking
    if (target < 0) return;

    // base case
    if (current.length === k) {
      if (target === 0) {
        allSubsets.push([...current]);
      }
      return;
    }

    // recusrion
    for (let i = idx; i < theArray.length; i++) {
      current.push(theArray[i]);
      helper(theArray, i + 1, allSubsets, current, target - theArray[i]);
      current.pop();
    }
  }
  helper(theArray, idx, allSubsets, current, target);

  return allSubsets;
};

console.log(combinationSum3(3, 7));
