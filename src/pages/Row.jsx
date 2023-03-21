import React, { useState, useContext, useEffect } from "react";
import { gameContext } from "./GameContext";
import Letter from "./Letter";
import "../css/Letter.css";

function Row(props) {
    const { active, wordLength } = props;
    const { guess, setGuess, targetWord } = useContext(gameContext);
    const [localGuessArr, setLocalGuessArr] = 
        useState(Array.from({ length: wordLength }, (ele) => ''));

    function createWordInputs(wordLength) {
        const inputs = [];
        const colors = active
            ? Array.from({ length: wordLength }, (_) => "white")
            : colorGuess();

        for (let i = 0; i < wordLength; i++) {
            inputs.push(
            <Letter
                changeEvent={autoAdvance}
                key={i}
                index={i}
                color={colors[i]}
            />)
        }
        
        return inputs;
    }

    function autoAdvance(event) {
        event.target.value = (event.target.value || "").toUpperCase();
        const parentLetter = event.target.parentElement;
        if (!event.target.value && parentLetter.previousElementSibling) {
            parentLetter.previousElementSibling.firstElementChild.focus();
        } else if ((event.target.value && parentLetter.nextElementSibling)) {
            parentLetter.nextElementSibling.firstElementChild.focus();
        }

        const inputIndex = event.target.id.match(/\d$/)[0];
        localGuessArr[inputIndex] = event.target.value;
        setLocalGuessArr([...localGuessArr]);
        setGuess(localGuessArr.join(''));
    }

    function colorGuess() {
        // Determine correct and missing letters
        const colors = Array.from({ length: wordLength }, (_) => "gray");
        const missingLetters = {};
        localGuessArr.forEach((letter, i) => {
            if (letter === targetWord[i]) {
                colors[i] = "green"
            } else {
                missingLetters[targetWord[i]] = (missingLetters[targetWord[i]] || 0) + 1;
            }
        })

        if (!Object.keys(missingLetters).length) {
            // TODO - "Congrats!" event
        } else {
            colors.forEach((color, i) => {
                if (color === "gray" && missingLetters[localGuessArr[i]]) {
                    missingLetters[localGuessArr[i]]--;
                    colors[i] = "yellow";
                }
            });
        }

        return colors;
    }


    const inputs = createWordInputs(wordLength);


    return (<div className="guess-background">
        {inputs}
        {guess}
    </div>);
}

export default Row;