import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import FormikInput from "../components/formikInput";
import FormikInputNotReq from "./../components/formikInputNr";
import {
  MailOutlineOutlined,
  PermIdentityOutlined,
  LockOutlined,
} from "@material-ui/icons";
import { _todayDate } from "./../helper/_todayDate";
import FormikSelect from "./../components/formikSelect";

const initData = {
  name: "",
  email: "",
  phone: "",
  fromDate: _todayDate(),
  gender: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const AllTypeForm = () => {
  const saveHandler = (values) => {
    console.log(values);
  };
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
          <Form onSubmit={handleSubmit}>
            <TopNavigation title="All Type Form Field" />
            <div className="container">
              <h2>All Type Form</h2>
              <div className="row">
                <div className="col-lg-3">
                  <div className="form-group my-input">
                    <FormikInput
                      label="Name"
                      value={values?.name}
                      name="name"
                      type="text"
                      leadicon={<PermIdentityOutlined />}
                      trailicon={<PermIdentityOutlined />}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group my-input">
                    <FormikInput
                      label="Email"
                      value={values?.email}
                      name="email"
                      type="email"
                      className="form-control"
                      leadicon={<MailOutlineOutlined />}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group my-input">
                    <FormikInputNotReq
                      label="Phone"
                      value={values?.phone}
                      name="phone"
                      type="number"
                      className="form-control"
                      leadicon={"fa fa-mobile"}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group my-input">
                    <FormikInputNotReq
                      // label="Form Date"
                      value={values?.fromDate}
                      name="fromDate"
                      type="date"
                      className="form-control"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <FormikSelect
                    name="gender"
                    options={[
                      { value: 1, label: "Male" },
                      { value: 2, label: "Female" },
                    ]}
                    value={values?.gender}
                    label="Gender"
                    onChange={(valueOption) => {
                      setFieldValue("gender", valueOption);
                    }}
                    placeholder="Gender"
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="col-lg-3">
                  <div className="form-group my-input">
                    <FormikInput
                      label="Password"
                      value={values?.password}
                      name="password"
                      type="password"
                      className="form-control"
                      leadicon={<LockOutlined />}
                      passwordicon={"fa fa-eye"}
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
          </Form>
        </>
      )}
    </Formik>
  );
};

export default AllTypeForm;
