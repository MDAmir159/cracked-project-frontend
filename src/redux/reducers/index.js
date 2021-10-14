import { combineReducers } from "redux";
import userInfoReducers from './userInfoReducers'

const allReducers = combineReducers({
    userInfoReducers : userInfoReducers
})

export default allReducers;