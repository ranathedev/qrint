import React from "react";

import CustomForm from "components/form";

import stl from "./InputContainer.module.scss";

interface Props {
  title: string;
}

const InputContainer = ({ title }: Props) => {
  return (
    <div className={stl.inputContainer}>
      <CustomForm title={title} />
    </div>
  );
};

export default InputContainer;
