import React from "react";
import {connect} from "react-redux";
import {setAuthData, authThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authThunkCreator()
    }

    render(){
        return <> <Header {...this.props}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthData, authThunkCreator,logoutThunkCreator})(HeaderContainer)