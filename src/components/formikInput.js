import React from "react";
import { Field } from "formik";
import FormikError from "./formikError";
import moment from "moment";
const FormikInput = (props) => {
  const { placeholder, value, name, type, errors, touched, disabled } =
    props;
    const number = type === "number" ? String(Number(value)) : value;
  return (
    <>
      <Field
        {...props}
        value={number}
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        data-date={value ? moment(value).format("DD-MMMM-YYYY") : placeholder}
      />
      <FormikError errors={errors} touched={touched} name={name} />
    </>
  );
};

export default FormikInput;

// usage

/* 
<div className="col-lg-3">
  <label>Delivery Address</label>
  <FormikInput
    value={values?.deliveryAddress}
    name="deliveryAddress"
    placeholder="Delivery Address"
    type="text"
    errors={errors}
    touched={touched}
    />
</div>
*/
