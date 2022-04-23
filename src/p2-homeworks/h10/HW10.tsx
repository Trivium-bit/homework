import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import Preloader from './Preloader/Preloader';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        //dispatch  
        dispatch(loadingAC(true))
        //setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
            }    , 3000)
        //console.log('loading...')
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <Preloader />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
