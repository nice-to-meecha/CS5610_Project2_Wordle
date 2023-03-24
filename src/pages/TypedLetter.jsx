import React from "react";

export default function TypedLetter(props) {
    const { letter, color } = props;

    return(<div className={`letter-box ${color}-letter-box`}>
        {letter}
    </div>);
}