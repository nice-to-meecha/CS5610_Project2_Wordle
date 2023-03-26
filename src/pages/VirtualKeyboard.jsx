import React from "react";
import { AiOutlineEnter } from "react-icons/ai"
import { HiOutlineBackspace } from "react-icons/hi";
import "../css/VirtualKeyboard.css";

export default function VirtualKeyboard(props) {
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', "Backspace"];
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', "Enter"];
    const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    function createRow(codes) {
        return codes.map((code, i) => {
            let representation = code;
            if (representation === "Backspace") {
                representation = (<HiOutlineBackspace />);
            } else if (representation === "Enter") {
                representation = (<AiOutlineEnter />);
            }

            return (<button
                className="key"
                key={i}
                onClick={(event) => dispatchKeyEvent(code)}
            >
                {representation}
            </button>)
        });
    }

    function createKeyboard() {
        return [row1, row2, row3].map((row, i) =>
            (<div
                className="virtual-keyboard-row"
                key={`row${i}`}
            >
                {createRow(row)}
            </div>));
    }

    function dispatchKeyEvent(code) {
        window.dispatchEvent(new KeyboardEvent("keydown", { key: code }))
    }

    const keys = createKeyboard();

    return (<div className="virtual-keyboard">
        {keys}
    </div>);
}