import React from "react";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Redirect } from 'react-router'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps =(state) => {
    return {
        textMessage: state.dialogPage.textMessage,
        dialogData: state.dialogPage.dialogData,
        messagesData: state.dialogPage.messagesData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageText) => {
            dispatch(addMessageActionCreator(messageText));
        }
    }
}
/*const AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;*/

export default compose(connect(mapStateToProps, mapDispatchToProps), //что выше - написано одно и то же, только через функция compose (встроенная функция редакса)
    withAuthRedirect)(Dialogs)
