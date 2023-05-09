// Leetcode  - 8. String to Integer (atoi) https://leetcode.com/problems/string-to-integer-atoi/description/
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

//     Read in and ignore any leading whitespace.
//     Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either.
// This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
//     Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
//     Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
//     If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically,
// integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
//     Return the integer as the final result.

// Note:

//     Only the space character ' ' is considered a whitespace character.
//     Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// function checkDigit(location, numStr) {
//   if (numStr.charCodeAt(location) >= 48 && numStr.charCodeAt(location) <= 57)
//     return true;
//   else return false;
// }

// function convertAtoI(
//   theNumber,
//   index,
//   maxLength,
//   checkFurther,
//   numString,
//   sign
// ) {
//   // base case

//   if (index >= maxLength || !checkFurther) {
//     return theNumber;
//   }
//   // whitespace
//   if (numString[index] === " ") {
//     return convertAtoI(
//       theNumber,
//       index + 1,
//       maxLength,
//       checkFurther,
//       numString,
//       sign
//     );
//   }
//   // sign
//   if (numString[index] === "-") {
//     sign = "-";
//     return convertAtoI(
//       theNumber,
//       index + 1,
//       maxLength,
//       checkFurther,
//       numString,
//       sign
//     );
//   }

//   if (checkDigit(index, numString) && !checkDigit(index + 1, numString))
//     checkFurther = false;

//   if (numString.charCodeAt(index) >= 48 && numString.charCodeAt(index) <= 57) {
//     theNumber =
//       theNumber + 10 ** (maxLength - index - 1) * parseInt(numString[index]);
//     return convertAtoI(
//       theNumber,
//       index + 1,
//       maxLength,
//       checkFurther,
//       numString,
//       sign
//     );
//   }

//   return theNumber;
// }

// var myAtoi = function (s) {
//   let sign = "+";
//   let len = s.length;
//   //    48 - 57
//   // whitespace 32 97 122 65 90
//   let index = 0,
//     theNumber = 0;
//   let checkFurther = true;

//   const MAX_SAFE_INTEGER = 2 ** 31;
//   const MIN_SAFE_INTEGER = 2 ** 31 * -1;

//   theNumber = convertAtoI(theNumber, index, len, checkFurther, s, sign);

//   if (sign === "-") {
//     if (theNumber < MIN_SAFE_INTEGER) return MIN_SAFE_INTEGER;
//     else return theNumber * -1;
//   } else {
//     if (theNumber > MAX_SAFE_INTEGER) return MAX_SAFE_INTEGER;
//     else return theNumber;
//   }
// };

// console.log(myAtoi("-1"));

var myAtoi = function (s) {
  let index = 0,
    isNeg = false,
    result = 0,
    maxLen = s.length;

  for (let i = 0; i < maxLen; i++) {
    if (s[i] === " ") {
      index++;
    } else {
      break;
    }
  }

  if (s[index] === "-" || s[index] === "+") {
    isNeg = s[index] === "-";
    index++;
  }

  for (let i = index; i < maxLen; i++) {
    let num = s.charCodeAt(i);

    if (!(num >= 48 && num <= 57)) break;

    result = result * 10;
    result = result + (num - 48);
  }

  if (isNeg) {
    result = -result;
  }

  const MIN_SAFE_VALUE = -(2 ** 31);
  const MAX_SAFE_VALUE = 2 ** 31 - 1;

  let minima = Math.min(MAX_SAFE_VALUE, result);

  return Math.max(minima, MIN_SAFE_VALUE);
};

console.log(myAtoi("42"));
