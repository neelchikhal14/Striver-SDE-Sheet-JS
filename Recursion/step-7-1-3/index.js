// https://leetcode.com/problems/count-good-numbers/
// 1922. Count Good Numbers

function pow(x, n) {
  let result = 1n,
    tempN = n;
  // if n is negative
  if (n < 0) tempN = tempN * -1;

  while (tempN > 0) {
    //check even or odd
    if (tempN % 2 === 1) {
      result = x * result;
      tempN = tempN - 1;
    } else {
      x = x * x;
      tempN = tempN / 2;
    }
  }

  // if n was negative
  if (n < 0) return BigInt(1 / result);

  return BigInt(result);
}
/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  let totalOddPlaces = 0n;
  let totalEvenPlaces = 0n;

  if (n % 2 == 0) {
    totalEvenPlaces = n / 2;
    totalOddPlaces = n / 2;
  } else {
    totalOddPlaces = Math.floor((n - 1) / 2);
    totalEvenPlaces = Math.floor((n - 1) / 2) + 1;
  }

  return (pow(4n, totalOddPlaces) * pow(5n, totalEvenPlaces)) % 1000000007n;
};

console.log(countGoodNumbers(50));
