import React, { useEffect, useState, useContext } from "react";
import { gameContext } from "./GameContext";
import Guess from "./Guess";

function Board(props) {
    const { attempts, difficulty, wordLength } = props;
    const globalValues = useContext(gameContext);
    const { numGuesses } = globalValues.difficultyValues[difficulty];
    const [ guessInputs, setGuessInputs ] = useState([]);

    useEffect(() => {
        if (guessInputs.length < attempts + 1 && attempts < numGuesses) {
            guessInputs.push(<Guess
                wordLength={wordLength}
                key={attempts}
            />);
            setGuessInputs([...guessInputs]);
        }
    }, [attempts])

    return(<div>
        {guessInputs}
        {attempts}
    </div>)
}

export default Board;