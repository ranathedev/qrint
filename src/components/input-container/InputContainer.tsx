import React from "react";

import CustomForm from "components/form";

import stl from "./InputContainer.module.scss";

const InputContainer = () => {
  return (
    <div className={stl.inputContainer}>
      <CustomForm />
    </div>
  );
};

export default InputContainer;
