// 22. Generate Parentheses
// www.youtube.com/watch?v=s9fokUqJ76A
// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // only add ( when open < n
  // only add ) when closed < open
  // stop condition open = close =n

  let open = 0,
    close = 0,
    current = [],
    result = [];

  function helper(open, close, current, result, n) {
    //base case
    if (open === close && open === n) {
      result.push(current.join(""));
      return;
    }

    if (open < n) {
      current.push("(");
      open += 1;
      helper(open, close, current, result, n);
      //reset for backtracking
      current.pop();
      open -= 1;
    }

    if (close < open) {
      current.push(")");
      close += 1;
      helper(open, close, current, result, n);
      //reset for backtracking
      current.pop();
      close -= 1;
    }
  }

  helper(open, close, current, result, n);

  return result;
};

generateParenthesis(3);
