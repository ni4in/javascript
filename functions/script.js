"use strict"

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greet = (greeting) => (name) => console.log(`$(greeting) ${name}`); 
// const student = {
//     sname : "nithin",
//     age : 19,
//     course: "Msc",
//     ageAdult : function(){
//         return `age from adult : ${this.age - 18}`;
//     }
//  };

// const my_student = student;

// console.log(my_student.ageAdult())

// const my_func = my_student.ageAdult;
// console.log(`function : ${my_func}`);
// console.log(`output : ${my_func()}`)


const addTaxRate = function(rate){
    return function(value){
        return value + rate*value;

    }
};

const addVat = addTaxRate(0.23);
console.log(addVat(100));


