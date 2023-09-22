// 18. 4Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const numsLen = nums.length;
  const quad = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < numsLen; i++) {
    for (let j = i + 1; j < numsLen; j++) {
      let leftPtr = j + 1,
        rightPtr = numsLen - 1;

      while (leftPtr < rightPtr) {
        if (nums[i] + nums[j] + nums[leftPtr] + nums[rightPtr] > target) {
          rightPtr--;
        } else if (
          nums[i] + nums[j] + nums[leftPtr] + nums[rightPtr] <
          target
        ) {
          leftPtr++;
        } else {
          quad.push([nums[i], nums[j], nums[leftPtr], nums[rightPtr]]);
          while (nums[leftPtr] === nums[leftPtr - 1] && leftPtr < rightPtr) {
            leftPtr++;
          }
          while (
            nums[rightPtr] === nums[rightPtr + 1] &&
            leftPtr < rightPtr &&
            rightPtr < numsLen - 1
          ) {
            rightPtr--;
          }
        }
      }
      // move ahead j for duplicates
      while (nums[j] === nums[j - 1] && j + 1 < numsLen) {
        j++;
      }
    }

    // move ahead i for duplicates
    while (nums[i] === nums[i - 1] && i + 1 < numsLen) {
      i++;
    }
  }
  return quad;
};

console.log(fourSum([2, 2, 2, 2, 2], 8));
