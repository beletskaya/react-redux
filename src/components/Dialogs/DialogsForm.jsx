import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from './Dialogs.module.css'
import {Textarea} from "../../helpers/controls/formControls";
import {maxLengthCreator, required} from "../../helpers/validators/validators";

const maxLength = maxLengthCreator(20)

const DialogForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={"messageText"}
               placeholder="Enter text"
                validate={[required, maxLength]}/>
        <div>
            <button type={'submit'} className={classes.add}>Отправить</button>
            <button className={classes.remove}>Отменить</button>
        </div>
    </form>
}

const DialogReduxForm = reduxForm({
    form: 'textarea-message'
})(DialogForm)
export default DialogReduxForm