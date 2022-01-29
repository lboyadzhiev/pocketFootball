import React from 'react';

import ListItem from './ListItem';

const Navigation = () => {
    return <User />;
};

const User = () => {
    return (
        <nav className='nav'>
            <ul>
                <ListItem>
                    <a href='#'>Welcome UserName</a>
                </ListItem>
            </ul>
            <ul>
                <ListItem>
                    <a href='#'>My Games</a>
                </ListItem>
                <ListItem>
                    <a href='#'>Publick Games</a>
                </ListItem>
                <ListItem>
                    <a href='#'>PocketFEED</a>
                </ListItem>
                <ListItem>
                    <a href='#'>Rournaments</a>
                </ListItem>
            </ul>
        </nav>
    );
};

const Guest = () => {
    return (
        <nav className='nav'>
            <ul>
                <ListItem>
                    <a href='#'>Login</a>
                </ListItem>
                <ListItem>
                    <a href='#'>Register</a>
                </ListItem>
            </ul>
            <ul>
                <ListItem>
                    <a href='#'>Games</a>
                </ListItem>
                <ListItem>
                    <a href='#'>Pocket FEED</a>
                </ListItem>
                <ListItem>
                    <a href='#'>Tournaments</a>
                </ListItem>
            </ul>
        </nav>
    );
};

export default Navigation;
