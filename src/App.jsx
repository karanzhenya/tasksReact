import React from 'react';
import style from './App.module.css';
import Avatar from './avatar/Avatar.jsx';
import Name from './name/Name.jsx';
import Time from './time/Time.jsx';
import Message from "./Message/Message";
import Character from "./Character/Character";



const App = (props) => {

    return (
        <div className={style.page}>
        <div className={style.socialpage}>
            <Avatar/>
            <div className={style.message}>
                <div className={style.text}>
                    <Name/>
                    <Message/>
                </div>
                <div className={style.time}>
                    <Time />
                </div>
            </div>
        </div>
            <Character/>
        </div>
    );
}

export default App;
