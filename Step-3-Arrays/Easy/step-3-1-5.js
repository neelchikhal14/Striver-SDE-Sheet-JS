// 189. Rotate Array

// rotating right
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const numsLen = nums.length;

  if (numsLen === 1) return nums;

  function reverse(start, end, arr) {
    while (start <= end) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;

      start++;
      end--;
    }
  }

  // reverse last k positions
  reverse(numsLen - k, numsLen - 1, nums);
  // reverse first k positions
  reverse(0, numsLen - k - 1, nums);
  // reverse entire array
  reverse(0, numsLen - 1, nums);
};

const theArray = [-1];

rotate(theArray, 3);

console.log(theArray);
