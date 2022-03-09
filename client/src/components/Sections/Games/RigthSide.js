import React from 'react';

import './RigthSide.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const RigthSide = () => {
    return (
        <div className='rigth-side'>
            <div>10/12</div>
            <FaCheck className='game-icon' />
            <FaTimes className='game-icon' />
        </div>
    );
};

export default RigthSide;
