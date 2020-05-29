import { combineReducers } from 'redux'
import { listReducer } from './listReducer'

export const rootReducers = combineReducers({
  list: listReducer,
})
