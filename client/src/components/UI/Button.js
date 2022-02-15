import React from 'react';

import './Button.css';

const Button = (props) => {
    const content = props.content;
    const classes = 'btn ' + props.className;
    return (
        <div className={classes}>
            <a href='/'>{content}</a>
        </div>
    );
};

export default Button;
