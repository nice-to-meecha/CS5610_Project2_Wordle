import React, { useState } from "react";
import "../css/Guess.css";

function Guess(props) {
    const { wordLength } = props;
    const [guess, setGuess] = useState("");
    const boxes = createBoxBackground(wordLength);

    return (<div className="guess-background">
        {boxes}
        <input
            className="guess-input"
            autoFocus={true}
            onChange={allCaps}
        />
    </div>);
}

function allCaps(event) {
    event.target.value = (event.target.value || "").toUpperCase();
}

function createBoxBackground(wordLength) {
    const boxes = [];
    for (let i = 0; i < wordLength; i++) {
        boxes.push(<div className="letter-box" />)
    }
    return boxes;
}

export default Guess;