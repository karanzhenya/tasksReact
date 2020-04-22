import React from 'react';
import Image from './image.jpg';
import style from './Avatar.module.css'

const Avatar = () => {
    return (
        <div className={style.avatar}>
            <img src={Image} alt="avatar"></img>
        </div>)
}


export default Avatar;