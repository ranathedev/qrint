import React from "react";

import CustomForm from "components/form";
import getInitVals from "lib/initialVals";

import stl from "./InputContainer.module.scss";

interface Props {
  title: string;
  setValue: (arg: string) => void;
}

const InputContainer = ({ title, setValue }: Props) => {
  return (
    <div className={stl.inputContainer}>
      <CustomForm
        title={title}
        initialVals={getInitVals(title)}
        setValue={setValue}
      />
    </div>
  );
};

export default InputContainer;
