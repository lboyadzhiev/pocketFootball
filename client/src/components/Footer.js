import React from 'react';

import Button from './Button';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__text'>
                <h2 className='heading-secondary'>Join Pocket Football community</h2>
                <ul>
                    <li className='footer__textItem'>Create football events</li>
                    <li className='footer__textItem'>Join football tournaments</li>
                    <li className='footer__textItem'>
                        Invite your friends to create ultimate football community
                    </li>
                </ul>
            </div>
            <div className='footer__btn'>
                <Button content='Sign Up' />
            </div>
        </div>
    );
};

export default Footer;
