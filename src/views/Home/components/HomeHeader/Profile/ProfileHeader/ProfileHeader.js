import React from 'react'
import { CgFeed } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Button  } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


export default function ProfileHeader(props) {
    const {
        authorisedUserDetails, 
        setAuthorisedUserDetails
    } = props
    
    const useStyles = makeStyles(theme => ({
        root_status:{
            display : 'flex',
            flexDirection : 'row',

        },
        // icons : {
        //     display : 'flex',
        //     alignItems : 'center',
        //     justifyContent : 'center'
        // },
        // logger_name:{
        //     fontSize : '25px',
        //     fontFamily : 'arial',
        //     color : '#3d3c38'
        // }
        
    }));

    const styles = useStyles();

    return (
        <div className = {styles.root_status}>
            {/* logged in as portion */}
            <div className = {styles}>
                <p className = {styles.logger_name}>
                    <b>{authorisedUserDetails.userHandle}</b>
                </p>
            </div>

            <div className = {styles.icons}>
                <Link to="/Status">
                    <Button>
                        <CgFeed size = "40" />
                    </Button>
                </Link>
                <Link to="/Settings">
                    <Button>
                        <FiSettings size = "40" />
                    </Button>
                </Link>
            </div>
        </div>
    )
}
