import React from 'react';
import './Footer.css';

import Button from '../../UI/Button';
import ListItem from '../../UI/ListItem';
import HeadingSecondary from '../../typography/HeadingSecondary';

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
