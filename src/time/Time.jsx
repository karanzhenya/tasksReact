import React from 'react';
import style from './Time.module.css'

const Time = () => {
    return (
        <div className={style.Time}>{new Date().toLocaleTimeString()}</div>
    )
}

export default Time;