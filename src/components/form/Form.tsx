import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { Formik, Form } from "formik";

import getForms from "lib/forms";
import getIcons from "lib/getIcons";
import Button from "components/button";
import Input from "components/input";

import stl from "./Form.module.scss";

interface Props {
  title: string;
  initialVals: Object;
}

const CustomForm = ({ title, initialVals }: Props) => {
  console.log(initialVals, "this");

  const formikRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    console.log(formikRef.current.values, "this is you are looking for.");
    //@ts-ignore
    formikRef.current.resetForm();
  }, [initialVals]);

  return (
    <div className={stl.formContainer}>
      <div className={stl.title}>
        {getIcons(title)}
        <span className={stl.text}>{title}</span>
      </div>
      <Formik
        innerRef={formikRef}
        initialValues={{ ...initialVals }}
        validateOnBlur={true}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(initialVals);
          console.log(values, "this");
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
              <Button
                title="Submit"
                type="submit"
                width="120px"
                handleOnClick={() => props.submitForm()}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomForm;
