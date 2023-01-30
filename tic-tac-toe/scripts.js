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

const gameStart = (() => {
    const gameIntroduction = () => {
        const twoPlayerButton = document.querySelector('[data-two-player]');
        const aiButton = document.querySelector('[data-ai]');
        twoPlayerButton.addEventListener('click', () => setGameMode(PLAYERVSPLAYER));
        aiButton.addEventListener('click', () => setGameMode(PLAYERVSAI));
    }

    const setGameMode = (mode) => {
        if (mode === PLAYERVSPLAYER) {
            renderGame();
            cells.forEach((cell) => {
                cell.addEventListener('click', gameBoard.playGameVsPlayer, { once : true })
            });
            gameBoard.setBoardHoverClass();
        } else {
            renderGame();
        }
    }

    const renderGame = () => {
        modal.removeAttribute('id');
        overlay.removeAttribute('id');
    }

    return {
        gameIntroduction,
        setGameMode,
        renderGame
    }
})();


const gameBoard = (() => {
    const playGameVsPlayer = (e) => {
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

    const placeMark = (cell, currentClass) => {
        cell.classList.add(currentClass);
    }

    const swapTurn = () => {
        xTurn = !xTurn;
    }

    const setBoardHoverClass = () => {
        board.classList.remove(X_CLASS);
        board.classList.remove(O_CLASS);
    
        if (xTurn) {
            board.classList.add(X_CLASS)
        } else {
            board.classList.add(O_CLASS)
        }
    }

    const checkWin = (currentClassWinner) => {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cells[index].classList.contains(currentClassWinner)
            })
        });
    }

    const checkDraw = () => {
        return [...cells].every((cell) => {
            return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
        })
    }
    
    const endGame = (currentClassWinner) => {
        const gameText = document.querySelector('.game-text');
        if (currentClassWinner === 'x') {
            gameText.innerHTML = 'Player1 WON';
        } else if (currentClassWinner === 'o') {
            gameText.innerHTML = 'Player2 WON';
        } else {
            gameText.innerHTML = 'DRAW';
        }
        modal.setAttribute('id', 'active');
        overlay.setAttribute('id', 'active');
    
        clearBoard();
    }
    
    const clearBoard = () => {
        cells.forEach((cell) => {
            cell.classList.remove(X_CLASS);
            cell.classList.remove(O_CLASS);
        })
        xTurn = X_CLASS;
    }

    return {
        playGameVsPlayer,
        placeMark,
        swapTurn,
        setBoardHoverClass,
        checkWin,
        checkDraw,
        endGame,
        clearBoard
    }
})();

gameStart.gameIntroduction();