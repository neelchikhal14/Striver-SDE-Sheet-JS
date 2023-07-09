// divide and merge approach

function mSort(arr) {
  let start = 0,
    end = arr.length;

  function merge(arr, start, mid, end) {
    let leftPtr = start,
      rightPtr = mid + 1;

    let resultantArray = [];

    while (leftPtr <= mid && rightPtr <= end) {
      if (arr[leftPtr] <= arr[rightPtr]) {
        resultantArray.push(arr[leftPtr]);
        leftPtr++;
      } else {
        resultantArray.push(arr[rightPtr]);
        rightPtr++;
      }
    }

    // add elements from left array if remaining
    while (leftPtr <= mid) resultantArray.push(arr[leftPtr++]);

    // add elements from right array if remaining
    while (rightPtr <= end) resultantArray.push(arr[rightPtr++]);

    // place temp array into original array
    for (let i = start; i <= end; i++) {
      arr[i] = resultantArray[i - start];
    }
  }

  function mergeSort(arr, start, end) {
    // base case
    if (start >= end) return;
    //calculate mid
    let mid = Math.floor((start + end) / 2);

    // perform merge sort on left array
    mergeSort(arr, start, mid);
    // perform mergesort on right array
    mergeSort(arr, mid + 1, end);

    //merge left and right array
    merge(arr, start, mid, end);
  }

  mergeSort(arr, start, end - 1);
  return arr;
}

let a = [10, -3, -5];

mSort(a);

console.log(a);
