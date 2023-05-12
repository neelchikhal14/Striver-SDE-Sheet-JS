var generateBinaryStrings = function (n) {
  let index = 0,
    currentStr = [],
    result = [];

  function helper(index, currentStr, result, n) {
    // base case
    if (index === n) {
      result.push(currentStr.join(""));
      return;
    }

    currentStr.push("0");
    helper(index + 1, currentStr, result, n);
    currentStr.pop();

    if (currentStr[currentStr.length - 1] !== "1") {
      currentStr.push("1");
      helper(index + 1, currentStr, result, n);
      currentStr.pop();
    }
  }

  helper(index, currentStr, result, n);

  return result;
};

generateBinaryStrings(4);
