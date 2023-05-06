import React, { ReactNode } from "react";

import DownloadIcon from "assets/download.svg";

import stl from "./Button.module.scss";

interface Props {
  title: string;
  icon: ReactNode;
  handleOnClick: () => void;
}

const Button = ({ title, icon, handleOnClick }: Props) => {
  return (
    <button onClick={handleOnClick} className={stl.btn}>
      {title} {icon}
    </button>
  );
};

Button.defaultProps = {
  title: "JPG",
  icon: <DownloadIcon />,
  handleOnClick: () => console.log("Downloading..."),
};

export default Button;
