import React from 'react';

import './Games.css';

import Game from './Game';

const Games = () => {
    return (
        <div className='gamesSection'>
            <Game />
            <Game />
            <Game />
            <Game />
        </div>
    );
};

export default Games;
