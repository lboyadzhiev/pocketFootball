import React, { useState } from 'react';

import SubmitBtn from '../../UI/SubmitBtn';
const EditProfileForm = () => {
    const date = Date();

    console.log(date);
    const [inputUserName, setInputUserName] = useState('');
    const [inputAge, setInputAge] = useState();
    const userNameHandler = (event) => {
        console.log(event.target.value);
    };

    const ageHandler = (event) => {
        console.log(event.target.value);
    };

    const positionHandler = (event) => {
        console.log(event.target.value);
    };

    const phoneNumHandler = (event) => {
        console.log(event.target.value);
    };
    return (
        <form className='form'>
            <div className='form__items'>
                <label className='form__label'>User Name</label>
                <input type='text' className='form__item' onChange={userNameHandler} />
            </div>
            <div className='form__items'>
                <label className='form__label'>Date of Burth</label>
                <input type='date' className='form__item' onChange={ageHandler} />
            </div>
            <div className='form__items'>
                <label className='form__label'>Position</label>
                <select type='' className='form__item' onChange={positionHandler}>
                    <option value='Goal Keeper'>Goal Keeper</option>
                    <option value='Right Defense'>Right Defence</option>
                    <option value='Left Defence'>Left Defence</option>
                    <option value='Center'>Center</option>
                </select>
            </div>
            <div className='form__items'>
                <label className='form__label'>Phone Number</label>
                <input type='phone' className='form__item' onChange={phoneNumHandler} />
            </div>
            <SubmitBtn content='Submit' />
        </form>
    );
};

export default EditProfileForm;
