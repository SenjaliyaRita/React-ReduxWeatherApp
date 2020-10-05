import * as types from '../config/actionTypes'

export const userLoadedAction= users =>{
    return{
    type:types.USERS_LOADED,
    users
}
}

export const loadUserAction=()=>{
 return{
    type:types.LOAD_USERS
}
}

export const deleteUserAction=(id)=>{
    return {
        type:types.DELETE_USER,
        id
    }
}

export const userDeletedAction=(id)=>{
    return{
        type:types.USER_DELETED,
        id
    }
}

export const registerUserAction = (data) =>{
    return {
    type:types.REGISTER_USER,
    data
    }
}

export const UserRegisteredAction = (data) =>{
    return {
    type:types.USER_REGISTERED,
    data
    }
}