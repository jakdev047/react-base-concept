import React, { Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TextError from '../components/TextError/TextError';

const initialValues = {
    name: '',
    email: '',
    profession: '',
    address: '',
    comments: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['',''],
    phNumbers: ['']
}

const onSubmit = values => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().trim().required('Name is required'),
    email: Yup.string().trim().email('Invalid Email').required('Email is required'),
    profession: Yup.string().trim().required('Profession is required'),
    comments: Yup.string().required('Comments is required'),
});

const validateComments = value => {
    let error;
    if(!value) {
        error = 'Required';
    }
    return error;
}

const FormikComponent = () => {
    return (
        <Fragment>
            <TopNavigation title="Formik Form" />
            <div className="container">
                <h2>Formik Component</h2>
                <Formik 
                    initialValues={initialValues} 
                    onSubmit={onSubmit} 
                    validationSchema={validationSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
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
                            <label htmlFor="social">Facebook: </label>
                            <Field type="text" id="social" name="social.facebook" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="social">Twitter: </label>
                            <Field type="text" id="social" name="social.twitter" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phnNumber1">Primary Numbers: </label>
                            <Field type="text" id="phnNumber1" name="phoneNumbers[0]" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phnNumber2">Secondary Numbers: </label>
                            <Field type="text" id="phnNumber2" name="phoneNumbers[1]" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phNumbers">List Of Phone Numbers: </label>
                            <FieldArray name="phNumbers">
                                {
                                    fieldArrayProps => {
                                        const { push, remove, form} = fieldArrayProps;
                                        const { values } = form;
                                        const { phNumbers } = values;
                                        return (
                                            <div>
                                                {
                                                    phNumbers.map((phNumber,index)=>(
                                                        <div key={index}>
                                                            <FastField name={`phNumbers[${index}]`} />
                                                            {
                                                                index > 0 &&
                                                                <button type="button" className="btn btn-danger" onClick={()=>remove(index)}>
                                                                    {' '} - {' '}
                                                                </button>
                                                            }
                                                            <button type="button" className="btn btn-success" onClick={()=>push('')}>
                                                                {' '} + {' '}
                                                            </button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comments">Comments: </label>
                            <Field as="textarea" id="comments" name="comments" validate={validateComments} />
                            <ErrorMessage name="comments" component={TextError}/>
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
