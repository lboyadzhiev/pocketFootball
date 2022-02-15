import React from 'react';

import ListItem from '../../UI/ListItem';

const User = () => {
    return (
        <div className='user'>
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
        </div>
    );
};

export default User;
