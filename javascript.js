"use strict"
console.log("Hello World")
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber > 60) {
        return "Rock"
    } else if (randomNumber < 30) {
        return "Scissor"
    } else {
        return "Paper"
    }
}

console.log("computer" + "= " + getComputerChoice())

let humanChoice = prompt("Chose One: Rock, Paper, Scissor")
function getHumanChoice() {
    return humanChoice;
}
console.log("human" + "= " + getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Rock") {
        ++humanScore;
        ++computerScore;
        console.log("it's a draw.");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        ++computerScore;
        console.log("Computer win, Paper beat rock");
    } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        ++humanScore;
        console.log("human win, rock beats scissor");
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        ++humanScore;
        console.log("human win, paper beats rock");
    } else if (humanChoice == "Paper" && computerChoice == "Paper") {
        ++humanScore;
        ++computerScore;
        console.log("it's a draw.");
    } else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        ++computerScore;
        console.log("Computer win, scissor beats paper");
    } else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        ++computerScore;
        console.log("Computer win, rock beats scissor");
    } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        ++humanScore;
        console.log("human win, scissor beats paper");
    } else if (humanChoice == "Scissor" && computerChoice == "Scissor") {
        ++humanScore;
        ++computerScore;
        console.log("it's a draw.");
    }

}
playRound(getHumanChoice(), getComputerChoice());
console.log("human" + " " + humanScore)
console.log("computer" + " " + computerScore)

function playGame() {
    getHumanChoice();
    getComputerChoice();
    playRound(getHumanChoice(), getComputerChoice());
    console.log("human" + " " + humanScore)
    console.log("computer" + " " + computerScore)
}

while ((humanScore<6 && computerScore<6)) {
    playGame();
}
