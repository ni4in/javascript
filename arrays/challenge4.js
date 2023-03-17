const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

dogs.forEach(function(dog){
    dog.recommededFood = dog.weight**0.75*28; 
});

dogs.filter(dog => dog.owners.includes("Sarah")).forEach(dog => dog.curFood > dog.recommededFood ? console.log("too much") : console.log("too little"));

const output = dogs.reduce((acc,dog) => { dog.curFood > dog.recommededFood ? acc.ownersEatTooMuch.push(dog.owners) : acc.ownersEatTooLittle.push(dog.owners);return acc}, {ownersEatTooMuch : [], ownersEatTooLittle: []});
const [ownersEatTooLittle, ownersEatTooMuch] =  [output.ownersEatTooLittle.flat(), output.ownersEatTooMuch.flat()];
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);

console.log(dogs.some(dog => dog.curFood === dog.recommededFood ));

console.log(dogs.some(dog => dog.curFood > 0.9*dog.recommededFood && dog.curFood < 1.10*dog.recommededFood ));

console.log(dogs.filter(dog => dog.curFood > 0.9*dog.recommededFood && dog.curFood < 1.10*dog.recommededFood ));

console.log(dogs.slice().sort())