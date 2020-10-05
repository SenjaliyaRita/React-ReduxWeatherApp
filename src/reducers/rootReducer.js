import { combineReducers } from 'redux'

import { taskReducer } from './taskReducer'
import { alertReducer } from './alertReducer'
import { authReducer } from './authReducer'
import { userReducer } from './userReducer'
import { weatherReducer }  from './weatherReducer'
import { weatherListReducer } from './weatherListReducer'
import { weatherDateListReducer } from './weatherDateListReducer'

export default combineReducers({
    tasks: taskReducer,
    alert: alertReducer,
    user: authReducer,
    users: userReducer,
    weather:weatherReducer,
    weatherList:weatherListReducer,
    weatherDateList:weatherDateListReducer
})