import React from 'react';
import CheckboxGroup from '../FormController/CheckboxGroup';
import DatePickers from '../FormController/DatePickers';
import Input from '../FormController/Input';
import RadioButtons from '../FormController/RadioButtons';
import Select from '../FormController/Select';
import Textarea from '../FormController/Textarea';

const FormikControls = props => {

    const {control,...rest} = props;

    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'textarea':
            return <Textarea {...rest} /> 
        case 'select':
            return <Select  {...rest} /> 
        case 'radio':
            return <RadioButtons {...rest}  />
        case 'checkbox':
            return <CheckboxGroup  {...rest}  />
        case 'date':
            return <DatePickers {...rest}  />
        default: 
            return null;
    }
};

export default FormikControls;
