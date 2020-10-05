import * as types  from '../config/actionTypes'



export const WeatherFetchedAction = (data) => {
    return {
        type:types.WEATHER_FETCHED,
        data
    }
}

export const WeatherListFetchedAction = (data) => {
    return {
        type:types.WEATHERLIST_FETCHED,
        data
    }
}

export const WeatherDateListFetchedAction = (data) => {
    return {
        type:types.WEATHERDATELIST_FETCHED,
        data
    }
}

export const FetchWeatherAction = (city) =>{
    return {
        type:types.FETCH_WEATHER,
        city
    }
}

export const FetchWeatherListAction = (coord) =>{
    return {
        type:types.FETCH_WEATHERLIST,
        coord
    }
}

export const FetchWeatherDateListAction = (cityData) =>{
    return {
        type:types.FETCH_WEATHERDATELIST,
        cityData
    }
}
