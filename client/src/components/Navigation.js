import React from 'react';

import ListItem from './ListItem';

const Navigation = () => {
    return <User />;
};

const User = () => {
    return (
        <nav className='nav'>
            <ul>
                <ListItem content={<a href='#'>Welcome UserName</a>} />
            </ul>
            <ul>
                <ListItem content={<a href='#'>My Games</a>} />
                <ListItem content={<a href='#'>Publick Games</a>} />
                <ListItem content={<a href='#'>PocketFEED</a>} />
                <ListItem content={<a href='#'>Rournaments</a>} />
            </ul>
        </nav>
    );
};

const Guest = () => {
    return (
        <nav className='nav'>
            <ul>
                <ListItem content={<a href='#'>Login</a>} />
                <ListItem content={<a href='#'>Register</a>} />
            </ul>
            <ul>
                <ListItem content={<a href='#'>Games</a>} />
                <ListItem content={<a href='#'>Pocket FEED</a>} />
                <ListItem content={<a href='#'>Tournaments</a>} />
            </ul>
        </nav>
    );
};

export default Navigation;
