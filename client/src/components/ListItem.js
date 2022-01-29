import React from 'react';

const ListItem = (props) => {
    const content = props.children || props.content;
    return <li className='list-item'>{content}</li>;
};

export default ListItem;
