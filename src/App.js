import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Photo from "./components/Photo/Photo";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import HeaderPhoto from "./components/HeaderPhoto/HeaderPhoto";
import Avatar from "./components/Avatar/Avatar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import LoginContainer from "./components/Login/LoginContainer";

function App(props) {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className="profile-wrapper">
                    <HeaderPhoto/>
                    <Avatar/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render = { () => <ProfileContainer/>}/>
                        <Route path='/photo' render = { () => <Photo/>}/>
                        <Route path='/dialogs' render = { () => <DialogsContainer/>}/>
                        <Route path='/friends' render = { () => <Friends/>}/>
                        <Route path='/users' render = { () => <UsersContainer/>}/>
                        {/*<Route path='/music' render = { () => <Music/>}/>*/}
                        <Route path='/settings' render = { () => <Settings/>}/>
                        <Route path='/login' render = { () => <LoginContainer/>}/>
                    </div>
                </div>

            </div>
    );
}

export default App;
