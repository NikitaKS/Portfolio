import React from 'react';
import s from '../Content/Content.module.css';
import axios from 'axios';
import {reset} from 'redux-form'
import ReduxContactForm from "../../reduxForm/ReduxContactForm";
import {useDispatch} from "react-redux";

const ContactForm = (props) => {
    let dispatch = useDispatch();
    let onSubmit = (formData) => {
        axios.post('https://mailer-send.herokuapp.com/send',
            {name: formData.fullName, email: formData.email, message: formData.message})
            .then(e => {
                dispatch(reset('contactForm'));
                return alert("Success");
            })
            .catch(e => {
                return alert("ERROR")
            })
    };
    return (
        <div className={s.contactFormWrapper}>
            <div className='container'>
                <div className={s.contentFormIn}>
                    <div className={s.contactFormTitle}>Contact Me</div>
                    <div className={s.contactFormDesc}>Fill this form and i can learn more about you and your needs.
                    </div>
                    <ReduxContactForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
};
export default ContactForm;


