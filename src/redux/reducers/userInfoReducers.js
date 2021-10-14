import { ActionTypes } from "../../constants/ActionTypes"

const initialState = {
    loggedIn : false,
    authorisedUserDetails : null
}

const userInfoReducer = (state = initialState , action) =>{
    switch(action.type){
        case ActionTypes.logIn:{
            return{
                loggedIn : true,
                authorisedUserDetails : action.payload
            }
        }

        case ActionTypes.logOut:{
            return{
                loggedIn : false,
                authorisedUserDetails : null
            }
        }
        default :
            return state;
    }
}
export default userInfoReducer;