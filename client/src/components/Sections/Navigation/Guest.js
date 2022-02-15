import React from 'react';

import ListItem from '../../UI/ListItem';
const Guest = () => {
    return (
        <div className='guest'>
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
        </div>
    );
};

export default Guest;
