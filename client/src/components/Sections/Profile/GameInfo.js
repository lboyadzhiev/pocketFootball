import React from 'react';

import './GameInfo.css';

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

import ListItem from '../../UI/ListItem';
import Card from '../../UI/Card';
import ProfileBtns from './ProfileBtns';

const GameInfo = () => {
    return (
        <div className='profile__info'>
            <Card className='profile__info-personal'>
                <ul className='profile__ul'>
                    <ListItem>
                        <FaAt className='profile__icon' />
                        <span className='profile__item'>userEmail.com</span>
                    </ListItem>
                    <ListItem>
                        <FaPhoneAlt className='profile__icon' />
                        <span className='profile__item'>0893******</span>
                    </ListItem>
                </ul>
            </Card>

            <Card className='profile__info-game'>
                <ul className='profile__info-list'>
                    <ListItem>
                        <GiWhistle className='profile__icon' />
                        <span className='profile__item'>Played Games: 12</span>
                    </ListItem>
                    <ListItem>
                        <FaRegCalendarCheck className='profile__icon' />
                        <span className='profile__item'>Orginized Games: 12</span>
                    </ListItem>
                    <ListItem>
                        <FaStar className='profile__icon' />
                        <span className='profile__item'>MOTM: man of the game</span>
                    </ListItem>
                    <ListItem>
                        <FaRegCheckCircle className='profile__icon' />
                        <span className='profile__item'>Discipline level: 12</span>
                    </ListItem>
                </ul>
                <ProfileBtns />
            </Card>
        </div>
    );
};

export default GameInfo;
