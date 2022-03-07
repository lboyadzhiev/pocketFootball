import React, { useState } from 'react';

import './Navigation.css';
import User from './User';
import Guest from './Guest';

const Navigation = () => {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <nav className={`nav ${isClicked ? 'show' : ''}`}>
            <User />
        </nav>
    );
};

export default Navigation;
