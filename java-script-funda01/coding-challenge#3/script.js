const dolAvg1 = 97;
const dolAvg2 = 112;
const dolAvg3 = 101;

const kolAvg1=109;
const kolAvg2=95;
const kolAvg3=123;

const minScore = 100;

const dolAvg = (dolAvg1 + dolAvg2 + dolAvg3) /3;
const kolAvg = (kolAvg1 + kolAvg2 + kolAvg3)/3;

if (kolAvg < dolAvg && dolAvg >= minScore) {
    console.log('Dolphins Wins !!');
}
else if (dolAvg < kolAvg && kolAvg >= minScore)  
{
    console.log("Koalas Wins");

}
else if (dolAvg === kolAvg && (kolAvg >= minScore && dolAvg >= minScore))
{
    console.log("Draw");
}
else
{
    console.log("None Wins");
}




