import React from 'react';

import Button from './Button';
import ListItem from './ListItem';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__text'>
                <h2 className='heading-secondary'>Join Pocket Football community</h2>
                <ul>
                    <ListItem content='Create football events' />
                    <ListItem content='Join football tournaments' />
                    <ListItem content='Invite your friends to create ultimate football community' />
                </ul>
            </div>
            <div className='footer__btn'>
                <Button content='Sign Up' />
            </div>
        </div>
    );
};

export default Footer;
