import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useLocation , Redirect} from 'react-router-dom';
import PostBox from './components/PostBox'
import HomeElements from './HomeElements'
import { URL } from '../../urls/url';
import { getloggedInUsersInfo } from '../../Utility';

export default function Home(props) {
    
    let location = useLocation()

    ////////////////////////////////////////////     model portion     ///////////////////////////////////////
    const [newPost, setNewPost] = useState();
    const [postItemsIntel, setPostItemsIntel] = useState([]);
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(getloggedInUsersInfo());
    
    ///////////////////////////////////////////        controller     ///////////////////////////////////////////

    useEffect(async() => {
        
        try {
            const res = await axios.get(URL.POST_LIST_ITEMS_URL)
            if(res.data){
                setPostItemsIntel(res.data);
                // console.log(res.data);
            } else {
                return <Redirect to = '/internal_server_error' />
            }
            
        } catch (error) {
            console.log(error);
        }
        
        // axios.get(URL.POST_LIST_ITEMS_URL)
        // .then((res)=>{
        //     setPostItemsIntel(res.data);
        // })


    }, [])
    ///////////////////////////////////////   view   /////////////////////////////////////////////////////
    return <HomeElements 
                newPost = {newPost}
                authorisedUserDetails = {authorisedUserDetails}
                setAuthorisedUserDetails = {setAuthorisedUserDetails}
                postItemsIntel = {postItemsIntel}
                setNewPost = {setNewPost}
            />
}
