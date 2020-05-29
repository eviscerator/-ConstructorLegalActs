import { combineReducers } from 'redux'
import { listReducer } from './listReducer'
import { customReduser } from './customReducer'

export const rootReducers = combineReducers({
  list: listReducer,
  customReduser,
})
