/*
🔹 Fundamentals & Strings






Abbreviation Maker
Input: "Java Script Object Notation" → Output: "JSON"

Hide Phone Number
Input: "9876543210" → Output: "*****43210"
*/

/* Palindrome Checker
Write a function that checks if a string is the same forwards and backwards.
Input: "madam" → Output: true
*/

function stringFrontAndBack(str) {
  const strArr = str.split("");
  const reversedArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }
  let revStr = reversedArr.join("");
  return str === revStr;
}
console.log(stringFrontAndBack("hello"));
console.log(stringFrontAndBack("madam"));
