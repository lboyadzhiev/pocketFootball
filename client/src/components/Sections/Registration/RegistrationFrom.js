import React, { useState } from 'react';

import './RegistrationForm.css';

import SubmitBtn from '../../UI/SubmitBtn';

const RegistrationForm = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputRePass, setInputRePass] = useState('');

    const emailHandler = (event) => {
        setInputEmail(event.target.value);
    };

    const passwordHandler = (event) => {
        setInputPassword(event.target.value);
    };

    const rePassHandler = (event) => {
        setInputRePass(event.target.value);
    };

    return (
        <form className='form'>
            <div className='form__items'>
                <label className='form__label'>Email</label>
                <input type='email' className='form__item' onChange={emailHandler} />
            </div>
            <div className='form__items'>
                <label className='form__label'>Password</label>
                <input type='password' className='form__item' onChange={passwordHandler} />
            </div>
            <div className='form__items'>
                <label className='form__label'>Repeat Password</label>
                <input type='password' className='form__item' onChange={rePassHandler} />
            </div>
            <SubmitBtn value='Register' />
        </form>
    );
};

export default RegistrationForm;
