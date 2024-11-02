

const GameBoard = ( props ) =>
{


/*     const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSquare = (rowIndex, colIndex) =>
    {
        setGameBoard( (prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = props.activePlayerSymbol;
            return updatedBoard;
        });
        props.onSelectSquare();
    }
 */
    return (
        <>
        <ol id="game-board">
            {
                props.board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol, colIndex) =>(
                                    <li key={colIndex}>
                                        <button onClick={() => props.onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                                    </li>
                                    )
                                )
                            }
                        </ol>
                    </li>
                    )
                )
            }
        </ol>
        </>
    );

}

export default GameBoard;