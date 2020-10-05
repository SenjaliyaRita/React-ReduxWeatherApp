import { WEATHER_FETCHED } from '../config/actionTypes'

const initialState = []
export const weatherReducer= (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_FETCHED:
       
      return [
          action.data,
          ...state
        ]
    default :
    return state
  }
}