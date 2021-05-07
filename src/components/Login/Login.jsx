import React from 'react';
import classes from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../helpers/controls/formControls";
import {required} from "../../helpers/validators/validators";
import { Redirect } from 'react-router'

const LoginForm = (props) => {
    return <div className={classes.wrapper}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={required} name={'name'} type="text" placeholder={'Email'}/>
            </div>
            <div>
                <Field component={Input} validate={required} name={'password'} type="password" placeholder={'Password'}/>
            </div>
            <div className={classes.checkbox}>
                <Field component={Input} name={'rememberMe'} type="checkbox"/>remember me</div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => { //тут все значение формы
        console.log(formData)
       // debugger
        props.loginThunkCreator(formData.name, formData.password, formData.rememberMe)

    }
    if(props.isAuth){
        //debugger
        return <Redirect to={'profile'}/>
    }
    //debugger
    return <div className={classes.wrapper}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login