import React, { useState, useEffect, useContext } from "react";
import Board from "./Board";
import Congrats from "./Congrats";
import { gameContext } from "./GameContext";
import "../css/Game.css";

/*

    On the game page, users should have a prompt to input a word that is the
    length defined by the difficulty level.
    
    If the user inputs the correct word, you should display a congratulations
    at the top of the screen. If they chose an incorrect word, you will give
    them clues based on the location of the letters in the word by highlighting
    certain letters.

        Green: letters is in the correct spot
        Yellow: letter is present in the secret word but is in the incorrect
                place
        Gray: letter is not in the word

    If the word is too short or long, you should show a message at the top but
    will not deduct any attempts.
    
    Here is an example flow: 
        1. Game secretly selects the word “Fellow”.  The screen prompts the
           user to input a 6 letter word and shows that they have 6 attempts
           remaining.
        2. User submits the word “hat.”
        3. Since “hat” is too short, the game prompts a longer word and does
           not deduct any attempts.
        4. The user submits in “Allows”.
        5. The game shows “ALLOWS” and since this is not the current word it
           shows the user has 1 less attempt.
        6. The user submits “Fellow”.
        7. The game shows “Congratulations!  Would you like to try again?
*/

function Game(props) {
    const { difficulty } = props;
    const globalValues = useContext(gameContext);
    const { guess, targetWord, setTargetWord, gameWon, setGameWon } = globalValues;
    const { numGuesses, wordList, wordLength } = globalValues.difficultyValues[difficulty];
    const [ attempts, setAttempts ] = useState(0);
    const [ boardKey, setBoardKey ] = useState(true);
    
    useEffect(() => {
        selectWord();
    }, [])

    async function selectWord() {
        fetch(wordList)
            .then(response => response.text())
            .then(data => {
                const words = data.split("\n").map(word => word.trim());
                const i = Math.round(Math.random() * (words.length - 1));
                setTargetWord(words[i].toUpperCase());
            });
    }

    function checkAttempt() {
        if (attempts < numGuesses && guess.length === wordLength) {
            if (guess === targetWord) {
                setGameWon(true);
            }
            setAttempts(attempts + 1);

        } else {
            alert(`Try a ${guess.length < wordLength ? "longer" : "shorter"} word!`);

        }
    }

    function reset() {
        selectWord();
        setAttempts(0);
        setBoardKey(!boardKey);
        setGameWon(false);
    }
     
    return (<div>
        <h1>This is the {difficulty} game page!</h1>
        <div>Please select a {wordLength}-letter word:</div>
        <h4>The word is {targetWord}</h4>
        <div>Remaining attempts: {numGuesses - attempts}</div>
        <button
            onClick={checkAttempt}
            disabled={gameWon || attempts >= numGuesses }
        >
            Submit
        </button>
        <button
            onClick={reset}
        >
            Reset
        </button>
        <div className="board-container">
            <Board
                attempts={attempts}
                difficulty={difficulty}
                wordLength={wordLength}
                key={boardKey}
            />
        </div>
    </div>);
}

export default Game;