import React from 'react';
import './Card.css';

const Card = (props) => {
    const content = props.children;
    const classes = 'card ' + props.className;
    return <div className={classes}></div>;
};

export default Card;
