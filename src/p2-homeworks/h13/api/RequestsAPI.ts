import axios from 'axios'

export type DataType = { //???????????????
    errorText: string
}

export type BodyType = {
        success: boolean
}

export type ResponseType<DataType = {}> = {
    resultCode: number
    success: boolean
  //  data: 
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestAPI = {
    changeSuccess(success: boolean) {
        const promise = instance.post<ResponseType<{ body: BodyType }>>('auth/test', {success});
        return promise;
    }
}

