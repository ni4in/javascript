const jonas = {
    firstName: 'John', 
    lastName: 'shumaker', 
    age: 40, 
    job: 'Teacher', 
    friends: ['nithin', 'Aggasi', 'Messi'],
    license: false,

    calcAge: function() {
        this.age =  2023 - this.birthYear;
        return this.age;
    },
    calPrint: function() {
        return (`My name is ${this.firstName} ${this.lastName} a ${this.age} old ${this.job},  and he has ${this.license ? "he has a" : "he has no"} 
        drivers license`) } 

};

console.log(jonas.age);
console.log(jonas.age);




console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['firstName']);

const nameKey = 'Name';

console.log(jonas['first'+nameKey]);

const promptVal = prompt('What do you want to know about Jonas? Choose between first name, last name, age, job, friends?');

console.log(jonas[promptVal]);

jonas.location = 'Portugal';

console.log(jonas);

console.log(jonas.calPrint());