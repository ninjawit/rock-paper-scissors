// Generates a random number between 1-3, assigns a game choice
// based on the number, then returns it
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