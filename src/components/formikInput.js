import React, { useState } from "react";
import { Field } from "formik";
import FormikError from "./formikError";
import moment from "moment";
const FormikInput = (props) => {
  const {
    label,
    placeholder,
    value,
    name,
    type,
    errors,
    touched,
    disabled,
    leadicon,
    trailicon,
    passwordicon,
  } = props;
  const number = type === "number" ? String(Number(value)) : value;
  const [isFocusForm, setIsFocusForm] = useState(false);
  const [isPasswordShow, setIsPassword] = useState(false);

  return (
    <div
      onFocus={() => setIsFocusForm(true)}
      onBlur={() => setIsFocusForm(false)}
    >
      {label && (
        <label
          className={
            touched[name]
              ? value
                ? "error-label isValue"
                : "error-label"
              : isFocusForm || value
              ? "onFocusLabel"
              : "onBlurLabel"
          }
        >
          {label}
        </label>
      )}
      {leadicon && (
        <span
          className={
            touched[name]
              ? value
                ? "form-icon"
                : "form-icon error-form-icon"
              : isFocusForm
              ? "form-icon active"
              : "form-icon"
          }
        >
          <i className={leadicon}></i>
        </span>
      )}
      {trailicon && (
        <span
          className={
            isFocusForm
              ? "form-icon form-trail-icon active"
              : "form-icon form-trail-icon"
          }
        >
          <i className={trailicon}></i>
        </span>
      )}
      {passwordicon && (
        <span
          className={
            isFocusForm
              ? "form-icon form-trail-icon active"
              : "form-icon form-trail-icon"
          }
          onClick={() => setIsPassword(!isPasswordShow)}
        >
          {isPasswordShow ? (
            <i className={"fa fa-eye"}></i>
          ) : (
            <i className={"fa fa-eye-slash"}></i>
          )}
        </span>
      )}
      <Field
        {...props}
        value={number}
        name={name}
        placeholder={placeholder}
        type={isPasswordShow ? "text" : type}
        className={
          touched[name]
            ? value
              ? "form-control"
              : "form-control error-form-control"
            : "form-control"
        }
        disabled={disabled}
        data-date={value ? moment(value).format("DD-MMMM-YYYY") : placeholder}
      />
      <FormikError errors={errors} touched={touched} name={name} />
    </div>
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
