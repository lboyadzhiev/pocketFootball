import React from 'react';

import { FaAlignLeft } from 'react-icons/fa';

import Home from './SectionsComponents/Home';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__menu-container'>
                <FaAlignLeft className='main__menu' />
            </div>

            <Home />
        </div>
    );
};

export default Main;
