import Player from "./components/Player"


function App() {
  

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="0" />
            <Player initialName="Player 1" symbol="X" />
          </ol>
          GAME BOARD
        </div>
        LOG
      </main>
    </>
  )
}

export default App