"use strict"

// const game = {
//     team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
//     [
//     'Neuer',
//           'Pavard',
//           'Martinez',
//           'Alaba',
//           'Davies',
//           'Kimmich',
//           'Goretzka',
//           'Coman',
//           'Muller',
//           'Gnarby',
//           'Lewandowski',
//     ], [
//           'Burki',
//           'Schulz',
//           'Hummels',
//           'Akanji',
//           'Hakimi',
//           'Weigl',
//           'Witsel',
//           'Hazard',
//           'Brandt',
//           'Sancho',
//           'Gotze',
//     ], ],
//       score: '4:0',
//       scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//       'Hummels'],
//       date: 'Nov 9th, 2037',
//       odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     }, };


// //1 
// for (const [ind, ply]  of game.scored.entries() )
// {
//     console.log(`Goal ${ind+1} : ${ply}`);

// };


// const entries = Object.values(game.odds);
// let sum  = 0;
// const num = entries.length;
// for(const val of entries){ 
//     sum+= val/num;
// }
// console.log(sum)


// for(const [keys, values] of Object.entries(game.odds))
// {
//     console.log(`odd of victory ${game[keys] ?? "draw"} is ${values} `)
// }

// let scorers = Object();
// for (const [ind, ply]  of game.scored.entries() )
// {
//     scorers[ply] = (scorers[ply] || 0) + 1

// };
// console.log(scorers);


const staff = ["waiter", "manager", "chef", "waiter", "manager"];

const uniq_staff = [...new Set(staff)];

console.log(uniq_staff)