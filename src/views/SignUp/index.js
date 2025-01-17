import React , {useState} from 'react'
import SignInForm from './SignInForm'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {PORT} from '../../backEndPort'
import { URL } from '../../urls/url'
import  {myFormattedTime} from '../../functions/utilities'

export default function SignUp() {
    ///////////////////////////////////////////////////////////// model portion   /////////////////////////////////////////////////////////////////
    const [isChanged, setIsChanged] = useState(false)
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [isSame, setIsSame] = useState()
    const [newUserDetails, setNewUserDetails] = useState({
        userHandleName : "",
        userPassword : "",
        userName : "",
        userEmailAddress : "",
        userPhoneNumber : "",
        userInsertedTime : "",
        userUpdatedTime : ""
    })
    const [tempPasswordStorage, setTempPasswordStorage] = useState({
        password1: "",
        password2 : ""
    })
    const [isAllSet, setIsAllSet] = useState(false)
    
    ///////////////////////////////////////////////////////////// controller portion   /////////////////////////////////////////////////////////////////
    
    React.useEffect( async ()=>{
        ///// saving to database ///////
        try {
            const response = await axios.post(URL.SIGNUP_URL , {newUserDetails})
            console.log(response);
        } catch (error) {
            console.log(error);        
        }
        console.log(newUserDetails);
    } , [isAllSet])

     /////// redirecting to login page
    if(isSignedUp){
        return <Redirect to = "/" />
    }

    // getting user handle name
    
    const onChangeHandleNameHandler = (e) =>{
        setNewUserDetails({
            ...newUserDetails, userHandleName : e.target.value
        })
    }

    // getting user name
    const onChangeNameHandler = (e) =>{
        setNewUserDetails({
            ...newUserDetails, userName : e.target.value
        })
    }

    // getting user email
    const onChangeEmailHandler = (e) =>{
        setNewUserDetails({
            ...newUserDetails, userEmailAddress : e.target.value
        })
    }

    // getting user phoneNumber
    const onChangePhoneNumberHandler = (e) =>{
        setNewUserDetails({
            ...newUserDetails, userPhoneNumber : e.target.value
        })
    }

    // getting user first password
    const onChangeFirstPasswordHandler = (e) =>{
        setTempPasswordStorage({
            ...tempPasswordStorage , password1 : e.target.value
        });
    }

    // getting user confirm password
    const onChangeConfirmPasswordHandler = (e) =>{
        setIsChanged(true)
        if(e.target.value === tempPasswordStorage.password1){
            setIsSame(true);
        }else{
            setIsSame(false)
        }
        setTempPasswordStorage({
            ...tempPasswordStorage , password2 : e.target.value
        });
    }

    // handling sign in button
    const submitNewUsersAllInfo = (e) =>{
        e.preventDefault();
        console.log(tempPasswordStorage);
        if(newUserDetails.userHandleName && newUserDetails.userName && newUserDetails.userEmailAddress && newUserDetails.userPhoneNumber && tempPasswordStorage.password1 && tempPasswordStorage.password2){
            if(tempPasswordStorage.password1 === tempPasswordStorage.password2){
                setNewUserDetails({
                    ...newUserDetails , userPassword : tempPasswordStorage.password1,
                                        userInsertedTime : myFormattedTime()
                })
                setIsAllSet(true);
                setIsSignedUp(true);
            } else {
                alert('!!! Check password !!!')
            }
        } else {
            alert('Sorry Dude')
        }
        ///////// setting up that we are ready to go to log in page ///
        
    }
    
    
    ///////////////////////////////////////////////////////////// view portion  /////////////////////////////////////////////////////////////////

    return <SignInForm 
                isSame = {isSame}
                isChanged = {isChanged}
                newUserDetails = {newUserDetails}
                tempPasswordStorage = {tempPasswordStorage}
                onChangeHandleNameHandler = {onChangeHandleNameHandler}
                onChangeNameHandler = {onChangeNameHandler}
                onChangeEmailHandler = {onChangeEmailHandler}
                onChangePhoneNumberHandler = {onChangePhoneNumberHandler}
                onChangeFirstPasswordHandler = {onChangeFirstPasswordHandler}
                onChangeConfirmPasswordHandler = {onChangeConfirmPasswordHandler}
                submitNewUsersAllInfo = {submitNewUsersAllInfo}
            />
}
