import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogsForm from "./DialogsForm";
import DialogReduxForm from "./DialogsForm";

const Dialogs = (props) => {

    //let state = props.store.getState().dialogPage;
    let dialogElements = props.dialogData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);


    let messagesElements = props.messagesData.map(messages =>
        <Message message={messages.message} id={messages.id} key={messages.id}/>);
    let newMessage = React.createRef();

    const onSubmit = (values) => { //тут все значение textarea
       // console.log(values.messageText)
        props.addMessage(values.messageText);
    }
    return (
        <div>
            <div className={s.wrapperArea}>
                <p className={s.text}>Ответить на сообщение</p>
               <DialogReduxForm newMessage={newMessage}
                                onSubmit={onSubmit}/>

            </div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>

                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>

        </div>
    )
}

export default Dialogs;