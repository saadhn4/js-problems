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

/*
Find the maximum and minimum in an array without using built-in methods
*/

function findMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (const item of arr) {
    if (item > max) {
      max = item;
    }
    if (item < min) {
      min = item;
    }
  }
  return `Max: ${max}, Min: ${min}`;
}

console.log(findMaxAndMin([1, 3, 5, 8, 6]));

// Reverse an array without .reverse().

function reverseArr(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArr([1, 2, 3]));

// Count how many even and odd numbers are in an array.

function countOddAndEven(arr) {
  const oddNumbers = [];
  const evenNumbers = [];

  for (const item of arr) {
    if (item % 2 === 0) {
      evenNumbers.push(item);
    } else {
      oddNumbers.push(item);
    }
  }
  return `Odd numbers: ${oddNumbers.length} Even numbers: ${evenNumbers.length}`;
}
console.log(countOddAndEven([1, 2, 3, 4, 5, 6]));

// Merge two arrays into one (no .concat())

function mergeArrays(arr1, arr2) {
  const mergedArr = [...arr1, ...arr2];
  return mergedArr;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//  Create an object for a student with name, age, marks and print them in a sentence

const student = {
  name: "Saad Hussain",
  age: 21,
  marks: 67,
};

console.log(
  `Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`
);

//  Count how many properties an object has.

function countObjectKeys(obj) {
  console.log(Object.keys(obj).length);
}
countObjectKeys(student);

//  Find the property with the highest value in: { math: 92, english: 85, science: 97 }

function findHighestMarks(obj) {
  const marksArr = [];
  for (const key in obj) {
    marksArr.push(obj[key]);
  }
  return `Highest Marks: ${Math.max(...marksArr)}`;
}

console.log(
  findHighestMarks({
    math: 92,
    english: 85,
    science: 97,
  })
);

// Write a method inside an object that calculates BMI and stores it.

const person = {
  heightInMeters: 1.79,
  weightInKg: 76,
  findBmi() {
    return this.weightInKg / this.heightInMeters ** 2;
  },
};

console.log(person.findBmi());

// Loop through an object and print all keys and values.

function printKeysAndValues(obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

printKeysAndValues({
  math: 92,
  english: 85,
  science: 97,
});

// Print all numbers from 1–100 but skip multiples of 3.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

// Write FizzBuzz: - Multiples of 3 → "Fizz" - Multiples of 5 → "Buzz" - Multiples of both → "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//  Find the sum of digits of a number (e.g., 456 → 15)

function sumOfDigits(number) {
  // Declaring n outside cause to use split i need to convert it into a string
  let n = String(number);
  const numbers = [];
  // n.split = [4,5,6] (works because n is now a string)
  for (n of n.split("")) {
    numbers.push(n);
  }
  let sum = 0;
  for (const number of numbers) {
    // converting back to number because you dont want to add a number with a string(We dont want 0+'4')
    sum += Number(number);
  }
  return sum;
}
console.log(sumOfDigits(456));

// Write a function to check if the given property exists in an object

function checkIfPropertyExists(obj, property) {
  return obj.hasOwnProperty(property)
    ? "Yes, property exists"
    : "No, property does not exist";
}

console.log(
  checkIfPropertyExists({ name: "Saad", age: 20, isAlive: true }, "isAlive")
);

// Write a function that returns the larger of two numbers.

function returnLargerNumber(a, b) {
  return a > b ? a : b;
}

console.log(returnLargerNumber(51, 22));

// Write a function that takes an array and returns its average.

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(getAverage([1, 2, 3, 4, 5]));

// Write a function that takes a string and returns it reversed.

function reverseString(str) {
  // const strArray = [];
  // for (let i = str.length - 1; i >= 0; i--) {
  //   strArray.push(str[i]);
  // }
  // return strArray.join("");
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Write a function that counts how many times a word appears in a sentence

function countWordAppearance(str, word) {
  let count = 0;
  for (const w of str
    .trim()
    .replace(/[.,?!\[\]]/g, "")
    .split(" ")) {
    if (w === word) count++;
  }

  console.log(`The word ${word} appears in the given string ${count} times`);
}

countWordAppearance(
  "The river flowed calmly through the valley, and children played near the river, skipping stones across its clear surface while the sun reflected brightly on the water.",
  "river"
);
