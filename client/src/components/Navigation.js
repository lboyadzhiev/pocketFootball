import React from 'react';

const Navigation = () => {
    return <Guest />;
};

const User = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='#'>Welcome UserName</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>My Games</a>
                </li>
                <li>
                    <a href='#'>Publick Games</a>
                </li>
                <li>
                    <a href='#'>PocketFEED</a>
                </li>
                <li>
                    <a href='#'>Rournaments</a>
                </li>
            </ul>
        </nav>
    );
};

const Guest = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href='#'>Login</a>
                </li>
                <li>
                    <a href='#'>Register</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='#'>Games</a>
                </li>
                <li>
                    <a href='#'>Pocket FEED</a>
                </li>
                <li>
                    <a href='#'>Tournaments</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
