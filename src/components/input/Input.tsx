import React from "react";
import { Field } from "formik";

import stl from "./Input.module.scss";

interface Props {
  placeholder: string;
  label: string;
  id: string;
  type: string;
  width: string;
}

const Input = ({ placeholder, label, id, type, width }: Props) => {
  return (
    <div style={{ width }} className={stl.input}>
      <label>{label + " :"}</label>
      {type === "textarea" ? (
        <textarea id={id} placeholder={placeholder} />
      ) : (
        <Field
          id={id}
          className={stl.input}
          name={id}
          placeholder={placeholder}
          type={type}
        />
      )}
    </div>
  );
};

Input.defaultProps = {
  placeholder: "SSID",
  label: "Network Name",
  id: "ssid",
  width: "300px",
  type: "text",
};

export default Input;
