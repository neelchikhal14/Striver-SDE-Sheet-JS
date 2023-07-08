// Selection sort says find the minimum element and put it at its correct place

function selectionSort(arr) {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    // find minimum
    let minIdx = i;
    for (let j = i; j < arrLen; j++) {
      console.log("Comparing", arr[j], arr[i]);
      if (arr[j] <= arr[minIdx]) {
        minIdx = j;
      }

      // swap with min index
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  console.log("Sorted Array", arr);
}

selectionSort([2, 4, 1, 10, -1]);
