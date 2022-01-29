import React from 'react';
import Footer from './Footer';

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

export default Home;
