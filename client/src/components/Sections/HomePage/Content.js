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
