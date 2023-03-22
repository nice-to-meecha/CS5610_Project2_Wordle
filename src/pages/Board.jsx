import React, { useEffect, useState, useContext } from "react";
import Congrats from "./Congrats";
import { gameContext } from "./GameContext";
import Guess from "./Row";
import "../css/Board.css";

function Board(props) {
    const { attempts, difficulty, wordLength } = props;
    const globalValues = useContext(gameContext);
    const { gameWon } = globalValues;
    const { numGuesses } = globalValues.difficultyValues[difficulty];
    const [guessInputs, setGuessInputs] = useState([]);

    useEffect(() => {
        if (!gameWon &&
            guessInputs.length < attempts + 1 &&
            attempts < numGuesses) {
            setGuessInputs([
                ...guessInputs.slice(0, -1),
                ...(guessInputs.slice(-1).length
                    ? [React.cloneElement(...guessInputs.slice(-1), { active: false })]
                    : []
                ),
                (<Guess
                    active={true}
                    wordLength={wordLength}
                    key={attempts}
                />),
            ]);
        } else {
            setGuessInputs([
                ...guessInputs.map(guess => React.cloneElement(guess, { active: false }))
            ]);
        }
    }, [attempts])

    return(<div className="game-board">
        {guessInputs}
        {gameWon && <Congrats />}
    </div>)
}

export default Board;