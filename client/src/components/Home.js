import React from 'react';

const Home = () => {
    return (
        <div>
            <Img />
            <Content />
        </div>
    );
};

export default Home;

const Img = () => {
    return <div className='home-image'></div>;
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
