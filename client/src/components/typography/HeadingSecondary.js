import React from 'react';

import './HeadingSecondary.css';

const HeadingSecondary = (props) => {
    const content = props.content;
    return <h2 className='heading-secondary'>{content}</h2>;
};

export default HeadingSecondary;
