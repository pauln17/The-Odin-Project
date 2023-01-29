// Game Modes
const playerVsPlayer = 0;
const playerVsAI = 1;
let gameMode;

function newGame() {
    const twoPlayerButton = document.querySelector('[data-two-player]');
    const aiButton = document.querySelector('[data-ai]');
    twoPlayerButton.addEventListener('click', () => setGameMode(playerVsPlayer));
    aiButton.addEventListener('click', () => setGameMode(playerVsAI));

    function setGameMode(mode) {
        if (mode === playerVsPlayer) {
            gameMode = playerVsPlayer;
            renderGame();
        } else {
            gameMode = playerVsAI;
            renderGame();
        }
    }

    function renderGame() {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');

        modal.removeAttribute('id');
        overlay.removeAttribute('id');
    }

}

newGame();