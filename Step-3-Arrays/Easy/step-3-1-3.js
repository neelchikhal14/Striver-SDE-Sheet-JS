// 1752. Check if Array Is Sorted and Rotated
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const numsLen = nums.length;
  let pivotIdx = -1;
  // finding the pivot
  for (let i = 0; i < numsLen; i++) {
    if (nums[i + 1] && nums[i] - nums[i + 1] > 0) {
      pivotIdx = i + 1;
      break;
    }
  }
  if (pivotIdx === -1) return false;

  // rotating the array wrt to pivot index

  let leftPtr = -1,
    rightPtr = -1;
  // reverse last "d" positions
  leftPtr = pivotIdx;
  rightPtr = nums.length;

  while (leftPtr < rightPtr) {
    let temp = nums[rightPtr];
    nums[rightPtr] = nums[leftPtr];
    nums[leftPtr] = temp;
    leftPtr++;
    rightPtr--;
  }
  // reverse first (n-d) positions
  leftPtr = 0;
  rightPtr = pivotIdx - 1;
  while (leftPtr < rightPtr) {
    let temp = nums[rightPtr];
    nums[rightPtr] = nums[leftPtr];
    nums[leftPtr] = temp;
    leftPtr++;
    rightPtr--;
  }

  //reverse the entire array
  leftPtr = 0;
  rightPtr = numsLen - 1;
  while (leftPtr < rightPtr) {
    let temp = nums[rightPtr];
    nums[rightPtr] = nums[leftPtr];
    nums[leftPtr] = temp;
    leftPtr++;
    rightPtr--;
  }
};
