import React from 'react';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileLeft from "./ProfileLeft/ProfileLeft";
import ProfileRight from "./ProfileRight/ProfileRight";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {updateStatusThunkCreator} from "../../redux/profile-reducer";


let Profile = (props) => {
//debugger
    return (
        <div className={classes.profileWrapper}>
            <div className={classes.info}>
                <ProfileLeft store={props.store}/>
                <ProfileLeft store={props.store}/>
            </div>
            <div className={classes.mainProfile}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatusThunkCreator}/>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
            <div className={classes.anotherInfo}>
                <ProfileRight store={props.store}/>
            </div>

        </div>
    )
}

export default Profile;