import React from 'react';

import './LoginForm.css';

import Button from '../../UI/Button';

const LoginForm = () => {
    return (
        <form action='' className='login-form'>
            <div className='login-form__items'>
                <input type='text' className='login-form__item' placeholder='username' />
                <input type='password' className='login-form__item' placeholder='password' />
            </div>
            <Button className='btn--green' content='Login' />
        </form>
    );
};

export default LoginForm;
