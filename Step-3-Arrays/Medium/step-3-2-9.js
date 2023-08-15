// Leaders in an array
// GFG

function leaders(arr, n) {
  // code here
  let ans = [],
    maxi = -Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxi) {
      ans.push(arr[i]);
      // keep track of maximum on right
      maxi = arr[i];
    }
  }
  ans.sort((a, b) => {
    if (a - b > 0) return -1;
    else if (a - b < 0) return 1;
    else return 0;
  });
  return ans;
}
