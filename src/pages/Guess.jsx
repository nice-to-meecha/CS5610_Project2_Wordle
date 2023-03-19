import React, { useState, useContext, useEffect } from "react";
import { gameContext } from "./GameContext";
import "../css/Guess.css";

function Guess(props) {
    const { wordLength } = props;
    const { setGuess } = useContext(gameContext);
    const [localGuessArr, setLocalGuessArr] = 
        useState(Array.from({ length: wordLength }, (ele) => ''));

    function autoAdvance(event) {
        event.target.value = (event.target.value || "").toUpperCase();
        if (!event.target.value && event.target.previousElementSibling) {
            event.target.previousElementSibling.focus();
        } else if ((event.target.value && event.target.nextElementSibling)) {
            event.target.nextElementSibling.focus();
        }

        const inputIndex = event.target.id.match(/\d$/)[0];
        localGuessArr[inputIndex] = event.target.value;
        setLocalGuessArr([...localGuessArr]);
        setGuess(localGuessArr.join(''));
    }

    function createWordInputs(wordLength) {
        const inputs = [];
        for (let i = 0; i < wordLength; i++) {
            inputs.push(
            <input
                className="letter-box"
                onChange={autoAdvance}
                maxLength={1}
                key={i}
                id={`letter-box-${i}`}
            />)
        }
        return inputs;
    }

    const inputs = createWordInputs(wordLength);

    return (<div className="guess-background">
        {inputs}
    </div>);
}

export default Guess;