"use strict";


// 

let secretNumber = Math.round(Math.random() *20);
console.log(secretNumber);
let highScore = 0;
let score = 20;

// event driven stages using pusgbutton 

// pushbutton event for check button 
function getCheck()
{
    let userGuess = Number(document.querySelector(".guess").value);
    let score = Number(document.querySelector(".score").textContent);
    // console.log(userGuess);
    // console.log(score);
    if (!userGuess)
    {
        document.querySelector(".message").textContent = "Please enter a valid number between 1 and 20";
    }
    else if (userGuess > secretNumber  && score > 1)
    {
        document.querySelector(".message").textContent = "Too high";
        score--;
        document.querySelector(".score").textContent = score;
    }
    else if (userGuess < secretNumber && score > 1)
    {
        document.querySelector(".message").textContent = "Too low";
        score--;
        document.querySelector(".score").textContent = score;
    }
    else if (userGuess == secretNumber && score > 0)
    {
        highScore = score;
        document.querySelector(".message").textContent = "🥳 Correct Answer";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = '#4bf542';
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".highscore").textContent = highScore;
        document.querySelector(".score").textContent = score;
    }
    else if (score == 1)
    {
        document.querySelector(".message").textContent = "☠️ Game Over";
        score--;
        document.querySelector(".score").textContent = score;
    }

}

function gameReset()
{
    score = 20;
    document.querySelector(".message").textContent = "Start guessing ...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = '#f5bf42';
    document.querySelector(".number").style.width = "15rem";
    secretNumber = Math.round(Math.random() *20);
}


document.querySelector(".check").addEventListener("click", getCheck)
document.querySelector(".again").addEventListener("click",gameReset);





    



