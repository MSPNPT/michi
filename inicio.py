def imprimir_tablero(tablero):
    for fila in tablero:
        print("|".join(fila))
        print("-----")


def verificar_ganador(tablero, jugador):
    # Verificar filas y columnas
    for i in range(3):
        if all(tablero[i][j] == jugador for j in range(3)) or all(tablero[j][i] == jugador for j in range(3)):
            return True

    # Verificar diagonales
    if all(tablero[i][i] == jugador for i in range(3)) or all(tablero[i][2 - i] == jugador for i in range(3)):
        return True

    return False


def jugar_michi():
    tablero = [[" " for _ in range(3)] for _ in range(3)]
    jugadores = ['X', 'O']
    turno = 0

    while True:
        imprimir_tablero(tablero)
        jugador_actual = jugadores[turno % 2]

        fila = int(input(f"Jugador {jugador_actual}, elige una fila (0, 1, 2): "))
        columna = int(input(f"Jugador {jugador_actual}, elige una columna (0, 1, 2): "))

        if tablero[fila][columna] == " ":
            tablero[fila][columna] = jugador_actual
            if verificar_ganador(tablero, jugador_actual):
                imprimir_tablero(tablero)
                print(f"¡Jugador {jugador_actual} gana!")
                break
            elif all(tablero[i][j] != " " for i in range(3) for j in range(3)):
                imprimir_tablero(tablero)
                print("¡Empate!")
                break
            turno += 1
        else:
            print("Esa casilla ya está ocupada. Elige otra.")

if __name__ == "__main__":
    jugar_michi()
