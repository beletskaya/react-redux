import React from 'react';
import classes from "../Profile.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deleteEditMode = () => {
        this.setState({
            editMode: false
        })
        //debugger
        this.props.updateStatus(this.state.status);
    }
    changeValueInput = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //debugger
        if (prevProps.status !== prevState.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={classes.statusWrapper}>
                {!this.state.editMode &&
                <div className={classes.info}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                </div>
                }

                {this.state.editMode &&
                <div className={classes.input}>
                    <input onBlur={this.deleteEditMode}
                           autoFocus={true} type="text"
                           value={this.state.status}
                           onChange={this.changeValueInput}/>
                </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;