// 56. Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const intervalsLen = intervals.length;
  const final = [];
  const current = [];
  intervals.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    else if (a[0] < b[0]) return -1;
    else {
      if (a[1] > b[1]) return 1;
      else if (a[1] < b[1]) return -1;
      else return 0;
    }
  });

  for (let i = 0; i < intervalsLen; i++) {
    let start = intervals[i][0],
      end = intervals[i][1];
    if (final.length > 0 && end < final[intervalsLen][1]) {
      continue;
    }
    for (j = i + 1; j < intervalsLen; j++) {
      if (intervals[j][0] <= end) {
        end = Math.max(end, intervals[j][1]);
      } else {
        break;
      }
    }
    final.push([start, end]);
  }
};

console.log(
  merge([
    [1, 3],
    [15, 18],
    [8, 10],
    [8, 9],
    [2, 6],
  ])
);
