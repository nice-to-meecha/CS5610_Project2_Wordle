import React, { useContext } from "react";
import { gameContext } from "./GameContext";
import "../css/EndGame.css";

export default function EndGame(props) {
    const { gameWon } = props;
    const { targetWord } = useContext(gameContext);

    return (<div className="end-game-container">
        
            { gameWon
                ? "Congrats! Would you like to play again?"
                : `The word was ${targetWord}. Better luck next time!`
            }
        
    </div>);
}