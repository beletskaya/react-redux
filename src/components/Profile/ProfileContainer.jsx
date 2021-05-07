import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    setUsersProfile,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        //debugger
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatusThunkCreator}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer) // add HOC function to not repeat code( made wrapper container component)
const UrlRouterComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getProfileThunkCreator})(UrlRouterComponent)
*/

export default compose(connect(mapStateToProps,
    {getProfileThunkCreator,
        getStatusThunkCreator,updateStatusThunkCreator}),
    withRouter,
    withAuthRedirect)(ProfileContainer)