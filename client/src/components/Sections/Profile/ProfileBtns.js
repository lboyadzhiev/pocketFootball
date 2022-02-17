import React from 'react';

import './ProfileBtns.css';

import Button from '../../UI/Button';
const ProfileBtns = () => {
    return (
        <div className='profile__btns'>
            <Button className='btn--white' content='My Games' />
            <Button className='btn--white' content='My Friends' />
            <Button className='btn--white' content='My Fields' />
        </div>
    );
};

export default ProfileBtns;
