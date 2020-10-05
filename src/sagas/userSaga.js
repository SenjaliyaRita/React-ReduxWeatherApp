
import * as types from '../config/actionTypes'
import * as service from '../services/userService'
import * as actions from '../actions/userActions'
import * as alert from '../actions/alertActions'
import { takeEvery, call, put, all } from 'redux-saga/effects'
import history from '../history'

// worker function
function* loadUser(){
    try{
        const users=yield call(service.getUsers)
        yield put(actions.userLoadedAction(users))
        yield put(alert.setAlertAction({
            text: 'Users Loaded!',
            color: 'success'
        }))
    }
    catch (e){
        console.log(e)
    }
}

function* deleteUser({ id }){
    try{
        yield call(service.deleteUser, id)
        yield put(actions.userDeletedAction(id))
        yield put(alert.setAlertAction({
            text: 'User Deleted!',
            color: 'success'
        }))
    }
    catch (e){
        console.log(e)
    }
}

function* registerUser({data}){
    try{
        yield call(service.registerUser,data)
        yield put(alert.setAlertAction({
            text: 'User added',
            color: 'success'
        }))
        history.push('/')
    }
    catch (e){
        console.log(e)
    }
}
// watcher function
function* watchLoadUser(){
    try{
       yield takeEvery(types.LOAD_USERS,loadUser)

    }
    catch (e){
        console.log(e)
    }
}

function* watchDeleteUser(){
    try{
        yield takeEvery(types.DELETE_USER,deleteUser)
 
     }
     catch (e){
         console.log(e)
     }
}

function* watchRegisterUser(){
    try{
        yield takeEvery(types.REGISTER_USER,registerUser)
    }
    catch(e){
        console.log(e)
    }
}

export function* userSaga(){
yield all([
    watchLoadUser(),
    watchDeleteUser(),
    watchRegisterUser(),
]) 
}

