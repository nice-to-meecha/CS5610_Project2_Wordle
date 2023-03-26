import React from "react";
import { Link } from "react-router-dom";
import { IoIosHelpCircleOutline } from "react-icons/io";

export default function NavBar(props) {
    return (<div className="navbar">
        {/* <nav> */}
        <div className="rules">
            <Link
                className="navbar-button"
                to="/rules"
            >
                <IoIosHelpCircleOutline className="rules-icon" />
            </Link>
        </div>
        <div className="game-title-container">
            <Link
                className="navbar-button game-title"
                to="/"
            >
                <span className="wordle-word">WORD</span>
                <span className="shifting-letters">LE</span>
            </Link>
        </div>
        <div className="normal-game">
            <Link
                className="navbar-button"
                to="/game/normal"
            >
                <div className="normal-text">Normal</div>
            </Link>
        </div>
        <div className="hard-game">
            <Link
                className="navbar-button"
                to="/game/hard"
            >
                <div className="hard-text">Hard</div>
            </Link>
        </div>
        {/* </nav> */}
    </div>)
}