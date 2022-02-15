import React from 'react';
import './HeadingPrimary.css';
const HeadingPrimary = (props) => {
    return <h1 className='heading-primary'>{props.children}</h1>;
};

export default HeadingPrimary;
