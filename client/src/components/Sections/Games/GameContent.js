import React from 'react';

import './GameContent.css';

const GameContent = () => {
    return (
        <div>
            <Img />
        </div>
    );
};

export default GameContent;

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
    return <div></div>;
};
