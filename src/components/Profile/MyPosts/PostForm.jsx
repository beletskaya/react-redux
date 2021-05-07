import React from 'react';
import classes from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../../helpers/controls/formControls";

const maxLength = maxLengthCreator(10)
function PostForm(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"postArea"}
                   validate={[required, maxLength]}
            placeholder={'Post message'}/>
            <button className={classes.add} type={"submit"}>Add post</button>
            <button className={classes.remove}>Cancel</button>
        </form>
    )
}
const PostReduxForm = reduxForm({
    form: 'post-message'
})(PostForm)
export default PostReduxForm;