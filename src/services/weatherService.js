import axios from 'axios'

import { FORECAST_API_URL, WEATHER_API_URL,WEATHER_API_KEY,ONECALL_API_URL } from '../config/api'

export const getWeather = (city) => {
    const url = `${WEATHER_API_URL}?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    return axios.get(url).then(res => res.data)
}


export const getWeatherList = (coord) => {
    const url = `${ONECALL_API_URL}?lat=${coord.lat}&lon=${coord.lon}&exclude=minutely,hourly&units=metric&appid=${WEATHER_API_KEY}`
   //const url=`${FORECAST_API_URL}?q=${'Pune'}&units=metric&appid=${WEATHER_API_KEY}`
  return axios.get(url).then(res => res.data)
}

export const getWeatherDateList = (cityData) => {
    const url=`${FORECAST_API_URL}?q=${cityData.city}&cnt=8&dt=${cityData.dt}}&units=metric&appid=${WEATHER_API_KEY}`
  return axios.get(url).then(res => res.data)
}
