import React, { Fragment } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const FormikProject = () => {

    const initialValues = {

    }

    const validationSchema = Yup.object({

    });

    const onSubmit = values => {
        console.log(values);
    }

    return (
        <Fragment>
            <TopNavigation title="Formik Form" />
            <div className="container">
                <h2>Formik Project</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        formik => {
                            return(
                                <Form>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success">Submit</button>
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
