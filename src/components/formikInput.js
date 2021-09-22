import React, { useState } from "react";
import { Field } from "formik";
import FormikError from "./formikError";
import moment from "moment";
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";
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
      {/* label */}
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
      {/* leadIcon */}
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
          {leadicon}
        </span>
      )}
      {/* trailIcon */}
      {trailicon && (
        <span
          className={
            touched[name]
              ? value
                ? "form-icon form-trail-icon"
                : "form-icon form-trail-icon form-trail-icon-error"
              : isFocusForm
              ? "form-icon form-trail-icon active"
              : "form-icon form-trail-icon"
          }
        >
          {trailicon}
        </span>
      )}
      {/* Password Icon */}
      {value && passwordicon && (
        <span
          className={
            touched[name]
              ? value
                ? "form-icon form-trail-icon"
                : "form-icon form-trail-icon form-trail-icon-error"
              : isFocusForm
              ? "form-icon form-trail-icon active"
              : "form-icon form-trail-icon"
          }
          onClick={() => setIsPassword(!isPasswordShow)}
        >
          {isPasswordShow ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
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
