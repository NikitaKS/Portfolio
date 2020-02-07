import React from 'react';
import s from '../Content/Content.module.css';
import ReduxContactForm from "../../reduxForm/ReduxContactForm";

const ContactForm = (props) => {
    const onSubmit = (fromData) => {
        alert('asd')
    };
    return (
        <div className={s.contactFormWrapper}>
            <div className='container'>
                <div className={s.contentFormIn}>
                    <div className={s.contactFormTitle}>Contact Me</div>
                    <div className={s.contactFormDesc}>Fill this out so we can learn more about you and your needs.
                    </div>
                    <div>
                        <ReduxContactForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ContactForm;


