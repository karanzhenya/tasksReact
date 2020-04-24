import React from "react";
import style from './Character.module.css'


const CharacterList = (props) => {
    return (
        <div className={style[props.className]}>
           {props.name}
        </div>
    )
};

export default CharacterList;