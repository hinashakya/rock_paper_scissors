function getComputerChoice() {
    let x = Math.random();
    if (x >= 0 && x < 0.33) {
        return "rock";
    }
    if (x >= 0.33 && x < 0.66) {
        return "paper";
    }
    if (x >= 0.66 && x <= 1) {
        return "scissor";
    }
}

function getHumanChoice() {
    let input = prompt("Enter the letter r, p, or s");
    return input.toLowerCase();
}

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice == ComputerChoice) {
        console.log("Draw");
        return 0; // No score change
    } else if (HumanChoice == 'rock' && ComputerChoice == 'paper') {
        console.log("Computer won");
        return -1; // Computer wins
    } else if (HumanChoice == 'rock' && ComputerChoice == 'scissor') {
        console.log("Human won");
        return 1; // Human wins
    } else if (HumanChoice == 'paper' && ComputerChoice == 'rock') {
        console.log("Human won");
        return 1; // Human wins
    } else if (HumanChoice == 'paper' && ComputerChoice == 'scissor') {
        console.log("Computer won");
        return -1; // Computer wins
    } else if (HumanChoice == 'scissor' && ComputerChoice == 'rock') {
        console.log("Computer won");
        return -1; // Computer wins
    } else if (HumanChoice == 'scissor' && ComputerChoice == 'paper') {
        console.log("Human won");
        return 1; // Human wins
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);

        // Get human and computer choices for this round
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(`User choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);

        // Play the round and update scores
        let roundResult = playRound(humanChoice, computerChoice);
        
        if (roundResult === 1) {
            humanScore++;
        } else if (roundResult === -1) {
            computerScore++;
        }

        // Display current score
        console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}\n`);
    }

    // Final result after 5 rounds
    if (humanScore > computerScore) {
        console.log(`Human wins the game! Final score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`Computer wins the game! Final score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();