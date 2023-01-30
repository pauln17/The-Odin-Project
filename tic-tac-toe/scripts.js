// Introduction Overlay 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Game Modes
const PLAYERVSPLAYER = 0;
const PLAYERVSAI = 1;

// Board 
const board = document.querySelector('.board');

// Cells
const cells = document.querySelectorAll('.cell');

// Turn Classes
const X_CLASS = 'x';
const O_CLASS = 'o';
let xTurn = X_CLASS;

// Winning Combinations
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



function newGame() {
    const twoPlayerButton = document.querySelector('[data-two-player]');
    const aiButton = document.querySelector('[data-ai]');
    twoPlayerButton.addEventListener('click', () => setGameMode(PLAYERVSPLAYER));
    aiButton.addEventListener('click', () => setGameMode(PLAYERVSAI));

    function setGameMode(mode) {
        if (mode === PLAYERVSPLAYER) {
            renderGame();
            cells.forEach((cell) => {
                cell.addEventListener('click', playGameVsPlayer, { once : true })
            });
            setBoardHoverClass();
        } else {
            renderGame();
        }
    }
    
    function renderGame() {
        modal.removeAttribute('id');
        overlay.removeAttribute('id');
    }
}

function playGameVsPlayer(e) {
    const cell = e.target;
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(currentClass);
    } else if (checkDraw()) {
        endGame('draw');
    } else {
        swapTurn();
        setBoardHoverClass();
    }

}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurn() {
    xTurn = !xTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);

    if (xTurn) {
        board.classList.add(X_CLASS)
    } else {
        board.classList.add(O_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass)
        })
    });
}

function checkDraw() {
    return [...cells].every((cell) => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    })
}

function endGame(currentClass) {
    const gameText = document.querySelector('.game-text');
    if (currentClass === 'x') {
        gameText.innerHTML = 'Player1 WON';
    } else if (currentClass === 'o') {
        gameText.innerHTML = 'Player2 WON';
    } else {
        gameText.innerHTML = 'DRAW';
    }
    modal.setAttribute('id', 'active');
    overlay.setAttribute('id', 'active');

    clearBoard();
}

function clearBoard() {
    cells.forEach((cell) => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
    })
    xTurn = X_CLASS;
}
newGame();