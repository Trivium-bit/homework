import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';
import { changeThemeAC } from '../h12/bll/themeReducer';
import s from "../h12/HW12.module.css";
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import Clock from './Clock'

function HW9() {
    const themes = ['dark', 'red', 'some'];
    const theme = useSelector<AppStoreType, string>(state => state.themeReducer.themes);

    const dispatch = useDispatch();
    const onChangeTheme = (theme: string) => dispatch(changeThemeAC(theme));

    return (
        <div className={s[theme]}>
            <span className={s[theme + '-text']}>
                change theme
            </span>
            <SuperRadio
                options={themes}
                value={theme}
                onChangeTheme={onChangeTheme}
            />
            <hr />
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr />
        </div>
    )
}

export default HW9
