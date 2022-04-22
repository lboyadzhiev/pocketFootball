import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './Main.css';
import { FaAlignLeft } from 'react-icons/fa';

import Home from './Sections/HomePage/HomePage';
import Registration from '../components/Sections/Registration/Registration';
import Login from './Sections/Login/Login';
import Profile from './Sections/Profile/Profile';
import EditProfile from './Sections/Profile/EditProfile';
import MenuIcon from './UI/MenuIcon';
import Games from './Sections/Games/Games';

const Main = () => {
    return (
        <div className='main'>
            <MenuIcon />
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/register'>
                    <Registration />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/editProfile/:profileId'>
                    <EditProfile />
                </Route>
                <Route path='/games'>
                    <Games />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;
