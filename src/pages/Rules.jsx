import React from "react";
import TypedLetter from "./TypedLetter";
import "../css/Letter.css";
import "../css/Rules.css";

export default function Rules() {
    function colorLetters(word, colorLocations) {
        const coloredLetters = word.toUpperCase().split('').map((letter, i) => 
            (<TypedLetter
                letter={letter}
                color={colorLocations[i] || "gray"}
                key={i}
            />)
        );

        return <div className="guess-background">
            {coloredLetters}
        </div>
    }
    return (<div className="content">
        <h1>Rules</h1>
        <ul className="rules-container">
            <li>Try guessing the secret word, in the allotted number of tries:</li>
                <ul>
                    <li>
                        In <strong>normal</strong> mode, you'll have 6 tries to guess
                        the 6-letter word
                    </li>
                    <li>
                        In <strong>hard</strong> mode, you'll have 5 tries to guess
                        the 7-letter word
                    </li>
                </ul>
            <li>
                With each guess, the background color of the letters will change
                to corral you to the correct word:
                <br />
                Say the correct word is <strong>REGRET</strong> and you
                guess <strong>CARROT</strong>, output will look like this:
            </li>
        </ul>
            {colorLetters("carrot", ["gray", "gray", "green", "yellow", "gray", "green"])}
        <ul className="rules-container">
            <li>
                Green means the letter is in the right spot
            </li>
            <li>
                Yellow means the letter is found in the secret word
                but in a different location
            </li>
            <li>
                Gray means the letter is nowhere to be found in the secret word
                (aka try something else!)
            </li>
        </ul>
    </div>);
}
