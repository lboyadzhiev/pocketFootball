import React from 'react';
import Button from './Button';

const Home = () => {
    return (
        <div className='home'>
            <Img />
            <Content />
            <Footer />
        </div>
    );
};

const Img = () => {
    return <div className='img'></div>;
};

const Content = () => {
    return (
        <div className='text-box'>
            <h1 className='heading-primary'>
                <span className='heading-primary--main'>Pocket football</span>
                <span className='heading-primary--sub'>where the game is starting</span>
            </h1>
        </div>
    );
};

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-text'>
                <h2 className='heading-secondary'>Join Pocket Football community</h2>
                <ul>
                    <li className='text-footer'>Create football events</li>
                    <li className='text-footer'>Join football tournaments</li>
                    <li className='text-footer'>
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

export default Home;
