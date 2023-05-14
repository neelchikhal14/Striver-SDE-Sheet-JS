// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
// https://www.youtube.com/watch?v=OyZFFqQtu98&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=50

var combinationSum = function (candidates, target) {
  let result = [],
    tempTarget = target,
    index = 0,
    candidatesLength = candidates.length,
    tempCandidates = [];

  function helper(tempTarget, index, candidatesLength, tempCandidates) {
    // base case
    if (index >= candidatesLength) {
      if (tempTarget === 0) {
        result.push([...tempCandidates]);
      }
      return;
    }

    // pick same element
    if (candidates[index] <= tempTarget) {
      tempCandidates.push(candidates[index]);
      helper(
        tempTarget - candidates[index],
        index,
        candidatesLength,
        tempCandidates
      );
      tempCandidates.pop();
    }
    //pick next element

    helper(tempTarget, index + 1, candidatesLength, tempCandidates);
  }

  helper(tempTarget, index, candidatesLength, tempCandidates);

  return result;
};

console.log(combinationSum([2, 3], 5));
