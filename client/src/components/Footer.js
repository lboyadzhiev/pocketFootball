import React from 'react';

import Button from './Button';
import ListItem from './ListItem';
import HeadingSecondary from './HeadingSecondary';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__text'>
                <HeadingSecondary content='Join Pocket Football community' />

                <ul>
                    <ListItem content='Create football events' />
                    <ListItem content='Join football tournaments' />
                    <ListItem content='Invite your friends to create ultimate football community' />
                </ul>
            </div>
            <div className='footer__btn'>
                <Button className='btn--green' content='Sign Up' />
            </div>
        </div>
    );
};

export default Footer;
