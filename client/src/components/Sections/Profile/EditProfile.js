import React from 'react';

import './EditProfile.css';

import FormSection from '../../UI/FormSection';
import Heading from '../../typography/HeadingTertiary';
import Form from './EditProfileForm';
const EditProfile = () => {
    return (
        <FormSection>
            <Heading content='Edit Profile' />
            <Form />
        </FormSection>
    );
};

export default EditProfile;
