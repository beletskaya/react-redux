import {auth, login, logout} from "../api/api";

const AUTH_DATA = 'AUTH_DATA';
const LOGIN_DATA = 'LOGIN_DATA';


let InitialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    password: null,
    rememberMe: false
};

const authReducer = (state = InitialState, action) => {
    switch(action.type){
        case AUTH_DATA:
            return {
                ...state,
                ...action.data
            }
        case LOGIN_DATA:
            return {
                ...state,
                ...action.dataForm
            }

        default:
            return state
    }
}

export const setAuthData = (userId, email, login, isAuth) => ({type: AUTH_DATA, data:{userId, email, login, isAuth} });

export const setLoginData = (email, password, rememberMe) => ({type: AUTH_DATA, dataForm:{email, password, rememberMe} });

export const authThunkCreator = () => {
    return (dispatch) => {
        auth().then( result => {
            if(result.resultCode === 0) { //if users is login
                let {id, email, login} = result.data;
                dispatch(setAuthData(id, email, login, true));
            }
        })
    }
}
export const loginThunkCreator = (email, password, rememberMe) => {
    //debugger
    return (dispatch) => {
        login(email, password, rememberMe).then( result => {
            if(result.resultCode === 0) {
                dispatch(authThunkCreator());
            }
        })
    }
}
export const logoutThunkCreator = () => {
    return (dispatch) => {
        logout().then( result => {
            if(result.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false));
            }
        })
    }
}

export default authReducer;