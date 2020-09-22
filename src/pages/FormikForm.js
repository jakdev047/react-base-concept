import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TextInput from '../components/TextInput/TextInput';

const initialValues = {
    name: '',
    email: '',
    profession: ''
}

const onSubmit = values => {
    console.log(values);
}

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    }else if( !/^[A-Z0-9._%+-]+@[A-Z]+\.[A-Z]{2,4}$/i.test(values.email) ) {
        errors.email = 'Invalid Email Valid';
    }

    if (!values.profession) {
        errors.profession = 'Required';
    }

    return errors;
}

const FormikForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log(formik.errors,formik.touched);

    return (
        <Fragment>
            <TopNavigation title="Formik Form" />
            <div className="container">
                <h2>Formik Form</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <TextInput 
                                label="Name *" 
                                placeholder="Enter Name" 
                                id="name" 
                                name="name" 
                                value={formik.values.name} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.name && formik.errors.name ? (
                                    <div className="error">{formik.errors.name}</div>
                                ) : null
                            }
                        </div>
                        <div className="col-12">
                            <TextInput 
                                label="Email *" 
                                placeholder="Enter Email" 
                                type="email"
                                id="email" 
                                name="email" 
                                value={formik.values.email} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.email && formik.errors.email ? (
                                    <div className="error">{formik.errors.email}</div>
                                ) : null
                            }
                        </div>
                        <div className="col-12">
                            <TextInput 
                                label="Profession *" 
                                placeholder="Enter Profession" 
                                id="profession" 
                                name="profession" 
                                value={formik.values.profession} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                            />
                            {
                                formik.touched.profession && formik.errors.profession ? (
                                    <div className="error">{formik.errors.profession}</div>
                                ) : null
                            }
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

export default FormikForm;
