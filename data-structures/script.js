"use strict";

const restaurant = {
  name: "Classic Italiano",
  location: "Via Angelo Tavanti 23, Firenza, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Capresa Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

//setting function with default values 
  orderDelivery : function({starterIndex = 0 ,mainIndex = 0 , address, time}){
    console.log(address, time)
    console.log(`order received : ${this.starterMenu[starterIndex], this.mainMenu[mainIndex]} will be delivered to ${address} at time ${time}`);
  }
};


// // Nested destructuring

// // const [starter, main] = restaurant.order(2,0);

// // console.log(starter, main)

// // const nested = [ 2,4,[5,6]];

// // const [x,,[i,j]] = nested

// // console.log(x,y)

// // Destructuring Objects

// // const { name, openingHours, categories } = restaurant;

// // console.log(name, openingHours, categories);

// // const { name: hotelName, openingHours: hours, categories: tags } = restaurant;

// // console.log(hotelName, hours, tags);

// // console.log(restaurant.categories);

// // let a = 111;
// // let b = 999;

// // const obj = { a: 23, b: 27, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);


// restaurant.orderDelivery({
//   time : "22:30",
//   address : "Via del Sole,21",
//   mainIndex : 2,
//   starterIndex : 2,
// });


// // SPREAD OPERATOR 

// // const a = [100, 120];

// // const b = [80, ...a];

// // console.log(b)



// // const firstName = "Nithin";

// // const letters = [...firstName, "V"]

// // console.log(letters)


// // const newRestaurant = {...restaurant,foundedIn : 1998, founder: "Guiesspe"}

// // console.log(newRestaurant)

// // console.log(newRestaurant);

// // REST Patterns : Opposite of SPREAD

// const add = function(...numbers){
//   let sum = 0;
//   for(let i = 0; i<numbers.length; ++i)
//   {
//     sum+=numbers[i];
//   }
//   console.log(sum);
// };

// const arr = [1,2,...[3,4]];
// console.log(arr)

// const [a,b,...others] = arr;

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

// console.log(otherFood)

// const A = [{Name: "nithin"}]
// console.log(A[1]?.Name ?? "Not Exists" 

console.log(Object.keys(restaurant.openingHours))
