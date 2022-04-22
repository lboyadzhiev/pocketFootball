import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from '../../UI/ListItem';
const Guest = () => {
    return (
        <div className='guest'>
            <ul>
                <ListItem>
                    <NavLink to='/login'>Login</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/register'>Register</NavLink>
                </ListItem>
            </ul>
            <ul>
                <ListItem>
                    <NavLink to='/games'>Games</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/'>Pocket FEED</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/'>Tournaments</NavLink>
                </ListItem>
            </ul>
        </div>
    );
};

export default Guest;
