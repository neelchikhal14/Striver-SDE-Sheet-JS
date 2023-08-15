// 2149. Rearrange Array Elements by Sign
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const numsLen = nums.length;
  let evenPtr = 0,
    oddPtr = 1;
  const newArr = new Array(numsLen);

  for (let i = 0; i < numsLen; i++) {
    if (nums[i] >= 0) {
      newArr[evenPtr] = nums[i];
      evenPtr += 2;
    } else {
      newArr[oddPtr] = nums[i];
      oddPtr += 2;
    }
  }
  return newArr;
};
