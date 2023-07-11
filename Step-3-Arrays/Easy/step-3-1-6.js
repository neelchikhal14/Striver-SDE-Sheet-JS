// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const numsLen = nums.length;
  if (numsLen === 1) return nums;
  let leftPtr = -1,
    rightPtr = -1;

  // place right and left ptr to correct location
  for (let i = 0; i < numsLen; i++) {
    if (nums[i] === 0) {
      leftPtr = i;
      break;
    }
  }
  // if there are no zeros
  if (leftPtr === -1) return nums;
  rightPtr = leftPtr + 1;

  for (let j = rightPtr; j < numsLen; j++) {
    if (nums[j] !== 0) {
      let temp = nums[j];
      nums[j] = nums[leftPtr];
      nums[leftPtr] = temp;

      leftPtr++;
    }
  }

  return nums;
};
