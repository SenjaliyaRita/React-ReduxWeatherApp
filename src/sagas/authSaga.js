import { takeEvery, call, put, all } from 'redux-saga/effects'

import history from '../history'

import * as types from '../config/actionTypes'
import * as service from '../services/authService'
import * as actions from '../actions/authActions'
import * as alert from '../actions/alertActions'

function* login({ creds }) {
    try {
        const user = yield call(service.login, creds)
        yield put(actions.userLoggedIn(user))
        yield put(alert.setAlertAction({
            text: 'User Logged In!',
            color: 'success'
        }))
        history.push('/weather')
    } catch (e) {
        yield put(alert.setAlertAction({
            text: e.msg,
            color: 'danger'
        }))
    }
}

function* logout() {
    yield call(service.logout)
    yield put(actions.userLoggedOutAction())
    history.push('/')
}

function* watchLoginUser() {
    yield takeEvery(types.LOGIN_USER, login)
}

function* watchLogoutUser() {
    yield takeEvery(types.LOGOUT_USER, logout)
}

export function* authSaga() {
    yield all([
        watchLoginUser(),
        watchLogoutUser()
    ])
}