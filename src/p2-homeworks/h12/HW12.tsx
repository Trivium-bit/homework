import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.themeReducer.themes);

    const dispatch = useDispatch();
    const onChangeTheme = (theme: string) => dispatch(changeThemeAC(theme));

    return (
        <div className={s[theme]}>
            <hr />
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                options={themes}
                value={theme}
                onChangeTheme={onChangeTheme}
            />
            <hr />
        </div>
    );
}

export default HW12;
