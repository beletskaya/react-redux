import React from "react";
import {connect} from "react-redux";
import {
    deleteUsersThunkCreator,
    follow, followUsersThunkCreator, getUsersThunkCreator,
    setPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollow
} from "../../redux/users-reducer";
import UsersFunc from "./UsersС";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../api/api";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersApiComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    changePage = (numberPage) => {
        this.props.getUsers(this.props.pageSize, this.props.currentPage, numberPage)


        /*this.props.toggleIsFetching(true)
        this.props.setPage(numberPage);
        getUsers(this.props.pageSize, numberPage).then(result => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(result.items)
            })*/
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersFunc totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       changePage={this.changePage}
                       users={this.props.users}
                       isFollowingProgress={this.props.isFollowingProgress}
                       followUsersThunkCreator={this.props.followUsersThunkCreator}
                       deleteUsersThunkCreator={this.props.deleteUsersThunkCreator}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user))
        },
        setPage: (currentPage) => {
            dispatch(setPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/

export default compose(connect(mapStateToProps,
    {getUsers: getUsersThunkCreator,
        followUsersThunkCreator, deleteUsersThunkCreator}),
    withAuthRedirect)(UsersApiComponent)