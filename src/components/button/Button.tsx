import React, { ReactNode } from "react";

import stl from "./Button.module.scss";

interface Props {
  title: string;
  icon?: ReactNode;
  width?: string;
  type?: "submit" | "reset";
  handleOnClick: () => void;
}

const Button = ({ title, icon, type, handleOnClick, width }: Props) => {
  return (
    <button
      style={{ width }}
      type={type}
      onClick={handleOnClick}
      className={stl.btn}
    >
      {title} {icon && icon}
    </button>
  );
};

Button.defaultProps = {
  title: "JPG",
  handleOnClick: () => console.log("Clicked..."),
};

export default Button;
