import React from 'react';

import { FaAlignLeft } from 'react-icons/fa';

import Home from './SectionsComponents/Home';
import Registration from '../components/Registration/Registration';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__menu-container'>
                <FaAlignLeft className='main__menu' />
            </div>
            <Home />
            <Registration />
        </div>
    );
};

export default Main;
