import React from 'react';
import DateView  from "react-datepicker";
import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError/TextError';

import "react-datepicker/dist/react-datepicker.css";

const DatePickers = props => {
    const { label, name, ...rest } = props;
    return (
        <div className="row justify-content-center">
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    ({form,field}) => {
                        const {setFieldValue} = form
                        const {value} = field
                        return (
                            <DateView  id={name} {...field} {...rest} selected={value} onChange={val => setFieldValue(name,val)} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePickers;
