import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError/TextError';

const Textarea = props => {
    const { label,name,...rest } = props;
    console.log(props)
    return (
        <div className="row justify-content-center">
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;
