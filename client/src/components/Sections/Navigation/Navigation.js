import React from 'react';

import './Navigation.css';
import User from './User';
import Guest from './Guest';

const Navigation = () => {
    return (
        <nav className='nav'>
            <User />
        </nav>
    );
};

export default Navigation;
