let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let xScore = 0;
let oScore = 0;

const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const scoreDisplay = document.getElementById('score');

// สร้างตาราง 3x3
function createBoard() {
    grid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.index = i;
        square.addEventListener('click', handleClick);
        grid.appendChild(square);
    }
}
createBoard();

function handleClick(event) {
    const index = event.target.dataset.index;

    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer.toLowerCase());

    if (checkWinner()) {
        highlightWinner();
        gameActive = false;
        setTimeout(() => {
            alert(`${currentPlayer} wins!`);
            updateScore();
        }, 100);
    } else if (board.every(square => square !== '')) {
        setTimeout(() => alert('It\'s a draw!'), 100);
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.find(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[b] === board[c];
    });
}

function highlightWinner() {
    const winPattern = checkWinner();
    if (winPattern) {
        winPattern.forEach(index => {
            document.querySelectorAll('.square')[index].classList.add('winner');
        });
    }
}

function updateScore() {
    if (currentPlayer === 'X') xScore++;
    else oScore++;

    scoreDisplay.textContent = `X: ${xScore} - O: ${oScore}`;
}

function resetGame() {
    board.fill('');
    gameActive = true;
    currentPlayer = 'X';
    createBoard();
}

resetButton.addEventListener('click', resetGame);
