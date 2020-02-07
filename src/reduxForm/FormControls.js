import React from 'react';
import s from './ReduxForm.module.css';
// let FormControls = ({input, meta, ...restProps}) => {
//
// };

export const Input = ({input, meta, ...restProps}) => {
    let error = meta.touched && meta.error;
    return (
        <div className={s.fieldWrapper}>
            <input className={`${error ? s.requiredField : ''}`} {...input} {...restProps}/>
            {
                meta.touched &&
                <div className={s.textError}>
                    <span>{meta.error}</span>
                </div>
            }
        </div>

    )
};
export const TextArea = ({input, meta, ...restProps}) => {
    let error = meta.touched && meta.error;
    return (
        <div className={s.fieldWrapper}>
            <textarea className={`${error ? s.requiredField : ''}`} {...input} {...restProps}/>
            {
                meta.touched &&
                <div className={s.textError}>
                    <span>{meta.error}</span>
                </div>
            }
        </div>

    )
};