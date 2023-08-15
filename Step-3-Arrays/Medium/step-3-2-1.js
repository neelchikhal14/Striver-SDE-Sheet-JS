// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hashMap = new Map();
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[hashMap.get(target - nums[i])] === target - nums[i]) {
      final.push(hashMap.get(target - nums[i]));
      final.push(i);
      break;
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return final;
};

console.log(twoSum([2, 7, 11, 15], 9));
