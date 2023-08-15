/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
  lenOfLongSubarr(arr, n, k) {
    //code here

    let maxLength = 0,
      idx = 0,
      currentSum = 0,
      temp = [];

    function helper(arr, idx, currentSum, arrLen, temp) {
      // base case
      if (idx >= arrLen) {
        if (currentSum === k) {
          if (temp.length >= maxLength) {
            console.log(temp, currentSum);
            maxLength = temp.length;
          }
        }

        return;
      }

      // add the element
      temp.push(arr[idx]);
      // increase the sum
      currentSum += arr[idx];
      // next recursive call include
      helper(arr, idx + 1, currentSum, arrLen, temp);
      // backtracking
      currentSum -= arr[idx];
      temp.pop();
      //exclude
      helper(arr, idx + 1, currentSum, arrLen, temp);
    }
    helper(arr, idx, currentSum, n, temp);

    return maxLength;
  }
}

const sol = new Solution();

console.log(
  sol.lenOfLongSubarr([-7, -11, -3, -7, 4, 15, -13, 18, -10, -10], 10, 23)
);
