import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Welcome.css";

/*
    When users enter your app, they should see a welcome page that contains
    nothing but the title of the game and links to a “rules” page and the main
    “game” page.

    When the user comes to your landing page, they should be able to select one
    of 2 difficulties for this game.  This should redirect them to a specific URL
    so that users The difficulties are as follows:
        - In a normal game, the user will have to find 6 letter words and be given
          only 6 opportunities.  This should be found at url
          http://<domainname>.com/game/normal.
        - A hard game will use 7 letter words and only have 5 opportunities to
        answer. This should be found at url http://<domainname>.com/game/hard.

    The difficulty should be handled in the URL, so if a user refreshes the page
    or shares the link with a friend, that same difficulty will be selected.
*/

function Welcome() {
    return (<div className="welcome">
        <div className="game-link-container">
            <Link to='/game/normal' className="link normal-background game-link"><div className="link-text">Normal</div></Link>
            <Link to='/game/hard' className="link hard-background game-link"><div className="link-text">Hard</div></Link>
        </div>
        <div className="welcome-rules">
            <Link to='/rules' className="link rules-background"><div className="link-text">Rules</div></Link>
        </div>
    </div>);
}

export default Welcome;