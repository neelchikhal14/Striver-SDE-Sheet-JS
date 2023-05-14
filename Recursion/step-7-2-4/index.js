// Perfect Sum Problem
// https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=perfect-sum-problem
// https://www.youtube.com/watch?v=eQCS_v3bw0Q&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=8

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} sum
 * @return {number}
 */

function perfectSum(arr, n, sum) {
  //code here

  let totalCount = 0,
    index = 0,
    currentSum = 0;

  function helper(arr, n, sum, currentSum, index) {
    // base case
    if (index >= n) {
      if (currentSum === 3) {
        console.log("I executed");
        totalCount++;
      }
      return;
    }
    // include
    currentSum += arr[index];
    helper(arr, n, sum, currentSum, index + 1);
    // revert for backtracking
    currentSum -= arr[index];
    //exclude
    helper(arr, n, sum, currentSum, index + 1);
  }

  helper(arr, n, sum, totalCount, currentSum, index);
  return totalCount;
}

console.log(perfectSum([1, 2], 2, 3));
