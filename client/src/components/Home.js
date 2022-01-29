import React from 'react';
import Footer from './Footer';
import HeadingPrimary from './HeadingPrimary';

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
            <HeadingPrimary>
                <span className='heading-primary--main'>Pocket football</span>
                <span className='heading-primary--sub'>where the game is starting</span>
            </HeadingPrimary>
        </div>
    );
};

export default Home;
