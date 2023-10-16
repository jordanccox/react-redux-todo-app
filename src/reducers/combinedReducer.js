import { combineReducers } from "@reduxjs/toolkit"
import todosReducer from './todosSlice'
import filtersReducer from './filtersSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer