import { all } from 'redux-saga/effects'

import { taskSaga } from './taskSaga'
import { authSaga } from './authSaga'
import { userSaga } from './userSaga'
import { weatherSaga } from './weatherSaga'

function* rootSaga() {
    yield all([
        taskSaga(),
        authSaga(),
        userSaga(),
        weatherSaga()
    ])
}

export default rootSaga