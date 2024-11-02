import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

const deriveActivePlayer = (gameTurns) =>
{
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X")
  {
    currentPlayer = "0";
  }

  return currentPlayer;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  /* const [activePlayer, setActivePlayer] = useState("X"); */

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) =>
  {
    /* setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "0" : "X"); */
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={ activePlayer === 'X' }/>
            <Player initialName="Player 2" symbol="0" isActive={ activePlayer === '0' }/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>
        <Log turns={gameTurns}/>
      </main>   
    </>
  )
}

export default App