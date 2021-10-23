import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import {PATH} from "./Routes"
import menu_icon from './images/menu_icon.png'

function Header() {
    return (
        
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>JuniorPlus</NavLink>
            <div className={s.block}> <img src={menu_icon} alt={"menu_icon"} className={s.logo}/> </div>
        
        </div>
    );
}

export default Header;
