'use strict'
const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];
function calcTip(bill)
{
    
    if (bill >= 50 && bill <= 300)
    {
        return 0.15*bill;
    }
    else 
    {
        return 0.20*bill;

    }
};

for(let i = 0; i< bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
};
console.log(tips);
console.log(totals);

arr = [1,2,3]

function calcAverage(arr){
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum += arr[i];
    } 
    return sum/arr.length;
}

console.log(calcAverage(arr))
