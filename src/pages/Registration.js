import React, { Fragment } from 'react';
import { Form, Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import FormikControls from '../components/FormikControl/FormikControls';

const Registration = () => {
    
    const options = [
        {key: 'Email', value:'emailmoc'},
        {key: 'Telephone', value:'telephonemoc'}
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Formate').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),''],'Password must match').required('Confirm Password is required'),
        modeOfContact: Yup.string().required('Mode of Contact is required'),
        phone: Yup.string().when('modeOfContact',{
            is: 'telephonemoc',
            then: Yup.string().required('Phone is required'),
        })

    });

    const onSubmit = (values,onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log(JSON.parse(JSON.stringify(values)));
    }
    return (
        <Fragment>
            <TopNavigation title="Registration" />
            <div className="container">
                <h2>Registration</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
                    {
                        formik => {
                            return(
                                <Form>
                                    <div className="form-group">
                                        <FormikControls control="input" type="email" name="email" label=" Email * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="input" type="password" name="password" label=" Password * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="input" type="password" name="confirmPassword" label="Confirm Password * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="radio" name="modeOfContact" options={options} label=" Mode Of Contact * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="input" type="text" name="phone" label=" Phone Number: " />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success" disabled={!formik.isValid || formik.isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>  
        </Fragment>
    )
}

export default  Registration;
