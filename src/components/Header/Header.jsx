import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

let Header = (props) => {
    //debugger
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <p>Profile Page</p>
                <div className={classes.wrapperLogin}>
                    {props.isAuth
                        ? <><span>{props.login}</span> <button className={classes.logout} onClick={props.logoutThunkCreator}>Log out</button></>
                        : <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </div>

        </header>
    )
}
export default Header;