import React from "react";
import clsx from "clsx";
import { Formik, Form } from "formik";

import getForms from "lib/forms";
import getInitVals from "lib/initialVals";
import getIcons from "lib/getIcons";
import Button from "components/button";
import Input from "components/input";

import stl from "./Form.module.scss";

interface Props {
  title: string;
}

const CustomForm = ({ title }: Props) => {
  return (
    <div className={stl.formContainer}>
      <div className={stl.title}>
        {getIcons(title)}
        <span className={stl.text}>{title}</span>
      </div>
      <Formik
        initialValues={getInitVals(title)}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props: any) => (
          <Form
            className={clsx(stl.form, title === "VCARD" ? stl.vcardForm : "")}
          >
            {getForms(title)?.map((field: any, i: number) => (
              <Input
                key={i}
                id={field.id}
                placeholder={field.placeholder}
                label={field.label}
                type={field.type}
              />
            ))}
            <div className={stl.btnContainer}>
              <Button title="Submit" type="submit" width="120px" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
