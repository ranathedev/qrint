import React from "react";
import { Formik, Form } from "formik";

import Input from "components/input";
import Button from "components/button";

import stl from "./Form.module.scss";

interface Props {
  initialVals: Object;
  fields: Array<Object>;
  formName: string;
}

const CustomForm = ({ initialVals, fields, formName }: Props) => {
  return (
    <div className={stl.form}>
      <span className={stl.formTitle}>{formName}</span>
      <Formik
        initialValues={initialVals}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props: any) => (
          <Form>
            {fields.map((field: any) => (
              <Input
                id={field.id}
                placeholder={field.placeholder}
                label={field.label}
                type={field.type}
              />
            ))}
            <Button title="Submit" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

CustomForm.defaultProps = {
  formName: "Form Name",
  initialVals: { ssid: "", password: "" },
  fields: [
    {
      id: "ssid",
      placeholder: "SSID",
      label: "Network Name",
      type: "text",
      key: "ssid",
    },
    {
      id: "password",
      placeholder: "Password",
      label: "Wifi Password",
      type: "password",
      key: "password",
    },
  ],
};

export default CustomForm;
