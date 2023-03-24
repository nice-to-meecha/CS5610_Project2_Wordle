import React, { useEffect, useState, useContext } from "react";
import { gameContext } from "./GameContext";
import Row from "./Row";
import InactiveRow from "./InactiveRow";
import "../css/Board.css";

function Board(props) {
    const { attempts, difficulty } = props;
    const globalValues = useContext(gameContext);
    const { gameWon, guess } = globalValues;
    const { numGuesses } = globalValues.difficultyValues[difficulty];
    const [guessInputs, setGuessInputs] = useState([]);

    useEffect(() => {
        if (!gameWon &&
            guessInputs.length < attempts + 1 &&
            attempts < numGuesses) {
            setGuessInputs([
                ...guessInputs.slice(0, -1),
                ...(attempts
                    ? [(<InactiveRow
                        prevGuess={guess}
                        key={attempts}
                    />)]
                    : []),
                (<Row key={attempts + 1} />),
            ]);
        } else {
            setGuessInputs([
                ...guessInputs.slice(0, -1),
                (<InactiveRow
                    prevGuess={guess}
                    key={attempts}
                />),
            ]);
        }
    }, [attempts]);

    return(<div className="game-board">
        {guessInputs}
    </div>)
}

export default Board;