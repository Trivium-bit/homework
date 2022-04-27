import axios from 'axios'

export type BodyType = {
    object: {success: boolean}
}

export type ResponseType<D = {}> = {
    resultCode: number
    success: boolean
    data: D
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
})

export const requestAPI = {
    changeSuccess(success: boolean) {
        const promise = instance.post<ResponseType<{ body: BodyType }>>('auth/test', {success: success});
        return promise;
    }
}

