import React from 'react';
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
        case 'date':
        default: 
            return null;
    }
};

export default FormikControls;
