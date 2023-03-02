const testData = [125, 555, 44];
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

}

tips = [calcTip(testData[0]), calcTip(testData[1]), calcTip(testData[2])];

total = [ testData[0]+tips[0], testData[1]+tips[1], testData[2]+tips[2]];

console.log(total);

//bug FIXME     



