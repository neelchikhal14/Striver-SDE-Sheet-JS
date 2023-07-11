//,Second Largest
// https://practice.geeksforgeeks.org/problems/second-largest3735/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=second-largest
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  print2largest(arr) {
    //code here

    let largest = -Number.MAX_SAFE_INTEGER,
      secondLargest = -Number.MAX_SAFE_INTEGER + 1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && largest !== arr[i]) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
}

const sol = new Solution();

sol.print2largest([
  28, 43, 26, 65, 60, 54, 51, 35, 42, 48, 33, 40, 58, 38, 64, 47, 44, 49, 46,
  25, 57, 39, 55, 45, 29, 32, 61, 53, 31, 36, 56, 63, 30, 52, 27, 34, 50, 41,
  37, 66, 62, 59,
]);
