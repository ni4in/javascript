const question = new Map([["question","what is the best pogramming language for datascience"],[1, "C"],[2, "Python"], [3, "java script"],["correct",3],[true,"Correct🏆"], [false,"Try Again 👍"]]);

const restuarant = new Set([1,2,3,4,1,2,3]);

console.log(question);
console.log(restuarant);
prompt("what is your answer");
for(const [key,value] of question){
    console.log(key,value);
};

