import React from 'react';
import s from './ReduxForm.module.css';

let FormControls = ({input, meta, ...props}) => {
    let error = meta.touched && meta.error;
    return (
        <div className={s.fieldWrapper}>
            {props.children}
            {
                error &&
                <div className={s.textError}>
                    <span>{meta.error}</span>
                </div>
            }
        </div>
    )
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    let error = meta.touched && meta.error;
    return (
        <FormControls {...props}>
            <input className={`${error ? s.requiredField : ''}`} {...input} {...restProps}/>
        </FormControls>
    )
};
export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
    let error = meta.touched && meta.error;
    return (
        <FormControls {...props}>
            <textarea className={`${error ? s.requiredField : ''}`} {...input} {...restProps}/>
        </FormControls>
    )
};