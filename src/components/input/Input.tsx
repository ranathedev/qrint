import React from "react";
import clsx from "clsx";
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
    <div
      style={{ width }}
      className={clsx(stl.input, type === "checkbox" ? stl.checkbox : "")}
    >
      <label>{type !== "checkbox" ? label + " :" : label + " "}</label>
      {type === "textarea" ? (
        <textarea id={id} placeholder={placeholder} />
      ) : (
        <Field id={id} name={id} placeholder={placeholder} type={type} />
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
