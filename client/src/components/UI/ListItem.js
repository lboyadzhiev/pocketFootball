import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
    const content = props.children || props.content;
    const classes = 'list-item ' + props.className;
    return <li className={classes}>{content}</li>;
};

export default ListItem;
