import React, { createContext, useState } from "react";
import normalWords from "../data/normal_words.txt";
import hardWords from "../data/hard_words.txt";

export const gameContext = createContext();

function GameContext(props) {
    const [guess, setGuess] = useState("");
    const [inProgressGuess, setInProgressGuess] = useState([]);
    const [targetWord, setTargetWord] = useState("");
    const difficultyValues = {
        normal: {
            numGuesses: 6,
            wordLength: 6,
            wordList: normalWords,
        },
    
        hard: {
            numGuesses: 5,
            wordLength: 7,
            wordList: hardWords,
        },
    };

    const globalValues = {
        guess,
        setGuess,
        inProgressGuess,
        setInProgressGuess,
        targetWord,
        setTargetWord,
        difficultyValues,
    };

    return(<gameContext.Provider value={globalValues}>
        {props.children}
    </gameContext.Provider>)
}

export default GameContext;