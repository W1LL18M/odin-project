function getComputerChoice() {
    let compChoice;
    let randNumber = Math.random() * 3;
    if (randNumber <= 1) {compChoice = "ROCK";}
    else if (randNumber <= 2) {compChoice = "PAPER";}
    else {compChoice = "SCISSOR";}
    return compChoice;
}

function playRound(playerChoice) {
    compChoice = getComputerChoice();
    compChoice = compChoice.toUpperCase();
    playerChoice = playerChoice.toUpperCase();
    let result; // 1 for win, 2 for loss, 3 for tie, 4 for invalid choice

    if (playerChoice == "ROCK") {
        if (compChoice == "ROCK") {
            roundResult.textContent = "You Tie! Both players chose " + playerChoice.toUpperCase();
            updateScore(3)
        } else if (compChoice == "PAPER") {
            roundResult.textContent = "You Lose! " + compChoice.toUpperCase() + " beats " + playerChoice.toUpperCase();
            updateScore(2)
        } else {
            roundResult.textContent = "You Win! " + playerChoice.toUpperCase() + " beats " + compChoice.toUpperCase();
            updateScore(1)
        }
    } else if (playerChoice == "PAPER") {
        if (compChoice == "ROCK") {
            roundResult.textContent = "You Win! " + playerChoice.toUpperCase() + " beats " + compChoice.toUpperCase();
            updateScore(1)
        } else if (compChoice == "PAPER") {
            roundResult.textContent = "You Tie! Both players chose " + playerChoice.toUpperCase();
            updateScore(3)
        } else {
            roundResult.textContent = "You Lose! " + compChoice.toUpperCase() + " beats " + playerChoice.toUpperCase();
            updateScore(2)
        }
    } else if (playerChoice == "SCISSOR") {
        if (compChoice == "ROCK") {
            roundResult.textContent = "You Lose! " + compChoice.toUpperCase() + " beats " + playerChoice.toUpperCase();
            updateScore(2)
        } else if (compChoice == "PAPER") {
            roundResult.textContent = "You Win! " + playerChoice.toUpperCase() + " beats " + compChoice.toUpperCase();
            updateScore(1)
        } else {
            roundResult.textContent = "You Tie! Both players chose " + playerChoice.toUpperCase();
            updateScore(3)
        }        
    }
}

function updateScore(result) {
    if (result == 1) {
        playerWinCount += 1;
    } else if (result == 2) {
        computerWinCount += 1;
    }
    scoreBoard.textContent = "Player: " + playerWinCount + " || Computer: " + computerWinCount;
}

let playerWinCount = 0;
let computerWinCount = 0;

const body = document.querySelector("body");

const resultBoard = document.createElement("div");
body.appendChild(resultBoard);

const roundResult = document.createElement("p");
resultBoard.appendChild(roundResult);
const scoreBoard = document.createElement("p");
resultBoard.appendChild(scoreBoard);

const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";
body.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
body.appendChild(paperButton);

const scissorButton = document.createElement("button");
scissorButton.textContent = "SCISSOR";
body.appendChild(scissorButton);

rockButton.addEventListener("click", () => {
    playRound("ROCK");
});
paperButton.addEventListener("click", () => {
    playRound("PAPER");
});
scissorButton.addEventListener("click", () => {
    playRound("SCISSOR");
});