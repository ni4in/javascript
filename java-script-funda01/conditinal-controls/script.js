const markWeight = 95;
const johnWeight = 85;
const markHeight = 1.88;
const johnHeight = 1.76;

const markBMI = markWeight / (markHeight**2);
const johnBMI = johnWeight / (johnHeight**2);

const markHigherBMI = (markBMI > johnBMI); 

console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark BMI (${markBMI}) is higher than John ${(johnBMI)}`)
}
else
{
    console.log(`John BMI (${johnBMI}) is higher than Mark (${markBMI})`)
}

