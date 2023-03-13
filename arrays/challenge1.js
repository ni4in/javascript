"use strict";

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCpy = [...dogsJulia].slice(1, -2);
//   const dogsArr = [...dogsJuliaCpy, ...dogsKate];
//   console.log(dogsArr);



//   dogsArr.forEach((age, index) => {
//     const type =
//       age > 2 ? `  an adult, and is ${age} years old` : `  still a puppy`;
//     console.log(`Dog number ${index+1} is ${type}`);
//   });
// };

// const juliaData1 = [3, 5, 2, 12, 7];
// const kateData1 = [4, 1, 15, 8, 3];

// checkDogs(juliaData1, kateData1);

const dogs = [5,2,4,1,15,8,3];

const calcAverageHumanAge = (dogs) => dogs.map((val) => val <= 2 ? 2*val : 16 + 4*val).filter((val) => val > 18).reduce((acc,cur,i,arr) => acc + cur/arr.length,0);

console.log(calcAverageHumanAge(dogs));


