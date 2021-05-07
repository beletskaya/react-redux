import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {loginThunkCreator, setAuthData} from "../../redux/auth-reducer";

class LoginContainer extends React.Component{
    componentDidMount() {
        this.props.loginThunkCreator()
    }

    render(){
        return <> <Login {...this.props} loginThunkCreator={this.props.loginThunkCreator}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthData, loginThunkCreator})(LoginContainer)