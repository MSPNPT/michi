document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    let currentPlayer = 'X';
    const gameBoard = ['', '', '', '', '', '', '', '', ''];

    function renderBoard() {
        board.innerHTML = '';
        gameBoard.forEach((value, index) => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = value;
            square.addEventListener('click', () => makeMove(index));
            board.appendChild(square);
        });
    }

    function makeMove(index) {
        if (gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            checkWinner();
            renderBoard();
        }
    }

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                alert(`${gameBoard[a]} wins!`);
                resetGame();
                return;
            }
        }

        if (!gameBoard.includes('')) {
            alert('It\'s a draw!');
            resetGame();
        }
    }

    function resetGame() {
        gameBoard.fill('');
        currentPlayer = 'X';
        renderBoard();
    }

    renderBoard();
});
