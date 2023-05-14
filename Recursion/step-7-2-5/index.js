// Check if there exists a subsequence with sum K

// We will use some optimizations here , If any recusrive call finds that the given sum exists sunsequent recursion calls will not take place

// SImilar to
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
      if (currentSum === sum) {
        return true;
      }
      return false;
    }
    // include
    currentSum += arr[index];
    if (helper(arr, n, sum, currentSum, index + 1) === true) {
      return true;
    }
    // revert for backtracking
    currentSum -= arr[index];
    //exclude
    if (helper(arr, n, sum, currentSum, index + 1) == true) {
      return true;
    }

    // if sum does not exists
    return false;
  }

  const result = helper(arr, n, sum, totalCount, currentSum, index);
  return result;
}

console.log(perfectSum([1, 2], 2, 4));
