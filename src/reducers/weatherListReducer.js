import { WEATHERLIST_FETCHED } from '../config/actionTypes'

const initialListState = []
export const weatherListReducer= (state = initialListState, action) => {
  switch (action.type) {
    case WEATHERLIST_FETCHED:
      return [
          action.data.daily.slice(0,5),
         // ...state
        ]
    default :
    return state
  }
}