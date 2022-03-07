import React, { useState } from 'react';

import './Main.css';
import { FaAlignLeft } from 'react-icons/fa';

import Home from './Sections/HomePage/HomePage';
import Registration from '../components/Sections/Registration/Registration';
import Profile from './Sections/Profile/Profile';
import EditProfile from './Sections/Profile/EditProfile';
import MenuIcon from './UI/MenuIcon';

const Main = () => {
    return (
        <div className='main'>
            <MenuIcon />
            <Home />
            <Registration />
            <Profile />
            <EditProfile />
        </div>
    );
};

export default Main;
