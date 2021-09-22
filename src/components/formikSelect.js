import React from "react";
import customStyles from "./selectCustomStyle";
import FormikError from "./formikError";
import Select from "react-select";

const FormikSelect = (props) => {
  const {
    name,
    options,
    value,
    placeholder,
    onChange,
    errors,
    touched,
    label,
  } = props;

  return (
    <div className="formik-select">
      {label && <label> {label} </label>}
      <Select
        onChange={onChange}
        options={options || []}
        value={value || ""}
        isSearchable={true}
        name={name}
        styles={customStyles}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
        })}
        {...props}
      />
      <FormikError errors={errors} name={name} touched={touched} />
    </div>
  );
};

export default FormikSelect;

// Uses
/* 
<FormikSelect
  name="category"
  options={[]}
  value={values?.category}
  onChange={(valueOption) => {
    setFieldValue(name, valueOption);
  }}
  errors={errors}
  touched={touched}
  placeholder="Category"
/>;
 */
