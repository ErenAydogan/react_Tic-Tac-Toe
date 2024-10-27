import { useState } from "react";

const Player = (props) =>
{
    const [playerName, setPlayerName] = useState(props.initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () =>
    {
        setIsEditing( (editing) => !editing )
    }

    const handleChange = (event) =>
    {
        console.log(event)
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing)
    {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return(
    <li>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{props.symbol}</span>
        </span>
        <button onClick={handleEditClick}>{ isEditing ? "Save": "Edit"}</button>
    </li>
    );
}

export default Player;