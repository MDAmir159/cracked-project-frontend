import React from 'react'
import { useSelector } from 'react-redux';
import { Route , Redirect } from 'react-router-dom'
import { isLoggedIn } from '../Utility';

export default function PrivateRoute({component : Component , ...rest}) {

    const loggedInSituation = useSelector(state => state.userInfoReducers);

    console.log(loggedInSituation);

    return(
        <Route {...rest} render = {(props) =>(
                loggedInSituation.loggedIn ? 
                        <Component props = {props} />
                         : <Redirect to = '/login' />
                )
            }
        />
    );
}
