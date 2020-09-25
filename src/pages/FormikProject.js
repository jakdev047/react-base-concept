import React, { Fragment } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import FormikControls from '../components/FormikControl/FormikControls';

const FormikProject = () => {

    const dropdownOptions = [
        {key: 'Select an Option', value:''},
        {key: 'Option 1', value:'option1'},
        {key: 'Option 2', value:'option2'},
        {key: 'Option 3', value:'option3'},
    ]

    const initialValues = {
        email:'',
        descripption: '',
        selectOption: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        descripption: Yup.string().required('Description is required'),
        selectOption: Yup.string().required('Select Option is required'),
    });

    const onSubmit = (values,onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log(values);
    }

    return (
        <Fragment>
            <TopNavigation title="Formik Form" />
            <div className="container">
                <h2>Formik Project</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
                    {
                        formik => {
                            return(
                                <Form>
                                    <div className="form-group">
                                        <FormikControls control="input" type="email" name="email" label=" Email * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="textarea" name="descripption" label=" Description * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="select" name="selectOption" options={dropdownOptions} label=" Select a Topic * : " />
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

export default FormikProject;
