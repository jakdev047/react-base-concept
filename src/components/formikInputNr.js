import React, { useState } from "react";
import { Field } from "formik";
import FormikError from "./formikError";
import moment from "moment";
const FormikInputNotReq = (props) => {
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
  } = props;
  // const number = type === "number" ? String(Number(value)) : value;
  const [isFocusForm, setIsFocusForm] = useState(false);

  return (
    <div
      onFocus={() => setIsFocusForm(true)}
      onBlur={() => setIsFocusForm(false)}
    >
      {label && (
        <label
          className={isFocusForm || value ? "onFocusLabel" : "onBlurLabel"}
        >
          {label}
        </label>
      )}
      {leadicon && (
        <span className={isFocusForm ? "form-icon active" : "form-icon"}>
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
      <Field
        {...props}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        className={"form-control"}
        disabled={disabled}
        data-date={value ? moment(value).format("DD-MMMM-YYYY") : placeholder}
      />
      <FormikError errors={errors} touched={touched} name={name} />
    </div>
  );
};

export default FormikInputNotReq;

// usage
