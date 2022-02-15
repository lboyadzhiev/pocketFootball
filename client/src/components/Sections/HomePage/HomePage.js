import React from 'react';

import './Home.css';
import Img from './Img';
import Content from './Content';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div className='home'>
            <Img />
            <Content />
            <Footer />
        </div>
    );
};

export default HomePage;
