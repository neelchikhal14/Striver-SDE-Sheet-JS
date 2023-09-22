// Longest Subarray With Zero Sum
// https://www.codingninjas.com/studio/problems/longest-subarray-with-zero-sum_6783450?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf
// Striver

function getLongestZeroSumSubarrayLength(nums) {
  const numsLen = nums.length;
  const prefixSumIdxMap = new Map();
  let summation = 0,
    maxLen = 0;
  for (let i = 0; i < numsLen; i++) {
    summation += nums[i];

    if (summation === 0) {
      maxLen = i + 1;
    } else {
      if (prefixSumIdxMap.has(summation)) {
        let tempLen = prefixSumIdxMap.get(summation) - i;
        if (tempLen > maxLen) {
          maxLen = tempLen;
        }
      } else {
        prefixSumIdxMap.set(summation, i);
      }
    }
  }
  return maxLen;
}

console.log(getLongestZeroSumSubarrayLength([1, 0, -1, 1, -1, -1, 1, 1, -1]));
