// 229. Majority Element II
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const numsLen = nums.length;

  let ctr1 = 0,
    ctr2 = 0,
    ele1 = Infinity,
    ele2 = Infinity;

  for (let i = 0; i < numsLen; i++) {
    if (ctr1 === 0 && ele2 !== nums[i]) {
      ele1 = nums[i];
      ctr1 = 1;
    } else if (ctr2 === 0 && ele1 !== nums[i]) {
      ele2 = nums[i];
      ctr2 = 1;
    } else if (ele1 === nums[i]) {
      ctr1++;
    } else if (ele2 === nums[i]) {
      ctr2++;
    } else {
      ctr1--;
      ctr2--;
    }
  }
  ctr1 = 0;
  ctr2 = 0;
  for (let i = 0; i < numsLen; i++) {
    if (nums[i] === ele1) ctr1++;
    else if (nums[i] === ele2) ctr2++;
  }

  const min = Math.floor(numsLen / 3);
  const result = [];
  if (ctr1 > min) result.push(ele1);
  if (ctr2 > min) result.push(ele2);

  return result;
};
