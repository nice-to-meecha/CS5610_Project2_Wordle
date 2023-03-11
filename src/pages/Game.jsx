import React, { useState, useEffect } from 'react';
import * as fs from "fs";
import normalWords from "../data/normal_words.txt"
import hardWords from "../data/hard_words.txt"

const difficultyValues = {
    normal: {
        numGuesses: 6,
        wordList: normalWords,
    },

    hard: {
        numGuesses: 5,
        wordList: hardWords,
    },
};

function Game(props) {
    const { difficulty } = props;
    console.log(difficulty);

    const [ word, setWord ] = useState("");
    const [ board, setBoard ] = useState([]);
    
    useEffect(() => {
        async function selectWord() {
            fetch(difficultyValues[difficulty].wordList)
                .then(response => response.text())
                .then(data => {
                    const words = data.split("\n").map(word => word.trim());
                    const i = Math.round(Math.random() * (words.length - 1));
                    console.log(words);
                    setWord(words[i]);
                });
        }

        selectWord();
    }, [])
    
    useEffect(() => {
        function createBoard() {
            const numGuesses = difficultyValues[difficulty].numGuesses;
            const wordGuesses = [];
            for (let i = 0; i < numGuesses; i++) {
                wordGuesses.push((<div key={i}>
                    <input id={`guess${i + 1}`} disabled />
                </div>));
            }
        
            setBoard(wordGuesses);
        }
    
        createBoard();
    }, [])
    
    return (<div>
        <h1>This is the {props.difficulty} game page!</h1>
        <h4>The word is {word}</h4>
        {board}
        </div>);
}

export default Game;