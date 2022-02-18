import React from 'react';

import SubmitBtn from '../../UI/SubmitBtn';
const EditProfileForm = () => {
    return (
        <form className='form'>
            <div className='form__items'>
                <label className='form__label'>Email</label>
                <input type='email' className='form__item' />
            </div>
            <div className='form__items'>
                <label className='form__label'>Date of Burth</label>
                <input type='date' className='form__item' />
            </div>
            <div className='form__items'>
                <label className='form__label'>Position</label>
                <select type='' className='form__item'>
                    <option value='Goal Keeper'>Goal Keeper</option>
                    <option value='Right Defense'>Right Defence</option>
                    <option value='Left Defence'>Left Defence</option>
                    <option value='Center'>Center</option>
                </select>
            </div>
            <div className='form__items'>
                <label className='form__label'>Phone Number</label>
                <input type='phone' className='form__item' />
            </div>
            <SubmitBtn content='Submit' />
        </form>
    );
};

export default EditProfileForm;
