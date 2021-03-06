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

    const radioOptions = [
        {key: 'Option 1', value:'roption1'},
        {key: 'Option 2', value:'roption2'},
        {key: 'Option 3', value:'roption3'},
    ]

    const checkboxOptions = [
        {key: 'Option 1', value:'coption1'},
        {key: 'Option 2', value:'coption2'},
        {key: 'Option 3', value:'coption3'},
    ]

    const initialValues = {
        email:'',
        descripption: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        descripption: Yup.string().required('Description is required'),
        selectOption: Yup.string().required('Select Option is required'),
        radioOption: Yup.string().required('radio Option is required'),
        checkboxOption: Yup.array().required('Check Option is required'),
        birthDate: Yup.date().required('Birth Date is required').nullable(),
    });

    const onSubmit = (values,onSubmitProps) => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log(JSON.parse(JSON.stringify(values)));
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
                                        <FormikControls control="radio" name="radioOption" options={radioOptions} label=" Radio Topic * : " />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="checkbox" name="checkboxOption" options={checkboxOptions} label="Checkbox Topics*:" />
                                    </div>
                                    <div className="form-group">
                                        <FormikControls control="date" name="birthDate" label="Pick a date *:" />
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
