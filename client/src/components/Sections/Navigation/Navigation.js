import React, { useState } from 'react';

import './Navigation.css';
import User from './User';
import Guest from './Guest';

const Navigation = () => {
    const [isClicked, setIsClicked] = useState(true);
    return (
        <nav className={`nav ${isClicked ? 'show' : ''}`}>
            <Guest />
        </nav>
    );
};

export default Navigation;
