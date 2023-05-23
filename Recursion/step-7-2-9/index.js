// https://practice.geeksforgeeks.org/problems/subset-sum-ii/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=subset-sum-ii

function uniqueSubsets(arr, n) {
  //code here

  const sum = 0,
    index = 0,
    subsets = [],
    currentSubset = [];

  function helper(index, subsets, currentSubset) {
    // base case
    if (index >= n) {
      return subsets.push([...currentSubset]);
    }

    // pick
    if (arr[index] && arr[index] !== arr[index - 1]) {
      currentSubset.push(arr[index]);
      helper(index + 1, subsets, currentSubset);
    }
    currentSubset.pop();
    helper(index + 1, subsets, currentSubset);
  }

  helper(index, subsets, currentSubset);

  console.log(subsets);
}

uniqueSubsets([1, 2, 2], 3);
