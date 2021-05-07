import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.appGroup}>
                <div className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active} >Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/photo' activeClassName={classes.active} >Photo</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.active} >Messages</NavLink>
                </div>
            </div>
            <div className={classes.appGroup}>
                <div className={classes.item}>
                    <NavLink to='/friends' activeClassName={classes.active} >Friends</NavLink>
                </div>

                <div className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.active} >Users</NavLink>
                </div>
                {/*
                <div className={classes.item}>
                    <NavLink to='/music' activeClassName={classes.active} >Music</NavLink>
                </div>*/}
                <div className={classes.item}>
                    <NavLink to='/settings' activeClassName={classes.active} >Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;