import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (<div className="navbar">
        {/* <nav> */}
        <div className="rules">
            <Link
                className="navbar-button"
                to="/rules"
            >
                Rules
            </Link>
        </div>
        <div className="game-title-container">
            <Link
                className="navbar-button game-title"
                to="/"
            >
                <span className="bigW">W</span><span className="shifting-letters">ORDLE</span>
            </Link>
        </div>
        <div className="normal-game">
            <Link
                className="navbar-button"
                to="/game/normal"
            >
                Normal
            </Link>
        </div>
        <div className="hard-game">
            <Link
                className="navbar-button"
                to="/game/hard"
            >
                Hard
            </Link>
        </div>
        {/* </nav> */}
    </div>)
}