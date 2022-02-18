import React from 'react';

const SubmitBtn = (props) => {
    return <input type='submit' className='btn btn--green' value={props.value} />;
};

export default SubmitBtn;
