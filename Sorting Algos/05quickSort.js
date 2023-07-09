// watch love babbar - explanation is good

function qSort(arr) {
  let start = 0,
    end = arr.length;

  function partition(arr, start, end) {
    // select pivot element
    let pivot = arr[start];

    // count the number of values greater than pivot
    let greaterPivotNumber = 0;
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] <= pivot) greaterPivotNumber++;
    }

    // get pivot index
    let pivotIndex = start + greaterPivotNumber;

    // put pivot to correct index swap pivotIndex and start
    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[start];
    arr[start] = temp;

    // on the left side of array all element should be less than pivot
    // on the right side of array all element should be greater than pivot

    let left = start,
      right = end;
    while (left < pivotIndex && right > pivotIndex) {
      while (arr[left] < pivot) left++; // value already smaller than pivot
      while (arr[right] > pivot) right--; // value already greater than pivot

      // swap - left is greater and right is smaller so we swap
      if (left < pivotIndex && right > pivotIndex) {
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;

        left++;
        right--;
      }
    }

    return pivotIndex;
  }

  function quickSort(arr, start, end) {
    // base case - if there's zero or one element in the array then its sorted
    if (start >= end) return;

    // make the partition
    let partitionIndex = partition(arr, start, end);

    // apply quick sort on left side
    quickSort(arr, start, partitionIndex - 1);

    // apply quick sort on right side
    quickSort(arr, partitionIndex + 1, end);
  }

  quickSort(arr, start, end - 1);
}

const theArray = [100, 90, 80, 0, -1, -2, -3];

qSort(theArray);

console.log(theArray);
