"use strict";
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(64);
console.log(gameEvents);
const numEvents = [...gameEvents.keys()].length;

console.log(`An event happend every ${90/numEvents} minutes`);

for(const [key,value] of gameEvents){

    console.log( (key < 45 && `[first half]${key} : ${value}`) || `[second half]${key} : ${value}` );
} 

