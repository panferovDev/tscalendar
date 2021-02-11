import {Iuser} from '../components/interfaces';
import {users} from '../userData';


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

export const checkUserAction = (log:number|string, pass: number|string) => {
    let check = users.filter(i => i.name == log && i.password == pass);
    if(check.length === 0){
      return  messageAction('Неверный логин или пароль')
    }else{
        return userAction({...check[0], password:''})
    }
}