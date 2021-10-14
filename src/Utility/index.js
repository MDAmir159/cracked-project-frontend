export const isLoggedIn = () =>{
    let value = localStorage.getItem('DLGT_PROJECT2_postGivingAppRemastered')
    if(value){
        const obj = JSON.parse(value);
        // console.log(obj.loggedIn);
        return obj.loggedIn;
    } else {
        return false;
    }    
}

export const getloggedInUsersInfo = () =>{
    let value = localStorage.getItem('DLGT_PROJECT2_postGivingAppRemastered');
    if(value){
        const obj = JSON.parse(value);
        // console.log(obj.userDetails);
        return obj.userDetails;
    } else{
        return false;
    }
    
    
}

export const getLoggedIn = (key , value) =>{
    localStorage.setItem(key,value);
}

export const getLoggedOut = (key,value) =>{
    localStorage.setItem(key,value);
}
