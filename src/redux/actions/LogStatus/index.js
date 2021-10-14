// import {ActionTypes} from "../../constants/ActionTypes"
import { ActionTypes } from "../../../constants/ActionTypes"

export const LogInAction = (value) =>{
    return {
        type : ActionTypes.logIn,
        payload : value 
    }
}

export const LogOutAction = () =>{
    return {
        type : ActionTypes.logOut,
        payload : undefined
    }
}