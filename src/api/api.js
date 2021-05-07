import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "782dfd66-826d-45f1-8b7c-f98be16b78c3"
    }
})

export const getUsers = (pageSize, currentPage) => {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
        .then(result => result.data)
}

export const auth = () => {
    return instance.get('auth/me')
        .then(result => result.data)
}

export const deleteUser = (id) => {
    return instance.delete(`follow/${id}`)
        .then (result => result.data)
}

export const postUser = (id) => {
    return instance.post(`follow/${id}`)
        .then(result => result.data)
}
export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
}

export const getStatus = (userId) => {
    return instance.get(`profile/status/${userId}`)
}
export const updateStatus = (status) => {
    return instance.put(`profile/status`, {status: status})
}

//login
export const login = (email, password, rememberMe) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
}
export const logout = () => {
    return instance.delete(`auth/login`)
}