import React from 'react';

import './GameContent.css';

import LeftSide from './LeftSide';
import RigthSide from './RigthSide';
const GameContent = () => {
    return (
        <div className='game-content'>
            <LeftSide />
            <RigthSide />
        </div>
    );
};

export default GameContent;
