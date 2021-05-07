import React from 'react';
import {connect} from "react-redux";

const ProfileText = (props) => {
    return <div className="contentInfo">
        <p className="mainText">
            {props.infoTitle}
        </p>
        <p className="textInfo">
            {props.infoDescription}
        </p>
    </div>
}

function ProfileRight(props) {
    const {profileInfo} = props;
    let profileElem = profileInfo.map(info =>
        <ProfileText infoTitle={info.infoTitle} infoDescription={info.infoDescription}/>
    );
    return <div className="profileInfo">
        <div className="wrapperInfo">
            <h6 className="titleInfo">
                Profile Intro
            </h6>
            {profileElem}
        </div>
    </div>

}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

export default connect(mapStateToProps)(ProfileRight);