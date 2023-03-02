function logger(a,b) 
{
    console.log(`${a+b}`);
    return a+b;
}

const x = logger(1,2);
console.log(x);

const calAge = function (yob) { return 2037 - yob;}
console.log(calAge(1991));