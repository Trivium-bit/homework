import React, { useState } from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { requestAPI } from "../api/RequestsAPI";

function Request() {

    const [requestMessage, setRequestMessage] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const changeSuccessAPI = (success: boolean) => {
        requestAPI.changeSuccess(success)
            .then(response => {
                const requestMessage = response.data
                console.log(requestMessage)
            })
            .catch(error => {
                console.log({ ...error });
                const errorMessage = error.response.data.errorText
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    const changeSuccess = (success: boolean) => {
        changeSuccessAPI(success)
        setRequestMessage(requestMessage)
        setErrorMessage(errorMessage)
    }

    return (
        <div>
            <SuperButton onClick={() => { changeSuccess(true) }}> Push </SuperButton>
            <SuperCheckbox changeSuccess={changeSuccess} />
            <div>Message:{ requestMessage }{ errorMessage }</div>
        </div>
    );
}

export default Request;
