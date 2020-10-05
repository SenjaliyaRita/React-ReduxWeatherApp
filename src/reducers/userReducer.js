import { USERS_LOADED, USER_DELETED } from '../config/actionTypes'
const initialState = []

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case USERS_LOADED:
            return action.users
        case USER_DELETED:
            const { id } = action
            return state.filter(users => users.id !== id)
        default:
            return state
    }
}

