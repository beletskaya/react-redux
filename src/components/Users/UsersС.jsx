import React from "react";
import s from './Users.module.css';
import userPhoto from "../../assets/images/default-avatar.jpg"
import {NavLink} from "react-router-dom";
import {deleteUser, postUser} from "../../api/api";
import {deleteUsersThunkCreator, followUsersThunkCreator, toggleIsFollowingProgress} from "../../redux/users-reducer";

let UsersFunc = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div className={s.main}>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && s.activePage}
                                 onClick={(e) => {
                                     props.changePage(p)
                                 }}
                    >{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.wrapper}>

                    <div className={s.firstBlock}>
                    <NavLink to={'profile/' + u.id}>
                        <span>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="image"/>
                        </span>
                    </NavLink>
                        {u.followed
                            ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} //какой-то id и он равен кликнотому id
                                    className={s.button} onClick={() => {

                                props.deleteUsersThunkCreator(u.id)

                            }}>Unfollow</button>
                            : <button disabled={props.isFollowingProgress.some(id => id === u.id)} className={s.button} onClick={() => {
                                debugger
                                props.followUsersThunkCreator(u.id)
                                /*props.toggleIsFollowingProgress(true, u.id);

                                postUser(u.id).then(result => {
                                    if(result.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                    props.toggleIsFollowingProgress(false, u.id)

                                })*/
                            }}>Follow</button>}
                    </div>
                    <div className={s.secondBlock}>
                        <div className={s.nameWrapper}>
                            <p className={s.name}>{u.name}</p>
                            <p className={s.status}>{u.status !== null ? u.status : "I`m a boss"}</p>
                        </div>
                        <div className={s.locationWrapper}>
                            <p className={s.city}>
                                Kiev
                            </p>
                            <p className={s.country}>
                                Ukraine
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}
export default UsersFunc;