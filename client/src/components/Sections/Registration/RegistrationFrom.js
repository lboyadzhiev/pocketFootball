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

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            email: inputEmail,
            password: inputPassword,
            rePass: inputRePass,
        };

        console.log(data);
        setInputEmail('');
        setInputPassword('');
        setInputRePass('');
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='form__items'>
                <label className='form__label'>Email</label>
                <input
                    type='email'
                    value={inputEmail}
                    className='form__item'
                    onChange={emailHandler}
                />
            </div>
            <div className='form__items'>
                <label className='form__label'>Password</label>
                <input
                    type='password'
                    value={inputPassword}
                    className='form__item'
                    onChange={passwordHandler}
                />
            </div>
            <div className='form__items'>
                <label className='form__label'>Repeat Password</label>
                <input
                    type='password'
                    value={inputRePass}
                    className='form__item'
                    onChange={rePassHandler}
                />
            </div>
            <SubmitBtn value='Register' />
        </form>
    );
};

export default RegistrationForm;
