let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        getPlayerSelection(button);
        getComputerSelection();
        playRound(playerSelection, computerSelection);
        firstToFive();
    });
});

const results = document.querySelector("#results");

const score = document.querySelector("#score");

function getPlayerSelection(buttonClicked) {
    playerSelection = buttonClicked.id;
    return playerSelection;
}

function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    switch(randomNumber) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = `You tied! You both chose ${playerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        score.textContent = `Player: ${playerScore} \xa0\xa0\xa0 CPU: ${computerScore}`;
    }
}

function firstToFive() {
    if (playerScore == 5) {
        results.textContent = "Congratulations, you won the game!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        results.textContent = "Sorry, you lost the game :(";
        playerScore = 0;
        computerScore = 0;
    }
}