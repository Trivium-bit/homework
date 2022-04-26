import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import s from './Request.module.css'

function Request() {
    return (
        <div className={s.request}>
            <Button />
            <Checkbox />
{/*          <button>push</button>
         <input type="checkbox"></input> */}
        </div>
    );
}

export default Request;
