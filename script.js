// Generate a random number between 1-3, assign a game choice
// based on the number, then return it
function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch(randomNumber) {
        case 1:
            computerChoice = "ROCK";
            break;
        case 2:
            computerChoice = "PAPER";
            break;
        case 3:
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice;
}

// Prompt user to make their selection, then return as uppercase
function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?");
    return playerChoice.toUpperCase();
}

// Compares player and computer selection and determines winner
function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        return result = "You tied! You both chose ROCK";
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        return result = "You lose! PAPER beats ROCK";
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return result = "You win! ROCK beats SCISSORS";
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return result = "You win! PAPER beats ROCK";
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        return result = "You tied! You both chose PAPER";
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return result = "You lose! SCISSORS beats PAPER";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return result = "You lose! ROCK beats SCISSORS";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return result = "You win! SCISSORS beats PAPER";
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return result = "You tied! You both chose SCISSORS";
    }
}

