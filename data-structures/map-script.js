"use strict";

const question = new Map([
  ["question", "what is the best pogramming language for datascience"],
  [1, "C"],
  [2, "Python"],
  [3, "Javascript"],
  ["correct", 2],
  [true, "Correct🏆"],
  [false, "Try Again 👍"],
]);

const restuarant = new Set([1, 2, 3, 4, 1, 2, 3]);

// console.log(question);
// console.log(restuarant);
// const answer = Number(prompt("what is your answer"));
// console.log(answer);
// console.log(question.get(true,question.get("correct") === answer));

for (const [key, value] of question) {
  if (typeof key == "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const ans = Number(prompt("What is your answer ?"));
const ans = 2;
console.log(question.get(question.get("correct") === ans));

console.log(question.entries());
console.log(question.keys())
console.log(question.values())
