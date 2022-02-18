import React from 'react';

import './Registration.css';

import Heading from '../../typography/HeadingTertiary';
import RegistrationForm from './RegistrationFrom';
import FormSection from '../../UI/FormSection';

const Registration = () => {
    return (
        <FormSection>
            <Heading content='Sign Up' />
            <RegistrationForm />
        </FormSection>
    );
};

export default Registration;
