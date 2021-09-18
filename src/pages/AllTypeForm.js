import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import FormikInput from "../components/formikInput";

const initData = {
  name: "",
  email: "",
  profession: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

const AllTypeForm = () => {
  const [isFocusForm, setIsFocusForm] = useState(false);
  const saveHandler = (values) => {
    console.log(values);
  };
  console.log("isFocusForm", isFocusForm);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initData}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        saveHandler(values, () => {
          resetForm(initData);
        });
      }}
    >
      {({
        handleSubmit,
        resetForm,
        values,
        errors,
        touched,
        setFieldValue,
        isValid,
      }) => (
        <>
          <form onSubmit={handleSubmit}>
            <TopNavigation title="All Type Form Field" />
            <div className="container">
              <h2>All Type Form</h2>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group my-input">
                    <label
                      className={isFocusForm ? "onFocusLabel" : "onBlurLabel"}
                    >
                      {"Name"}
                    </label>
                    <span className="form-icon">
                        <i className="fa fa-envelope"></i>
                    </span>
                    <FormikInput
                      value={values?.name}
                      name="name"
                      type="text"
                      className="form-control"
                      onFocus={() => {
                        setIsFocusForm(true);
                      }}
                      onBlur={() => {
                        setIsFocusForm(false);
                      }}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary save-btn">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </Formik>
  );
};

export default AllTypeForm;
