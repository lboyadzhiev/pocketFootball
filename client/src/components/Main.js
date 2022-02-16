import React from 'react';

import './Main.css';
import { FaAlignLeft } from 'react-icons/fa';

import Home from './Sections/HomePage/HomePage';
import Registration from '../components/Sections/Registration/Registration';
import Profile from './Sections/Profile/Profile';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__menu-container'>
                <FaAlignLeft className='main__menu' />
            </div>
            <Home />
            <Registration />
            <Profile />
        </div>
    );
};

export default Main;
