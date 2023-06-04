import React from "react";

import CustomForm from "components/form";
import getInitVals from "lib/initialVals";

import stl from "./InputContainer.module.scss";

interface Props {
  title: string;
}

const InputContainer = ({ title }: Props) => {
  return (
    <div className={stl.inputContainer}>
      <CustomForm title={title} initialVals={getInitVals(title)} />
    </div>
  );
};

export default InputContainer;
