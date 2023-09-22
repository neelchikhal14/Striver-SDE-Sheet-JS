// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;
  let ptr1 = m - 1,
    ptr2 = n - 1;

  while (ptr1 >= 0 && ptr2 >= 0) {
    if (nums2[ptr2] > nums1[ptr1]) {
      nums1[last] = nums2[ptr2];
      ptr2--;
    } else {
      nums1[last] = nums1[ptr1];
      ptr1--;
    }
    last--;
  }
  // if nums1 ptr is not reached
  while (ptr1 >= 0) {
    nums1[last] = nums1[ptr1];
    ptr1--;
    last--;
  }
  // if nums2 ptr is not reached
  while (ptr2 >= 0) {
    nums1[last] = nums2[ptr2];
    ptr2--;
    last--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
