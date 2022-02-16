import React from 'react';
import {
    FaRegGrin,
    FaRegCheckCircle,
    FaRegCalendarCheck,
    FaAt,
    FaFutbol,
    FaPhoneAlt,
    FaStar,
} from 'react-icons/fa';
import { GiWhistle } from 'react-icons/gi';

import Card from '../../UI/Card';
import ListItem from '../../UI/ListItem';
import Button from '../../UI/Button';

const Profile = () => {
    return (
        <section className='profile-section'>
            <Card className='profile'>
                <Card>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE26HF3JjoME9NCp8t2kFUvYXZ2_jewd9DkQ&usqp=CAU'
                        alt='profile pic'
                        className='profile__img--img'
                    />
                    <div className='profile__img--name'>
                        <h2>UserName</h2>
                        <span>position</span>
                    </div>
                </Card>
            </Card>
            <ul className='profile__ul'>
                <ListItem>
                    <FaRegGrin className='profile__icon' />
                    <span>age</span>
                </ListItem>
                <ListItem>
                    <FaFutbol className='profile__icon' />
                    <span>position</span>
                </ListItem>
                <ListItem>
                    <FaRegCheckCircle className='profile__icon' />
                    <span>rang</span>
                </ListItem>
                <ListItem>
                    <FaRegCalendarCheck className='profile__icon' />
                    <span>Response Time</span>
                </ListItem>
            </ul>
            <Button className='btn--green' content='Edit' />
        </section>
    );
};

export default Profile;
