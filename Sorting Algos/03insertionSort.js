function insertionSort(arr) {
  const arrLen = arr.length;

  for (let i = 0; i < arrLen; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      //swaap
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;

      j--;
    }
  }
}

const myArray = [-1, 10, 4, 9, -100];

insertionSort(myArray);

console.log(myArray);
