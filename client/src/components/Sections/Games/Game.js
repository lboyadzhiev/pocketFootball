import React from 'react';

import HeadingFourth from '../../typography/HeadingFourth';
import GameContent from './GameContent';

const Game = () => {
    return (
        <div>
            <HeadingFourth content='my games heading' />
            <GameContent />
        </div>
    );
};

export default Game;
