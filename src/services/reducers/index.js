import { combineReducers } from 'redux'
import userOperation from './reducers'
import todoOperation from './reducertodo'

export default combineReducers({
    userOperation,
    todoOperation
}) ;

