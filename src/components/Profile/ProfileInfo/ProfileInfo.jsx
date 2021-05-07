import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader";
import iconFacebook from "../../../assets/images/facebook-logo.png"
import iconWebsite from "../../../assets/images/asmallworld-logo.png"
import iconVk from "../../../assets/images/vk-social-logotype.png"
import iconTwitter from "../../../assets/images/twitter-logo.png"
import iconInstagram from "../../../assets/images/instagram-social-network-logo-of-photo-camera.png"
import iconYoutube from "../../../assets/images/youtube-symbol.png"
import iconGithub from "../../../assets/images/vine-logo.png"
import defaultImg from "../../../assets/images/default-avatar.jpg"

let ProfileInfo = (props) => {
    if (!props.profile) {  //jsx отрисовыввается сразу и не сждет пока сработает запрос и чтоб работало корректно - мы добавили проверку с прелоадером не равняется ли профайл null or undefined
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.descriptionBlock}>
                <div className={classes.image}>
                    <img src={props.profile.photos.small !== null ? props.profile.photos.small : defaultImg} alt="photo"/>
                </div>

                {/*<ProfileStatus status={props.status} updateStatus={props.updateStatusThunkCreator}/>*/}

                <p className={classes.name}>{props.profile.fullName}
                    <span className={props.profile.lookingForAJob ? classes.job : null}></span>
                </p>
                <p className={classes.about}>{props.profile.aboutMe}</p>
                <p>Описание: <span>{props.profile.lookingForAJobDescription}</span></p>
                <div className={classes.contacts}>
                    <a href={props.profile.contacts.facebook} className={props.profile.contacts.facebook ? classes.iconBlock : classes.iconNone}>
                        <img src={iconFacebook} alt="facebook"/>
                    </a>
                    <a href={props.profile.contacts.website} className={props.profile.contacts.website ? classes.iconBlock : classes.iconNone}>
                        <img src={iconWebsite} alt="website"/>
                    </a>
                    <a href={props.profile.contacts.vk} className={props.profile.contacts.vk ? classes.iconBlock : classes.iconNone}>
                        <img src={iconVk} alt="vk"/>
                    </a>
                    <a href={props.profile.contacts.twitter} className={props.profile.contacts.twitter ? classes.iconBlock : classes.iconNone}>
                        <img src={iconTwitter} alt="twitter"/>
                    </a>
                    <a href={props.profile.contacts.instagram} className={props.profile.contacts.instagram ? classes.iconBlock : classes.iconNone}>
                        <img src={iconInstagram} alt="instagram"/>
                    </a>
                    <a href={props.profile.contacts.youtube} className={props.profile.contacts.youtube ? classes.iconBlock : classes.iconNone}>
                        <img src={iconYoutube} alt="youtube"/>
                    </a>
                    <a href={props.profile.contacts.github} className={props.profile.contacts.github ? classes.iconBlock : classes.iconNone}>
                        <img src={iconGithub} alt="github"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;