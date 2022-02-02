import React from 'react';
import Heading from '../HeadingSecondary';
import RegistrationForm from './RegistrationFrom';

import './Registration.css';

const Registration = () => {
    return (
        <div className='form-section'>
            <Heading content='Registration' />
            <RegistrationForm />
        </div>
    );
};

export default Registration;
