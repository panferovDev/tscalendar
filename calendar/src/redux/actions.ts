import {Iuser} from '../components/interfaces';

export const userAction = (value:Iuser | null) => {
    return {
        type:'SET_USER',
        payload: value
    }
}

export const messageAction = (value:string | null) => {
    return {
        type:'SET_MESSAGE',
        payload: value
    }
}