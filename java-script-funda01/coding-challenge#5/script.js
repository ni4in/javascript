const calcAverage = (x,y,z) => { return (x + y + z)/3; };

const dolAvg = calcAverage(44,23,71);
const koaAvg = calcAverage(85,54,41); 
console.log(dolAvg, koaAvg);

function checkWinner(dolAvg, koaAvg)  
{
    if (dolAvg > koaAvg) {
        console.log("Dolly Wins!",dolAvg);
    } else if (koaAvg > dolAvg) {
        console.log("Koa Wins!", koaAvg);
    } else {
        console.log("Draw!");
    }
}
checkWinner(dolAvg, koaAvg);
