import {deleteUser, getProfile, getStatus, updateStatus} from "../api/api";
import {toggleIsFollowingProgress, unFollow} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


let InitialState = {
    postData : [
        {id:1, message: 'Hi, how are you?', likeCount:15},
        {id:2, message: 'It`s my first post?', likeCount:20},
        {id:3, message: 'It`s my second post?', likeCount:84},
        {id:4, message: 'It`s my third post?', likeCount:56}
    ],
    profileInfo : [
        {infoTitle: ' About Me:', infoDescription: ' Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56.'},
        {infoTitle:' Favourite TV Shows:', infoDescription:' Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.'},
        {infoTitle:' Favourite Music Bands / Artists:', infoDescription:'Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.'}
    ],
    profile: null,
    status: ''
};
const profileReducer = (state = InitialState, action) => {
    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, {id: 5, message: action.postArea, likeCount: 0}],
            }
        }
        case SET_USERS_PROFILE: {
            return {...state, profile : action.profile
            }
        }
        case SET_STATUS: {
            return {...state, status : action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (postArea) => {

    return{
        type: ADD_POST, postArea
    }
}
export const setUsersProfile = (profile) => {
    return{
        type: SET_USERS_PROFILE, profile
    }
}
export const setStatus = (status) => {
    return{
        type: SET_STATUS, status
    }
}

//thunk
export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(result => {
            dispatch(setUsersProfile(result.data));
        })
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getStatus(userId).then(result => {
            dispatch(setStatus(result.data));
        })
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        updateStatus(status).then(result => {
            if (result.data.resultCode === 0){
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;