import {Iuser} from '../components/interfaces';

interface Istate {
    user: null | Iuser,
    message: null | string,

}

const initialState: Istate= {
    user: null,
    message: null,
};

export function mainReducer(state = initialState, action:any):Istate {
    switch(action.type) {
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'SET_MESSAGE':
            return {...state, message: action.payload}
        default:
            return state;
    };
};

