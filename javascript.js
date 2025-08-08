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
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        ++humanScore;
        ++computerScore;
        return console.log("it's a draw.");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerChoice;
        return console.log("Computer win, Paper beat rock");
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        ++humanScore;
        return console.log("human win, rock beats scissor");
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        ++humanScore;
        return console.log("human win, paper beats rock");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        ++humanScore;
        ++computerScore;
        return console.log("it's a draw.");
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        ++computerChoice;
        return console.log("Computer win, scissor beats paper");
    } else if (humanChoice == "scissor" && computerChoice == "Rock") {
        ++computerChoice;
        return console.log("Computer win, rock beats scissor");
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        ++humanScore;
        return console.log("human win, scissor beats paper");
    } else if (humanChoice == "scissor" && computerChoice == "scissor") {
        ++humanScore;
        ++computerScore;
        return console.log("it's a draw.");
    }

}
console.log(playRound())
console.log(humanScore)
console.log(computerScore)