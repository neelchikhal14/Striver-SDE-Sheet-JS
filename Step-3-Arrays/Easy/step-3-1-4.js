// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/#:~:text=Input%3A%20nums%20%3D%20%5B0%2C,%2C%203%2C%20and%204%20respectively.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const numsLen = nums.length;

  let ptr1 = 0,
    ptr2 = 1;

  while (ptr2 <= numsLen - 1) {
    if (nums[ptr1] === nums[ptr2]) ptr2++;
    else {
      ptr1++;
      nums[ptr1] = nums[ptr2];
      ptr2++;
    }
  }
  return ptr1 + 1;
};

console.log(removeDuplicates([1, 1, 2]));
