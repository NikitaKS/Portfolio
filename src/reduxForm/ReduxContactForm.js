import {Field, reduxForm} from "redux-form";
import React from "react";
import s from './ReduxForm.module.css';
import {emailValid, maxLengthCreator, minLengthCreator, requiredFiled} from "./validators";
import {Input, TextArea} from "./FormControls";

let minLength5 = minLengthCreator(5);
let maxLength20 = maxLengthCreator(20);

const reduxContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputFormWrapper}>
                <Field component={Input} type='text' autoComplete='off'
                       placeholder='Full name' name='fullName'
                       validate={[requiredFiled, minLength5, maxLength20]}/>
                <Field component={Input} type='text' autoComplete='off'
                       placeholder='E-mail' name='email'
                       validate={[requiredFiled, emailValid]}/>
                <Field component={Input} type='text' autoComplete='off'
                       placeholder='Telegram' name='telegram'/>
                <Field component={TextArea} placeholder='Your Message'
                       name='message' validate={[requiredFiled, minLength5]}/>
            </div>
            <button className={'MenuButtonIn'}>Send Message</button>
        </form>
    )
};
export default reduxForm({form: 'contactForm'})(reduxContactForm);