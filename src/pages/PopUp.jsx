import React from "react";
import "../css/PopUp.css";

export default function PopUp(props) {
    const { message, color } = props;

    return (<div className={`popup popup-${color}`}>
        {message}
    </div>);
}