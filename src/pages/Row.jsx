import React, { useState, useContext, useEffect } from "react";
import { gameContext } from "./GameContext";
import VirtualKeyboard from "./VirtualKeyboard";
import "../css/Letter.css";
import TypedLetter from "./TypedLetter";

const MAX_TYPED_WORD_LENGTH = 10;

function Row(props) {
    const { setGuess } = useContext(gameContext);
    const [typedInputs, setTypedInputs] = useState([]);

    // function createWordInputs(wordLength) {
    //     const inputs = [];
    //     const colors = active
    //         ? Array.from({ length: wordLength }, (_) => "white")
    //         : colorGuess();

    //     for (let i = 0; i < wordLength; i++) {
    //         inputs.push(
    //         <Letter
    //             changeEvent={autoAdvance}
    //             key={i}
    //             index={i}
    //             color={colors[i]}
    //         />)
    //     }
        
    //     return inputs;
    // }

    // function autoAdvance(event) {
    //     event.target.value = (event.target.value || "").toUpperCase();
    //     const parentLetter = event.target.parentElement;
    //     if (!event.target.value && parentLetter.previousElementSibling) {
    //         parentLetter.previousElementSibling.firstElementChild.focus();
    //     } else if ((event.target.value && parentLetter.nextElementSibling)) {
    //         parentLetter.nextElementSibling.firstElementChild.focus();
    //     }

    //     const inputIndex = event.target.id.match(/\d$/)[0];
    //     localGuessArr[inputIndex] = event.target.value;
    //     setLocalGuessArr([...localGuessArr]);
    //     setGuess(localGuessArr.join(''));
    // }

    // const inputs = createWordInputs(wordLength);

    function addLetter(letter) {
        // Arrow function grabs state's current value
        // Otherwise, won't work with window event
        setTypedInputs(typedInputs => {
            let newTypedInputs = [...typedInputs];
            if (typedInputs.length < MAX_TYPED_WORD_LENGTH) {
                newTypedInputs.push(
                    (<TypedLetter
                        letter={letter}
                        color="white"
                        key={typedInputs.length}
                    />),
                );
            }

            return newTypedInputs;
        });

        setGuess(guess => {
            let newGuess = guess;
            if (guess.length < MAX_TYPED_WORD_LENGTH) {
                newGuess += letter;
            }
            return newGuess;
        });
    }

    function deleteLetter() {
        setTypedInputs(typedInputs => typedInputs.slice(0, -1));
        setGuess(guess => guess.slice(0, -1));
    }

    function captureLetter(event) {
        const { key } = event;
        if (/^[A-Za-z]$/.test(key)) {
            addLetter(key.toUpperCase());

        } else if (key === "Backspace") {
            deleteLetter();
        }
    }

    useEffect(() => {
        setGuess('');
        window.addEventListener("keydown", captureLetter);

        return () => {
            window.removeEventListener("keydown", captureLetter);
        };
    }, []);

    return (<div className="guess-background">
        {typedInputs}
        <VirtualKeyboard />
    </div>);
}

export default Row;