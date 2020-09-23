import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TextError from '../components/TextError/TextError';

const initialValues = {
    name: '',
    email: '',
    profession: '',
    address: '',
    comments: ''
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().trim().required('Name is required'),
    email: Yup.string().trim().email('Invalid Email').required('Email is required'),
    profession: Yup.string().trim().required('Profession is required'),
    address: Yup.string().trim(),
    comments: Yup.string().trim()
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
                            <label htmlFor="name">Name*: </label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component={TextError}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*: </label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="profession">Profession*: </label>
                            <Field type="text" id="profession" name="profession" />
                            <ErrorMessage name="profession">
                                { errorMsg => <div className="error">{errorMsg}</div> }
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address: </label>
                            <Field type="text" name="address">
                                {
                                    props => {
                                        const {field,form,meta} = props;
                                        return (
                                            <div>
                                                <input type="text" id="address" {...field}/>
                                                {
                                                    meta.touched && meta.error ? <div>{meta.error}</div> : null
                                                }
                                            </div>
                                        );
                                    }
                                }
                            </Field>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comments">Comments: </label>
                            <Field as="textarea" id="comments" name="comments" />
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
