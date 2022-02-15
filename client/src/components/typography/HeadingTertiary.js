import React from 'react';

import './HeadingTertiary.css';

const HeadingTertiary = (props) => {
    const content = props.content;
    return <h3 className='heading-tertiary'>{content}</h3>;
};

export default HeadingTertiary;
