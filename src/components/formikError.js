// Dont touch this file
import React from "react";
const FormikError = ({ errors, name, touched }) => {
  const errorRowIndex = name?.split(".")[1];
  const errorRowName = name?.split(".")[2];
  const errorMasseage = errors?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];
  const touchedMasseage =
    touched?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];

  return (
    <p
      style={{
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px",
        letterSpacing: ".15px",
        width: "100%",
        marginTop: "0",
        marginBottom: "0",
        textAlign: "left",
      }}
      className={errors[name] || errorMasseage ? "error" : "d-none"}
    >
      {errors && errors[name] && touched && touched[name]
        ? errors[name].value || errors[name]
        : ""}

      {errors && errorMasseage && touched && touchedMasseage
        ? errorMasseage.value || errorMasseage
        : ""}
    </p>
  );
};

export default FormikError;
