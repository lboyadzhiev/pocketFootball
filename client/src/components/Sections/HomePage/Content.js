import React from 'react';

import HeadingPrimary from '../../typography/HeadingPrimary';
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

export default Content;
