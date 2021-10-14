import React , {useState } from 'react'
import LogInForm from './LogInForm';
import {useHistory } from 'react-router-dom'
import axios from 'axios';
import { PORT } from '../../backEndPort';
import { ADDRESS } from '../../BackendAddress';
import { URL } from '../../urls/url';
import { ObjectToBeSavedInBrowser } from '../../model/ObjectToBeSavedInBrowser';
import { getLoggedIn } from '../../Utility';
import { headers } from '../../headers';
import { useDispatch } from 'react-redux';
import { LogInAction } from '../../redux/actions/LogStatus';

export default function LogIn() {

    ////////////////////////////////////////////   model portion    ////////////////////////////////////////////////////
    const dispatch = useDispatch();
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(new Object());
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [tempUserDetails, setTempUserDetails] = useState({
        tempUserHandleName : "",
        tempUserEmail : "",
        tempUserPassword : ""
    })
    let history = useHistory();

    const onChangeTempUserHandleNameHandler = (e) =>{
        setTempUserDetails({
            ...tempUserDetails, tempUserHandleName : e.target.value
        })
    }

    // getting user email
    const onChangeTempUserEmailHandler = (e) =>{
        setTempUserDetails({
            ...tempUserDetails, tempUserEmail : e.target.value
        })
    }

    // getting user password
    const onChangeTempUserPasswordHandler = (e) =>{
        setTempUserDetails({
            ...tempUserDetails, tempUserPassword : e.target.value
        })
    }

    const saveToBrowserStorage = value =>{
        const objectToBeSaved = new ObjectToBeSavedInBrowser(true,value);
        getLoggedIn('DLGT_PROJECT2_postGivingAppRemastered',JSON.stringify(objectToBeSaved));
        dispatch(LogInAction(objectToBeSaved));
    }

    /// controller portion
    const loginSubmitHandler = async(e) =>{
        e.preventDefault();
        if(tempUserDetails.tempUserEmail && tempUserDetails.tempUserHandleName && tempUserDetails.tempUserPassword){
            // console.log(tempUserDetails);
            try {
                const res = await axios.post(URL.LOGIN_URL, {tempUserDetails});
                saveToBrowserStorage(res.data[0]);
                if(res.data.length){
                    history.push({
                        pathname : '/',
                        state : {data : res.data[0]}
                    });
                    setAuthorisedUserDetails(res.data[0]);
                } else {
                    alert('No matches !!')
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('What are doing??')
        }
        
    }
    // axios.post(`https://fast-meadow-49435.herokuapp.com/logIn/login`,{tempUserDetails})
            


    /// View portion
    return <LogInForm
                tempUserDetails = {tempUserDetails}
                onChangeTempUserHandleNameHandler = {onChangeTempUserHandleNameHandler}
                onChangeTempUserEmailHandler = {onChangeTempUserEmailHandler}
                onChangeTempUserPasswordHandler = {onChangeTempUserPasswordHandler}
                loginSubmitHandler = {loginSubmitHandler}
            />
}
