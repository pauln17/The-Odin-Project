// Game Modes
const PLAYERVSPLAYER = 0;
const PLAYERVSAI = 1;
let gameMode;

// Board 
const board = document.querySelector('.board');

// Cells
const cells = document.querySelectorAll('.cell');

// Turn Classes
const X_CLASS = 'x';
const O_CLASS = 'o';
let xTurn = X_CLASS;


function newGame() {
    const twoPlayerButton = document.querySelector('[data-two-player]');
    const aiButton = document.querySelector('[data-ai]');
    twoPlayerButton.addEventListener('click', () => setGameMode(PLAYERVSPLAYER), { once: true });
    aiButton.addEventListener('click', () => setGameMode(PLAYERVSAI), { once: true });

    function setGameMode(mode) {
        if (mode === PLAYERVSPLAYER) {
            gameMode = PLAYERVSPLAYER;
            renderGame();
            cells.forEach((cell) => {
                cell.addEventListener('click', playGameVsPlayer, { once : true })
            });
            setBoardHoverClass();
        } else {
            gameMode = PLAYERVSAI;
            renderGame();
        }
    }
    
    function renderGame(gameMode) {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
    
        modal.removeAttribute('id');
        overlay.removeAttribute('id');
    }
}

function playGameVsPlayer(e) {
    const cell = e.target;
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    placeMark(cell, currentClass);
    swapTurn();
    setBoardHoverClass();
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

newGame();