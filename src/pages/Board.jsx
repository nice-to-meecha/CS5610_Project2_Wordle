import React, { useEffect, useState, useContext } from "react";
import { gameContext } from "./GameContext";
import Guess from "./Guess";

function Board(props) {
    const { attempts, difficulty, wordLength } = props;
    const globalValues = useContext(gameContext);
    const { numGuesses } = globalValues.difficultyValues[difficulty];
    const [guessInputs, setGuessInputs] = useState([]);

    useEffect(() => {
        if (guessInputs.length < attempts + 1 && attempts < numGuesses) {
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
        }
    }, [attempts])

    return(<div>
        {guessInputs}
    </div>)
}

export default Board;