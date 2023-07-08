// In bubble sort at the end of each round we will have highest element at its correct place

function bubbleSort(arr) {
  const arrLen = arr.length;

  for (let i = arrLen - 1; i >= 0; i--) {
    for (j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        // perform swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const myArray = [-1, 10, 4, 9, -100];

bubbleSort(myArray);

console.log(myArray);
