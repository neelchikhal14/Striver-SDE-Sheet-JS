// 48. Rotate Image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // exchange rows and cols
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i !== j && i < j) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }

  // reverse every row
  for (let i = 0; i < rows; i++) {
    let leftPtr = 0,
      rightPtr = matrix[i].length - 1;

    while (leftPtr < rightPtr) {
      let temp = 0;
      temp = matrix[i][leftPtr];
      matrix[i][leftPtr] = matrix[i][rightPtr];
      matrix[i][rightPtr] = temp;
      leftPtr++;
      rightPtr--;
    }
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
