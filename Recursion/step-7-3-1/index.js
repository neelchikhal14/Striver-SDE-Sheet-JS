// https://leetcode.com/problems/palindrome-partitioning/
// https://www.youtube.com/watch?v=WBgsABoClE0&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=52
/**
 * @param {string} s
 * @return {string[][]}
 */

function checkPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }

  return true;
}
var partition = function (s) {
  let idx = 0,
    strLen = s.length,
    temp = [],
    final = [];

  function helper(s, idx) {
    // base case
    if (idx === strLen) {
      final.push(temp.slice());
      return;
    }

    // dfs case -- partition
    for (let i = idx; i < strLen; i++) {
      // check if left half is palindrome
      if (checkPalindrome(s, idx, i)) {
        // add left half , which is palidrome to final
        temp.push(s.slice(idx, i + 1));
        // call the recursive functiongit log --oneline --decorate --graph --allz
        helper(s, i + 1);
        temp.pop();
      }
    }
  }

  helper(s, idx);

  return final;
};

console.log(partition("aabb"));
