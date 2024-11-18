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

let humanScore = 0;
let computerScore = 0;
let count = 0;  // Initialize count to track rounds
let output = document.querySelector('.output');

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice == ComputerChoice) {
        output.textContent = 'Draw';  // No score change
    } else if (HumanChoice == 'rock' && ComputerChoice == 'paper') {
        output.textContent = 'Computer won';
        computerScore++;
    } else if (HumanChoice == 'rock' && ComputerChoice == 'scissor') {
        output.textContent = 'Human won';
        humanScore++;
    } else if (HumanChoice == 'paper' && ComputerChoice == 'rock') {
        output.textContent = 'Human won';
        humanScore++;
    } else if (HumanChoice == 'paper' && ComputerChoice == 'scissor') {
        output.textContent = 'Computer won';
        computerScore++;
    } else if (HumanChoice == 'scissor' && ComputerChoice == 'rock') {
        output.textContent = 'Computer won';
        computerScore++;
    } else if (HumanChoice == 'scissor' && ComputerChoice == 'paper') {
        output.textContent = 'Human won';
        humanScore++;
    }

    // Update the score display
    //current.textContent = "Human score: " + humanScore + " Computer score: " + computerScore;

    // Check if any player has reached 5 points
    if (humanScore >= 5) {
        showFinalResult('Human wins the game!');
    } else if (computerScore >= 5) {
        showFinalResult('Computer wins the game!');
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const choice = document.querySelector(".choice");
const round = document.querySelector('.round');
const current = document.querySelector('.current');

rock.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {  // Check if the game is still on
        const computerChoice = getComputerChoice();
        round.textContent = 'Round: ' + (count + 1) + ' Human choice: rock\n Computer choice: ' + computerChoice;
        count++;
        playRound('rock', computerChoice);
    }
});

paper.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        round.textContent = 'Round: ' + (count + 1) + ' Human choice: paper\n Computer choice: ' + computerChoice;
        count++;
        playRound('paper', computerChoice);
    }
});

scissor.addEventListener('click', () => {
    if (humanScore < 5 && computerScore < 5) {
        const computerChoice = getComputerChoice();
        round.textContent = 'Round: ' + (count + 1) + ' Human choice: scissor\n Computer choice: ' + computerChoice;
        count++;
        playRound('scissor', computerChoice);
    }
});
current.textContent = "Human score: " + humanScore + " Computer score: " + computerScore;
const result = document.querySelector('#result');

function showFinalResult(winner) {
    result.textContent = `${winner} Final score -> Human: ${humanScore}, Computer: ${computerScore}`;

    // Disable further input after the game ends
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}
