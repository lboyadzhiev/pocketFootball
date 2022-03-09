import React from 'react';

import './LeftSide.css';

import { FaHome, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
const LeftSide = () => {
    return (
        <div className='left-side'>
            <Img />
            <GameInfo />
        </div>
    );
};

export default LeftSide;

const Img = () => {
    return (
        <div>
            <img
                className='game-image'
                src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='profileImage'
            />
        </div>
    );
};

const GameInfo = () => {
    return (
        <div>
            <div>
                <div>
                    <FaHome className='game-icon' />
                    <span>Kris</span>
                </div>
                <div>
                    <FaEnvelope className='game-icon' />
                    <span>Kris</span>
                </div>
            </div>
            <div>
                <MdLocationOn className='game-icon' />
                <span>Minifutbol Rakovski</span>
            </div>
        </div>
    );
};
