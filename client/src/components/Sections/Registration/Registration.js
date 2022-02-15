import React from 'react';

import './Registration.css';

import Heading from '../../typography/HeadingTertiary';
import RegistrationForm from './RegistrationFrom';

const Registration = () => {
    return (
        <div className='form-section'>
            <Heading content='Sign Up' />
            <RegistrationForm />
        </div>
    );
};

export default Registration;
