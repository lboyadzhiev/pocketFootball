import React from 'react';

import './MenuIcon.css';

import { FaAlignLeft } from 'react-icons/fa';

const MenuIcon = () => {
    return (
        <div className='main__menu-container'>
            <FaAlignLeft className='main__menu' />
        </div>
    );
};

export default MenuIcon;
