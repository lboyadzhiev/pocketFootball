import React, { useState } from 'react';

import Button from '../Button';

import './Form.css';

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
            <div>
                <label className='form__label'>Email</label>
                <input type='email' className='form__item' onChange={emailHandler} />
            </div>
            <div>
                <label className='form__label'>Password</label>
                <input type='password' className='form__item' onChange={passwordHandler} />
            </div>
            <div>
                <label className='form__label'>RePass</label>
                <input type='password' className='form__item' onChange={rePassHandler} />
            </div>
            <Button content='submit' />
        </form>
    );
};

export default RegistrationForm;