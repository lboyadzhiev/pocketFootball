import React from 'react';

import './Login.css';

import Heading from '../../typography/HeadingTertiary';
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className='form-section'>
            <Heading content='Login' />
            <LoginForm />
        </div>
    );
};

export default Login;
