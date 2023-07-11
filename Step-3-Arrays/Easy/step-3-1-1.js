// https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array
// Largest Element in Array

//User function Template for javascript

class Solution {
  largest(arr, n) {
    // write your code here
    let currentMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= currentMax) {
        currentMax = arr[i];
      }
    }
    return currentMax;
  }
}
