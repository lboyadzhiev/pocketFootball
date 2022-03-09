import React from 'react';

import './Game.css';

import HeadingFourth from '../../typography/HeadingFourth';
import GameContent from './GameContent';

const Game = () => {
    return (
        <div className='game'>
            <HeadingFourth content='my games heading' />
            <GameContent />
        </div>
    );
};

export default Game;
