// 73. Set Matrix Zeroes
// https://takeuforward.org/data-structure/set-matrix-zero/
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let temp = 1;
  // traverse thru the matrix and mark reference cols as 0 whose value is 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        // mark ith row as 0
        matrix[i][0] = 0;
        // mark jth col as 0
        if (j !== 0) matrix[0][j] = 0;
        else temp = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if ((matrix[i][0] === 0 || matrix[0][j] === 0) && matrix[i][j] !== 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  if (temp === 0) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
