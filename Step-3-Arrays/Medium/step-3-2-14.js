// 560. Subarray Sum Equals K
// https://www.youtube.com/watch?v=fFVZt-6sgyo&t=24s

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0,
    sum = 0;

  const refMap = new Map();
  // map of prefixSum -- count
  refMap.set(0, 1);

  const numsLen = nums.length;

  for (let i = 0; i < numsLen; i++) {
    //calculate sum
    sum += nums[i];
    if (refMap.has(sum - k)) {
      //   console.log(refMap.get(sum));
      result = result + refMap.get(sum - k);
    }

    if (refMap.has(sum)) {
      const currentVal = refMap.get(sum);
      refMap.set(sum, currentVal + 1);
    } else {
      refMap.set(sum, 1);
    }
  }

  return result;
};

console.log(subarraySum([1, 1, 1], 2));
