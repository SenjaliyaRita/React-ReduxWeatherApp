import { WEATHERDATELIST_FETCHED } from '../config/actionTypes'

const initialDateListState = []
export const weatherDateListReducer= (state = initialDateListState, action) => {
  switch (action.type) {
    case WEATHERDATELIST_FETCHED:
      return [
          action.data,
         // ...state
        ]
    default :
    return state
  }
}