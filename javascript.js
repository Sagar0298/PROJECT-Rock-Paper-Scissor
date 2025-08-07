"use strict"
console.log("Hello World")
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber > 60) {
        return 'Rock'
    } else if (randomNumber < 30) {
        return "Scissor"
    } else {
        return "Paper"
    }
}

console.log(getComputerChoice())

const humanChoice = prompt("Chose One: Rock, paper, Scissor")
function getHumanChoice() {
    return humanChoice;
}
console.log(getHumanChoice())

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == Rock && computerChoice == Rock) {

    }
}