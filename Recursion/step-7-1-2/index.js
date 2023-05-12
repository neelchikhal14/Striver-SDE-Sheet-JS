/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function (x, n) {
  let tempN = n,
    result = 1;

  if (n < 0) {
    tempN = tempN * -1;
  }

  while (tempN > 0) {
    // odd power
    if (tempN % 2 === 1) {
      result = result * x;
      tempN = tempN - 1;
    } else {
      x = x * x;
      tempN /= 2;
    }
  }

  if (n < 0) {
    return 1 / result;
  } else return result;
};

console.log(myPow(5, 25));
