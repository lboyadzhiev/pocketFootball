import React from 'react';

// components

import Games from './Games';

// styles
import classes from './Index.module.css';

const index = () => {
    return (
        <div className={classes.myGames}>
            <Games />
        </div>
    );
};

export default index;
