import React from 'react';

import './Content.css';
import HeadingPrimary from '../../typography/HeadingPrimary';
import Login from '../Login/Login';

const Content = () => {
    return (
        <div className='text-box'>
            <Login />
        </div>
    );
};

export default Content;

/*
            <HeadingPrimary>
                <span className='heading-primary--main'>Pocket football</span>
                <span className='heading-primary--sub'>where the game is starting</span>
            </HeadingPrimary>
*/
