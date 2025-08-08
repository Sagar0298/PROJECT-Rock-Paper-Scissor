"use strict"
console.log("Hello World")
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber > 60) {
        return 'Rock'
    } else if (randomNumber < 30) {
        return "Scissor"
    } else {
        return "Paper"
    }
}

console.log(getComputerChoice())

let humanChoice = prompt("Chose One: Rock, paper, Scissor")
function getHumanChoice() {
    return humanChoice;
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        ++humanScore;
        ++computerScore;
        console.log("it's a draw.");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        console.log("Computer win, Paper beat rock");
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        ++humanScore;
        console.log("human win, rock beats scissor");
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        ++humanScore;
        console.log("human win, paper beats rock");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        ++humanScore;
        ++computerScore;
        console.log("it's a draw.");
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        ++computerScore;
        console.log("Computer win, scissor beats paper");
    } else if (humanChoice == "scissor" && computerChoice == "Rock") {
        ++computerScore;
        console.log("Computer win, rock beats scissor");
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        ++humanScore;
        console.log("human win, scissor beats paper");
    } else if (humanChoice == "scissor" && computerChoice == "scissor") {
        ++humanScore;
        ++computerScore;
        console.log("it's a draw.");
    }

}
console.log(playRound(getHumanChoice(), getComputerChoice()))
console.log(humanScore)
console.log(computerScore)