import {Iuser} from '../components/interfaces';
import {users} from '../userData';

interface Istate {
    user: null | Iuser,
    message: null | string,
    allUsers: Iuser[] 

}

const initialState: Istate= {
    user: null,
    message: null,
    allUsers:[]
};

export function mainReducer(state = initialState, action:any):Istate {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, user: action.payload, allUsers: action.payload ? users.filter(i => i.id !== action.payload.id).map(i => ({id:i.id, name:i.name})):[]
            }
        case 'SET_MESSAGE':
            return {...state, message: action.payload}
        default:
            return state;
    };
};

