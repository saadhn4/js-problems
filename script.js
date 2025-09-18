// 1. Fundamentals & Strings

/* Palindrome Checker
Write a function that checks if a string is the same forwards and backwards.
Input: "madam" → Output: true
*/

// function stringFrontAndBack(str) {
//   const strArr = str.split("");
//   const reversedArr = [];
//   for (let i = strArr.length - 1; i >= 0; i--) {
//     reversedArr.push(strArr[i]);
//   }
//   let revStr = reversedArr.join("");
//   return str === revStr;
// }
// console.log(stringFrontAndBack("hello"));
// console.log(stringFrontAndBack("madam"));

/*
Count Vowels
Write a function that counts how many vowels are in a string.

Input: "hello" → Output: 2
*/

// function countVowels(string) {
//   const vowels = [];
//   for (let i = 0; i < string.length; i++) {
//     if (
//       string[i] === "a" ||
//       string[i] === "e" ||
//       string[i] === "i" ||
//       string[i] === "o" ||
//       string[i] === "u"
//     ) {
//       vowels.push(string[i]);
//     }
//   }
//   return `Vowels in ${string}: ${vowels.length}`;
// }
// console.log(countVowels("hello"));
// console.log(countVowels("saad hussain"));

/*
Abbreviation Maker
Input: "Java Script Object Notation" → Output: "JSON"
*/

function abbvMaker(str) {
  const words = [];
  for (const word of str.split(" ")) {
    words.push(word[0]);
  }
  return words.join("");
}

console.log(abbvMaker("Java Script Object Notation"));

/*
Hide Phone Number
Input: "9876543210" → Output: "*****43210"
*/
