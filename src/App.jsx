import { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import winning_combinations from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length > 0 && gameTurns[0].player === "X" ? "0" : "X";
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [winner, setWinner] = useState(null);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = initialGameBoard.map(row => [...row]);

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  useEffect(() => {
    let foundWinner = null;

    for (const combination of winning_combinations) {
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        foundWinner = firstSquareSymbol;
        break;
      }
    }

    setWinner(foundWinner);
  }, [gameTurns]);

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (winner || gameBoard[rowIndex][colIndex]) return;

    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  function handleRestart()
  {
    setGameTurns([]);
    setWinner(null);
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="0"
              isActive={activePlayer === "0"}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onClick={handleRestart} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
