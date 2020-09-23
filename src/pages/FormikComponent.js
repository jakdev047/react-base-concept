import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';

const initialValues = {
    name: '',
    email: '',
    profession: ''
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    profession: Yup.string().required('Profession is required')
});

const FormikComponent = () => {
    return (
        <Fragment>
            <TopNavigation title="Formik Form" />
            <div className="container">
                <h2>Formik Component</h2>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <Field 
                                type="text"
                                id="name"
                                name="name"
                            />
                            <ErrorMessage name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <Field 
                                type="email"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profession">Profession*</label>
                            <Field 
                                type="text"
                                id="profession"
                                name="profession"
                            />
                            <ErrorMessage name="profession" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Fragment>
    )
};

export default FormikComponent;
