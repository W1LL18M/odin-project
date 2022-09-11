/* create a function called getComputerChoice which randomly return either rock, paper, or scissors
   use math.random() to generate random number between 0 and 1 and multiply it by 100 then store it in a var
   if variable value is less than 33 (rock), if variable value between 33 and 66 (paper), otherwise (scissors)
   return string that is either "rock", "paper", or "scissors"

   create a function called playRound() that takes computer choice and player choice
   use conditionals to determine who wins
   return string that contains the result message

   create a function called game() that calls the playRound() function inside
   plays 5 rounds that keeps score and reports a winner or loser at end
   round counter (used in for loop), player win counter, computer win counter
   whoevers counter is highest at end is the win
*/

function getComputerChoice() {
    let compChoice;
    let randNumber = Math.random() * 100;
    if (randNumber <= 33) {compChoice = "ROCK";}
    else if (33 < randNumber <= 66) {compChoice = "PAPER";}
    else {compChoice = "SCISSOR";}
    return compChoice;
}

function playRound(compChoice, playerChoice) {
    console.log(compChoice);
    compChoice = compChoice.toUpperCase();
    playerChoice = playerChoice.toUpperCase();
    let result; // 1 for win, 2 for loss, 3 for tie, 4 for invalid choice

    if (playerChoice == "ROCK") {
        if (compChoice == "ROCK") {
            result = 3;
        } else if (compChoice == "PAPER") {
            result = 2;
        } else {
            result = 1;
        }
    } else if (playerChoice == "PAPER") {
        if (compChoice == "ROCK") {
            result = 1;
        } else if (compChoice == "PAPER") {
            result = 3;
        } else {
            result = 2;
        }
    } else if (playerChoice == "SCISSOR") {
        if (compChoice == "ROCK") {
            result = 2;
        } else if (compChoice == "PAPER") {
            result = 1;
        } else {
            result = 3;
        }        
    } else {
        result = 4;
    }
    return result;
}

function game() {
    console.log("Game Commence!");
    let playerWinCount = 0;
    let compWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Enter Rock, Paper, or Scissor");
        let compChoice = getComputerChoice();
        let result = playRound(compChoice, playerChoice);
        if (result == 1) {
            console.log("You Win! " + playerChoice.toUpperCase() + " beats " + compChoice.toUpperCase());
            playerWinCount += 1;
        } else if (result == 2) {
            console.log("You Lose! " + compChoice.toUpperCase() + " beats " + playerChoice.toUpperCase());
            compWinCount += 1;
        } else if (result == 3) {
            console.log("You Tie! Both players chose " + playerChoice.toUpperCase());
        } else if (result == 4) {
            console.log("You did not enter a valid option");
            i -= 1;
        }
        console.log("Player Score: " + playerWinCount + "\nComputer Score: " + compWinCount);
    }
    if (playerWinCount > compWinCount) {console.log("Player is the winner!");}
    else if (playerWinCount < compWinCount) {console.log("Computer is the winner!");}
    else {console.log("It is a tie");}
}

game();
