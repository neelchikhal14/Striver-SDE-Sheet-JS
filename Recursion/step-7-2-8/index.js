// https://practice.geeksforgeeks.org/problems/subset-sums2234/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=subset-sums

class Solution {
  subsetSums(arr, n) {
    //code here

    const sum = 0,
      index = 0,
      sumArray = [];

    function helper(sum, index, sumArray) {
      // base case
      if (index >= n) {
        return sumArray.push(sum);
      }

      // pick
      sum += arr[index];
      helper(sum, index + 1, sumArray);
      // reduce sum for backtracking
      sum -= arr[index];
      // dont pick
      helper(sum, index + 1, sumArray);
    }

    helper(sum, index, sumArray);

    // sort the array in increasing order
    sumArray.sort((a, b) => a - b);
    return sumArray;
  }
}

const theSum = new Solution();

theSum.subsetSums([1, 2, 5], 3);
