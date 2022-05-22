import axios from 'axios'

export type DataType = { //???????????????
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: {}

}
/* 
export type BodyType = {
        success: boolean
}

export type ResponseType<DataType = {}> = {
    resultCode: number
    success: boolean
    data: DataType
}
 */
const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestAPI = {
    changeSuccess(success: boolean) {
        const promise = instance.post<DataType>('auth/test', {success});
        return promise;
    }
}

