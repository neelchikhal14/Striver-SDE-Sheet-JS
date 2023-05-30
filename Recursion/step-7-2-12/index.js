// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const numberMap = new Map();
  numberMap.set("2", "abc");
  numberMap.set("3", "def");
  numberMap.set("4", "ghi");
  numberMap.set("5", "jkl");
  numberMap.set("6", "mno");
  numberMap.set("7", "pqrs");
  numberMap.set("8", "tuv");
  numberMap.set("9", "wxyz");

  let tempCombos = [],
    final = [],
    idx = 0;
  const levelLength = digits.length;
  function helper() {
    // base case
    if (idx >= levelLength) {
      return final.push([...tempCombos].join(""));
    }

    const currentLevelLetters = numberMap.get(digits[idx]);

    for (let letter of currentLevelLetters) {
      tempCombos.push(letter);
      idx += 1;
      helper();
      idx -= 1;
      tempCombos.pop();
    }
  }

  helper();

  return final;
};

console.log(letterCombinations("23"));
