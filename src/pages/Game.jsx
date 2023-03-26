import React, { useState, useEffect, useContext } from "react";
import Board from "./Board";
import EndGame from "./EndGame";
import VirtualKeyboard from "./VirtualKeyboard";
import { gameContext } from "./GameContext";
import "../css/Game.css";
import PopUp from "./PopUp";

function Game(props) {
    const { difficulty } = props;
    const globalValues = useContext(gameContext);
    const { guess, targetWord, setTargetWord, gameWon, setGameWon } = globalValues;
    const { numGuesses, wordList, wordLength } = globalValues.difficultyValues[difficulty];
    const [ attempts, setAttempts ] = useState(0);
    const [ boardKey, setBoardKey ] = useState(true);
    const [ endGame, setEndGame ] = useState(false);
    const [ wordSet, setWordSet ] = useState(new Set());
    const [ showWarning, setShowWarning ] = useState(false);
    const [ message, setMessage ] = useState('');
    
    async function makeWordSet() {
        fetch(wordList)
            .then(response => response.text())
            .then(data => {
                const newWordSet = new Set(data.split("\n").map(word => word.trim().toUpperCase()))
                setWordSet(newWordSet);
                selectWord(newWordSet);
            });
    }

    useEffect(() => {
        makeWordSet();
    }, []);

    function selectWord(words = new Set()) {
        let wordCollection = words;
        if (!wordCollection.size) {
            wordCollection = wordSet;
        }
        const i = Math.round(Math.random() * (wordCollection.size - 1));
        setTargetWord(Array.from(wordCollection)[i]?.toUpperCase() || "");
        // console.log(words[i].toUpperCase());
    }

    function reset() {
        selectWord();
        setAttempts(0);
        setBoardKey(!boardKey);
        setGameWon(false);
        setEndGame(false);
    }

    useEffect(() => {
        if (gameWon || attempts >= numGuesses) {
            setEndGame(true);
        }
    }, [gameWon, attempts]);

    useEffect(() => {
        makeWordSet();
        reset();
    }, [difficulty]);

    async function showWarningPopup() {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 5000);
    }

    useEffect(() => {
         function checkAttempt(event) {
            const { key } = event;
            if (key !== "Enter" || endGame) {
                return;

            } else if (guess.length !== wordLength) {
                setMessage(`Try a ${guess.length < wordLength ? "longer" : "shorter"} word!`);
                showWarningPopup();
                

            } else if (!wordSet.has(guess)) {
                setMessage("Not in the dictionary");
                showWarningPopup();

            } else {
                if (guess === targetWord) {
                    setGameWon(true);
                }
                setAttempts(attempts + 1);
            }
        }
        
        window.addEventListener("keydown", checkAttempt);
        return () => {
            window.removeEventListener("keydown", checkAttempt);
        }
    }, [attempts, guess, targetWord, endGame, gameWon]);

    return (<div className="content">
        { endGame
            ? <EndGame gameWon={gameWon} />
            : showWarning
                ? <PopUp message={message} color="orange"/>
                : <></>
        }
        <div>Please select a {wordLength}-letter word</div>
        <div>Remaining attempts: <strong>{numGuesses - attempts}</strong></div>
        <div className="board-container">
            <Board
                attempts={attempts}
                difficulty={difficulty}
                wordLength={wordLength}
                key={boardKey}
            />
        </div>
        <button
            onClick={reset}
            hidden={!endGame}
        >
            Reset
        </button>
        <VirtualKeyboard />
    </div>);
}

export default Game;