import {deleteUser, getUsers, postUser} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let InitialState = {
    users: [],
    totalUsersCount: 20,
    pageSize: 4,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
};

const usersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: action.user}
        }
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id != action.userId)

            }
        }

        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (user) => ({type: SET_USERS, user});
export const setPage = (currentPage) => ({type: SET_PAGE, currentPage: currentPage}); // или просто currentPage (совпадает значение и свойство)
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersThunkCreator = (pageSize, currentPage, numberPage) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPage(numberPage))
        getUsers(pageSize, currentPage).then(result => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(result.items));
            dispatch(setTotalUsersCount(result.totalCount));
        })
    }
}

export const followUsersThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));

        postUser(userId).then(result => {
            if(result.resultCode == 0){
                dispatch(follow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    }
}
export const deleteUsersThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        deleteUser(userId).then(result => {
            if(result.resultCode == 0){
                dispatch(unFollow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        })
    }
}
export default usersReducer;