import React from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { requestAPI } from "../api/RequestsAPI";

const changeSuccess = (success: boolean) => {
    requestAPI.changeSuccess(success)
        .then(response => {
            const data = response.data
            console.log(data)
        })
        .catch(error => {console.log({ ...error });
        console.log(error.response ? error.response.data.errorText : error.message);
    })
}

function Request() {
    return (
        <div>
            <SuperButton onClick={() => { changeSuccess(true) }}> Push </SuperButton>
            <SuperCheckbox changeSuccess={changeSuccess} />
            {}
        </div>
    );
}

export default Request;
