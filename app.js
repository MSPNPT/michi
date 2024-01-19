document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    const board = document.getElementById("board");
    const playerXInput = document.getElementById("playerX");
    const playerOInput = document.getElementById("playerO");
    const playerXScoreElement = document.getElementById("playerXScore");
    const playerOScoreElement = document.getElementById("playerOScore");

    let currentPlayer = "X";
    let playerXScore = 0;
    let playerOScore = 0;

    // Función para manejar el clic en las celdas
    function handleCellClick(event) {
        const cell = event.target;
        const cellId = cell.id;

        if (!cell.classList.contains("occupied-x") && !cell.classList.contains("occupied-o")) {
            cell.textContent = currentPlayer;
            cell.classList.add(`occupied-${currentPlayer}`);

            // Verificar si hay un ganador después de cada movimiento
            if (checkForWinner()) {
                updateScore(currentPlayer);
                resetGame();
            } else {
                // Cambiar al siguiente jugador
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    // Agregar oyente de eventos a las celdas del tablero
    board.addEventListener("click", handleCellClick);

    // Función para verificar si hay un ganador
    function checkForWinner() {
        const lines = [
            // Horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // Vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // Diagonal
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const line of lines) {
            const [a, b, c] = line;
            const cells = document.querySelectorAll(`#cell-${a}, #cell-${b}, #cell-${c}`);

            if (
                cells[0].classList.contains(`occupied-${currentPlayer}`) &&
                cells[1].classList.contains(`occupied-${currentPlayer}`) &&
                cells[2].classList.contains(`occupied-${currentPlayer}`)
            ) {
                return true; // Hay un ganador
            }
        }

        return false; // No hay un ganador
    }

    // Función para actualizar el marcador
    function updateScore(winner) {
        if (winner === "X") {
            playerXScore++;
        } else if (winner === "O") {
            playerOScore++;
        }

        playerXScoreElement.textContent = `Victorias de Jugador X: ${playerXScore}`;
        playerOScoreElement.textContent = `Victorias de Jugador O: ${playerOScore}`;
    }

    // Función para reiniciar el juego
    function resetGame() {
        const cells = document.querySelectorAll('.square');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('occupied-x', 'occupied-o');
        });

        currentPlayer = "X";
    }
});

