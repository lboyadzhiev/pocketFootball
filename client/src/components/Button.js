import React from 'react';

const Button = (props) => {
    const content = props.content;
    return (
        <div>
            <a href='/register' className='btn'>
                {content}
            </a>
        </div>
    );
};

export default Button;
