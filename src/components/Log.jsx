const Log = ( props ) =>
{
    return (
        <>
         <ol id="log">
            {props.turns.map((turn, index) => <li key={index}>{turn.player} selected {`${turn.square.row} - ${turn.square.col}`}</li>)}
         </ol>
        </>
    );
}

export default Log;