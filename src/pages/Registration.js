import React, { Fragment } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const Registration = () => {
    const initialValues = {}

    const validationSchema = Yup.object({});

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
