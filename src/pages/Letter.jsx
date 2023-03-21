import React from "react";
import "../css/Letter.css"

// Remember to associate event with Letter parent, so autoAdvance() works
function Letter(props) {
    const { color, changeEvent, index } = props;
    return (<div>
        <input 
            className={`letter-box ${color}-letter-box`}
            onChange={changeEvent}
            maxLength={1}
            id={`letter-box-${index}`}
        />
    </div>)
}

export default Letter;