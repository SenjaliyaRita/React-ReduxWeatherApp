import { takeEvery, call, put, all } from 'redux-saga/effects'


import * as types from '../config/actionTypes'
import * as service from '../services/weatherService'
import * as actions from '../actions/weatherActions'
import * as alert from '../actions/alertActions'

//Worker Sagas
function* fetchWeather({ city }) {
    try {
        const data = yield call(service.getWeather,city)
        yield put(actions.WeatherFetchedAction(data))
       
    } catch (e) {
        yield put(alert.setAlertAction({
            text: 'Error occurs....',
            color: 'danger'
        }))
    }
}
function* fetchWeatherList({ coord }) {
    try {
        const data = yield call(service.getWeatherList,coord)
        yield put(actions.WeatherListFetchedAction(data))
    } catch (e) {
        yield put(alert.setAlertAction({
            text: 'Error occurs....',
            color: 'danger'
        }))
    }
}

function* fetchWeatherDateList({ cityData }) {
    try {
        const data = yield call(service.getWeatherDateList,cityData)
        yield put(actions.WeatherDateListFetchedAction(data))
        
    } catch (e) {
        yield put(alert.setAlertAction({
            text: 'Error occurs....',
            color: 'danger'
        }))
    }
}
//Watcher Sagas
function* watchFetchWeather() {
    yield takeEvery(types.FETCH_WEATHER, fetchWeather)
}

function* watchFetchWeatherList() {
    yield takeEvery(types.FETCH_WEATHERLIST, fetchWeatherList)
}

function* watchFetchWeatherDateList() {
    yield takeEvery(types.FETCH_WEATHERDATELIST, fetchWeatherDateList)
}


export function* weatherSaga() {
    yield all([
        watchFetchWeather(),
        watchFetchWeatherList(),
        watchFetchWeatherDateList(),
    ])
}