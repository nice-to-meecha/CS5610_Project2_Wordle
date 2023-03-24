import React, { useContext } from "react";
import TypedLetter from "./TypedLetter";
import { gameContext } from "./GameContext";
import "../css/Letter.css";

export default function InactiveRow(props) {
    const { prevGuess } = props;
    const { targetWord } = useContext(gameContext);

    function colorLetters() {
        // Determine correct and missing letters
        const colors = Array.from({ length: prevGuess.length }, (_) => "gray");
        const missingLetters = {};
        for (let i = 0, length = prevGuess.length; i < length; i++) {
            const letter = prevGuess[i];
            if (letter === targetWord[i]) {
                colors[i] = "green"
            } else {
                missingLetters[targetWord[i]] = (missingLetters[targetWord[i]] || 0) + 1;
            }
        }

        if (Object.keys(missingLetters).length) {
            colors.forEach((color, i) => {
                if (color === "gray" && missingLetters[prevGuess[i]]) {
                    missingLetters[prevGuess[i]]--;
                    colors[i] = "yellow";
                }
            });
        }

        return colors;
    }

    const inactiveLetters = colorLetters().map((color, i) =>
        (<TypedLetter
            letter={prevGuess[i]}
            color={color}
            key={i}
        />)
    );

    return (<div className="guess-background">
        {inactiveLetters}
    </div>);
}