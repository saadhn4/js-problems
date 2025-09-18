// 1. Fundamentals & Strings

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

/*
Count Vowels
Write a function that counts how many vowels are in a string.

Input: "hello" → Output: 2
*/

function countVowels(string) {
  const vowels = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      vowels.push(string[i]);
    }
  }
  return `Vowels in ${string}: ${vowels.length}`;
}
console.log(countVowels("hello"));
console.log(countVowels("saad hussain"));

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

function hideNumber(number) {
  const n = String(number);
  console.log(`${"*".repeat(n.length - 5)}${n.slice(-5)}`);
}
hideNumber(9876543210);
hideNumber(1234543210);

// Write a program to swap two numbers without using a third variable.

function swap(a, b) {
  [a, b] = [b, a];
  return `a: ${a}, b: ${b}`;
}

console.log(swap(5, 2));

// Print the multiplication table of any number (1 to 10).

function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}
printTable(5);

// Write a program to reverse a number (e.g., 123 → 321)

function reverseNumber(number) {
  const str = String(number);
  const revNumbers = [];
  for (let i = str.length - 1; i >= 0; i--) {
    revNumbers.push(str[i]);
  }
  return revNumbers.join("");
}

console.log(reverseNumber(123));
console.log(reverseNumber(56987));

// Count how many times a character occurs in a string

function countCharacter(str, character) {
  const strArr = [];
  for (const letter of str.split("")) {
    if (letter === character) {
      strArr.push(letter);
    }
  }
  return `"${str}" -> ${character}: ${strArr.length}`;
}
console.log(countCharacter("banana", "a"));

// Convert "hello world" into "Hello World"

function capitalizeEachWord(str) {
  const wordsArr = [];
  for (const word of str.split(" ")) {
    wordsArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return wordsArr.join(" ");
}

console.log(capitalizeEachWord("hello world"));
