import React from "react";
import style from './Character.module.css'
import CharacterList from "./CharacterList";

let  state = [
    {name: 'careful', style: "none"},
    {name: 'accurate', style: "other"},
    {name: 'testy', style: "none"}];

const Character = (props) => {
    let quality = state.map(q => {return <CharacterList key={q} name={q.name} className={q.style}/>})
    return (
        <div className={style.character}>
          {quality}
        </div>)
};

export default Character;