import React, { Fragment } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import FormikControls from '../components/FormikControl/FormikControls';

const FormikProject = () => {

    const initialValues = {
        email:''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required')
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
