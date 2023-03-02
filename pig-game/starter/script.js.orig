"use strict";

//selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// variable defenitions

let currentScore, scores, activePlayer, playing;

const switchPlayer = function () {
  //
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
const roll = function () {
  /* dice roll button event handler 
1. random number generation for dice roll
2. showing the dice image 
3. check the dice conditions
  1. if the dice condition is 1 then switch the active player and make the current score 0
  2. if else , continue the play 
*/

  if (playing) {
    const dice = Math.trunc(6 * Math.random() + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
};

const hold = function () {
  /*
  1. add current score to the total score 
  2. check if score is = 100 
  3. if true then current player wins 
  4. if false then switch player 
  
  */

  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
};

const init = function () {
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();
btnRoll.addEventListener("click", roll);
btnHold.addEventListener("click", hold);
btnNew.addEventListener("click", init);
