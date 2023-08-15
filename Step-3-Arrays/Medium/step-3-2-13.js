// 54. Spiral Matrix
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const final = [];

  let left = 0,
    right = cols - 1,
    top = 0,
    bottom = rows - 1;

  while (top <= bottom && left <= right) {
    // left -> right
    for (let i = left; i <= right; i++) {
      final.push(matrix[top][i]);
    }
    top++;

    //top to bottom
    for (let i = top; i <= bottom; i++) {
      final.push(matrix[i][right]);
    }
    right--;
    //right to left
    if (top <= bottom && left <= right) {
      for (let i = right; i >= left; i--) {
        final.push(matrix[bottom][i]);
      }
      bottom--;
    }
    //bottom to top
    if (top <= bottom && left <= right) {
      for (let i = bottom; i >= top; i--) {
        final.push(matrix[i][left]);
      }
      left++;
    }
  }

  return final;
};
