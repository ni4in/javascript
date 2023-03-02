for(let rep = 1; rep<= 10; rep++){
    console.log(`${rep}`);
}

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Miachel','Peter','Steven'],true];

for (let i = 0; i<jonas.length; i++){
    if (typeof jonas[i] != 'string'){
        break;
    }
    console.log(`${jonas[i]}`);
};

for (let i = 0; i<jonas.length; i++){
    if (typeof jonas[i] != 'string'){
        continue;
    }
    console.log(`${jonas[i]}`);
};





