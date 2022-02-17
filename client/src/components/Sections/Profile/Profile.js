import React from 'react';

import './Profile.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

import PersonalProfile from './PersonalProfile';
import GameInfo from './GameInfo';

const Profile = () => {
    return (
        <section className='profile-section'>
            <Card className='profile'>
                <PersonalProfile />
                <GameInfo />
                <FaArrowRight className='icon icon--right' />
                <FaArrowLeft className='icon icon--left' />
            </Card>

            <Button className='btn--green' content='Edit' />
        </section>
    );
};

export default Profile;
