// Automate the computer's hand
const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']
function getComputerChoice() {
    computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// Clear the result of player and computer's hand
function clearResults() {
    playerRock.removeAttribute('id');
    playerPaper.removeAttribute('id');
    playerScissors.removeAttribute('id');
    cpuRock.removeAttribute('id');
    cpuPaper.removeAttribute('id');
    cpuScissors.removeAttribute('id');
    winnerResult.removeAttribute('id');
    buttonAllowed = 1;
}

// Play a round given the player's hand and the computer's hand and return the players results (win, lose or tie)
const playerRock = document.querySelector('.rock');
const playerPaper = document.querySelector('.paper');
const playerScissors = document.querySelector('.scissors');
const cpuRock = document.querySelector('.rockCPU');
const cpuPaper = document.querySelector('.paperCPU');
const cpuScissors = document.querySelector('.scissorsCPU');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK") {
        playerRock.setAttribute('id', 'show');
        if (computerSelection === "ROCK") {
            cpuRock.setAttribute('id', 'show');
            return "TIE";
        }
        else if (computerSelection === "PAPER") {
            cpuPaper.setAttribute('id', 'show');
            return "LOSE";
        }
        else  {
            cpuScissors.setAttribute('id', 'show');
            return "WIN";
        }
    }
    else if (playerSelection === "PAPER") {
        playerPaper.setAttribute('id', 'show');
        if (computerSelection === "ROCK") {
            cpuRock.setAttribute('id', 'show');
            return "WIN";
        }
        else if (computerSelection === "PAPER") {
            cpuPaper.setAttribute('id', 'show');
            return "TIE";
        }
        else  {
            cpuScissors.setAttribute('id', 'show');
            return "LOSE";
        }
    }
    else if (playerSelection === "SCISSORS") {
        playerScissors.setAttribute('id', 'show');
        if (computerSelection === "ROCK") {
            cpuRock.setAttribute('id', 'show');
            return "LOSE";
        }
        else if (computerSelection === "PAPER") {
            cpuPaper.setAttribute('id', 'show');
            return "WIN";
        }
        else  {
            cpuScissors.setAttribute('id', 'show');
            return "TIE";
        }
    }
}

// Reset game 
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    count = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    winnerResult.removeAttribute('id');

    return;
}

// Declare the winner to player
const winnerResult = document.querySelector('.winner');
let count = 0;
function declareWinner() {
    if (playerScore === 5) {
        count = 1;
        winnerResult.setAttribute('id', 'displayShowing');
        winnerResult.textContent = "PLAYER'S VICTORY";
        setTimeout(function () {
            winnerResult.textContent = "RESETTING...";
        }, 2500);
        setTimeout(function () {
            winnerResult.removeAttribute('id');
            resetGame();
        }, 4000);
       
    }
    else if (computerScore === 5) {
        count = 1;
        winnerResult.setAttribute('id', 'displayShowing');
        winnerResult.textContent = "COMPUTER'S VICTORY";
        setTimeout(function () {
            winnerResult.textContent = "RESETTING...";
        }, 2500);
        setTimeout(function () {
            winnerResult.removeAttribute('id');
            resetGame();
        }, 4000);
    }

    return;
}

// Allow for each button to be clicked, and upon button click grab the player and computers input and run the playRound function and then tally the points based on the results from said function
const gameButtons = document.querySelectorAll('.buttons');
const player = document.querySelector('.PlayerScore');
const computer = document.querySelector('.ComputerScore');
let playerScore = 0;
let computerScore = 0;
let buttonAllowed = 1;

gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(function () {
            button.classList.remove('clicked');
        }, 250);
        if (buttonAllowed === 0) {
            return;
        }
        buttonAllowed = 0;

        // Clear the screen only if declareWinner hasn't been called which sets count to 1 (prevents resetting screen message over and over again from button spamming)
        if ((winnerResult.hasAttribute('id') === true) && (count == 0)) {
            winnerResult.removeAttribute('id');
        }
        
        playerSelection = button.getAttribute('id');
        let computerSelection = getComputerChoice();
        let results;
        results = playRound(playerSelection, computerSelection);
        setTimeout(clearResults, 1000);
        
        if (playerScore !== 5 && computerScore !== 5) {
            if (results == "WIN") {
                playerScore++;
            }
            if (results == "LOSE") {
                computerScore++;
            }

            player.textContent = playerScore;
            computer.textContent = computerScore;
        }

        // Declare the winner only once
        if (count == 0) {
            declareWinner();
        }

    });
});

// Reset the game when the reset button is clicked
const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    resetBtn.classList.add('clicked');
    setTimeout(function () {
        resetBtn.classList.remove('clicked');
    }, 250);
    resetGame();
    if (playerScore !== 5 && computerScore !== 5) {
        winnerResult.removeAttribute('id');
    } 
});