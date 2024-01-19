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

            // Verificar si hay un ganador (lógica del juego aquí)

            // Cambiar al siguiente jugador
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    // Agregar oyente de eventos a las celdas del tablero
    board.addEventListener("click", handleCellClick);

    // Ejemplo: Actualizar el marcador cuando hay un ganador
    function updateScore(winner) {
        if (winner === "X") {
            playerXScore++;
        } else if (winner === "O") {
            playerOScore++;
        }

        playerXScoreElement.textContent = `Victorias de Jugador X: ${playerXScore}`;
        playerOScoreElement.textContent = `Victorias de Jugador O: ${playerOScore}`;
    }

    // Lógica del juego (ejemplo simple)
    // Debes implementar la lógica completa para determinar el ganador

    // Ejemplo: Función para verificar si hay un ganador
    function checkForWinner() {
        // Implementa la lógica para verificar si hay un ganador
        // y llama a updateScore con el jugador ganador si es necesario
        // ...

        // Ejemplo: Actualizar el marcador (simulado)
        updateScore(currentPlayer);
    }

    // Puedes agregar más funciones y lógica del juego según sea necesario
});
