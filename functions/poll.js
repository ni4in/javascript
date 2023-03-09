"use strict";
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const poll_ans = Number(
      prompt(
        `${this.question}${this.options.join("\n")} \n (Write option number)`
      )
    );

    console.log(typeof poll_ans);

    typeof poll_ans === "number" &&
      poll_ans < this.answers.length &&
      this.answers[poll_ans]++;

    this.displayResults("string");
  },
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(`${this.answers}`);
    }
    if (type === "string") {
      console.log(`Poll results are ${this.answers.toString()}`);
    }
  },
};

const testData = [5, 2, 3];
const myObj = { answers: [5, 2, 3] };

const my_func = poll.displayResults.bind(myObj);
my_func("string");
