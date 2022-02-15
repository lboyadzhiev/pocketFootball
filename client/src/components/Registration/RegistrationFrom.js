import React, { useState } from 'react';

import './RegistrationForm.css';

import Button from '../UI/Button';

const RegistrationForm = () => {
    const emailHandler = () => {
        console.log('changed');
    };

    const passwordHandler = () => {
        console.log('pass change');
    };

    const rePassHandler = () => {
        console.log('repass changed');
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
                <label className='form__label'>RePass</label>
                <input type='password' className='form__item' onChange={rePassHandler} />
            </div>
            <Button className='btn--green' content='Sign Up' />
        </form>
    );
};

export default RegistrationForm;
