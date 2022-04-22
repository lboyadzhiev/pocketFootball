import React from 'react';
import { NavLink } from 'react-router-dom';

import ListItem from '../../UI/ListItem';

const User = () => {
    return (
        <div className='user'>
            <ul>
                <ListItem>
                    <NavLink to='/profile'>Welcome UserName</NavLink>
                </ListItem>
            </ul>
            <ul>
                <ListItem>
                    <NavLink to='/myGames'>My Games</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/games'>Publick Games</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/'>PocketFEED</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink to='/'>Rournaments</NavLink>
                </ListItem>
            </ul>
        </div>
    );
};

export default User;
